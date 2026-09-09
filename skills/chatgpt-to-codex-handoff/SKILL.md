---
name: chatgpt-to-codex-handoff
description: Use when a ChatGPT conversation has produced context or decisions that need to move into Codex or another coding-agent session without losing repository source-of-truth boundaries.
---

# ChatGPT → Codex Handoff

## Overview

Use this skill when work needs to travel from ChatGPT into Codex. The handoff is a temporary transport artifact, not a new source of truth. Durable project knowledge belongs in the repository's authoritative artifacts; the handoff carries only the context needed for the next agent to resume correctly.

This skill is especially appropriate when the user says phrases such as “handoff 到 Codex”, “交接给 Codex”, “给我 handoff 到 Codex”, or equivalent wording.

## Core rules

1. **Repository artifacts stay authoritative.** Prefer existing `AGENTS.md`, `CONTEXT.md`, design docs, specs, ADRs, issues, Wayfinder maps/tickets, plans, commits, and diffs over restating their contents.
2. **Do not duplicate durable knowledge.** Reference authoritative artifacts by exact path or URL instead of copying them into the handoff.
3. **Do not bury new durable decisions in the handoff.** If the current conversation produced a decision that should remain true after this session, either persist it to the appropriate repository artifact when the user has authorized that write, or clearly mark it as needing durable persistence before implementation.
4. **Preserve session-only reasoning that matters.** Carry forward the user's intent, rejected options, unresolved questions, current workflow state, and why the next action is the next action when that information is not already stored elsewhere.
5. **Keep the launcher prompt short.** The launcher only tells Codex how to unpack the handoff. It must not become a second spec.
6. **Respect workflow ownership.** If Wayfinder, a prototype ticket, Superpowers, or another explicit workflow is active, state which workflow owns the next phase and which skills should or should not run.

## Workflow

1. Identify the **next-session goal** and target repository or working directory.
2. Inspect the repository when accessible and identify the current authoritative sources.
3. Separate information into:
   - already durable in the repo;
   - new durable knowledge that still needs persistence;
   - session-only context needed by the next agent.
4. Produce one Markdown handoff artifact using the structure below.
5. Produce one short Codex launcher prompt that tells Codex to read the handoff first, then read the authoritative sources it references, then continue from the stated next action.
6. Do not instruct Codex to restart discovery, redesign settled decisions, or re-plan unless the handoff explicitly says that is necessary.

## Handoff structure

```markdown
# <Project / Task> Handoff

## Next-session goal
<What the next Codex session should accomplish.>

## Target repository / working directory
<owner/repo, branch, directory, or other concrete target if known.>

## Authoritative sources
- `<exact path or URL>` — <what it governs>

## Current state
<Where the work actually stands now. Include current workflow phase when relevant.>

## Session-only context
<Important reasoning, rejected options, user preferences, or constraints that are not already durable elsewhere.>

## Settled decisions from this session
- <Decision> — <where it is already persisted, or “needs durable persistence”>

## Open questions / risks
- <Only unresolved items that matter to the next session.>

## Next action
<The concrete first action Codex should take.>

## Suggested skills
- `<skill-name>` — <why it is appropriate now>
```

Omit empty sections rather than filling them with noise.

## Codex launcher prompt

Default shape:

```text
Read the attached handoff first.
Then read every authoritative repository artifact it references.
Treat repository artifacts as sources of truth and the handoff as session-transfer context only.
Resume from the handoff's Next action and use its Suggested skills.
Do not repeat completed discovery or redesign settled decisions.
Do not begin implementation unless the handoff says the current phase is implementation.
```

Add only the minimum target-specific detail Codex needs to locate the handoff or repository.

## Common mistakes

- Writing a second giant prompt that duplicates the handoff.
- Copying an existing spec, design doc, or issue history into the handoff.
- Treating the handoff as permanent project documentation.
- Losing the reason behind a decision when that reason exists only in the current conversation.
- Sending Codex into implementation while Wayfinder or another planning workflow still owns the phase.
- Restarting an existing Wayfinder intake/map instead of resuming its persisted state.

## Source and adaptation

This workflow is adapted from Matt Pocock's `handoff` concept: use a portable Markdown artifact when work must travel across harnesses or sessions, and avoid duplicating information already captured in durable artifacts. This local skill adds an explicit ChatGPT → Codex convention, repository source-of-truth checks, durable-vs-transient separation, and a short Codex launcher prompt.
