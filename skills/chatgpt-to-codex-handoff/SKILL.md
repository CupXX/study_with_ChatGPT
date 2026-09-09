---
name: chatgpt-to-codex-handoff
description: Use when the user explicitly wants an active ChatGPT software-development thread transferred to Codex or another coding-agent harness.
disable-model-invocation: true
---

# ChatGPT → Codex Handoff

## Purpose

Move an active development thread across harnesses without creating a second project truth. Repository artifacts remain authoritative; the handoff is temporary transfer context that carries only what the next agent cannot reliably recover from those artifacts.

## Writing reference

Before drafting the handoff or launcher prompt, consult Matt Pocock's `writing-for-agents` skill when available. Apply its agent-facing writing principles: sharp context pointers, progressive disclosure, one source of truth per meaning, positive target behavior, and checkable completion criteria.

This skill owns **transport**, not the project's development phase. Preserve the current workflow owner (for example Wayfinder during decision mapping or Superpowers during implementation) and name it in the handoff.

## Workflow

1. **Name the destination.** Identify the next-session goal, target repository or working directory, current phase, and workflow owner. Complete this step when the next agent can tell what phase it is entering and what event ends that phase.
2. **Inspect authoritative sources.** When the repository is accessible, inspect the relevant `AGENTS.md` / `CLAUDE.md`, `CONTEXT.md`, design docs, specs, ADRs, issues, Wayfinder maps or tickets, plans, commits, diffs, and other durable artifacts. Complete this step when every durable fact the next agent needs has an exact path, URL, issue, or commit pointer where one exists.
3. **Classify the current conversation.** Separate information into:
   - **durable and already recorded** — reference its authoritative source;
   - **durable but not yet recorded** — persist it to the appropriate artifact when authorized and tooling permits, otherwise flag it as a persistence requirement;
   - **session-only context** — carry only the intent, reasoning, rejected options, constraints, or unresolved questions that materially affect the next session.
4. **Write the handoff artifact.** Use the structure below. Prefer a user-visible Markdown file outside the target repository when tooling permits. Treat it as disposable transfer material rather than project documentation.
5. **Write the launcher prompt.** Keep it short: identify the handoff, tell Codex to follow its authoritative pointers, resume the named workflow from `Next action`, and load the suggested skills.
6. **Verify the handoff.** Check every completion criterion in the Completion gate before presenting it as ready.

## Handoff structure

```markdown
# <Project / Task> Handoff

## Next-session goal
<What the next Codex session should accomplish and what counts as completing this phase.>

## Target repository / working directory
<owner/repo, branch, directory, or other concrete target if known.>

## Workflow owner and current phase
<Which workflow currently owns the work and where that workflow stands.>

## Authoritative sources
- `<exact path / URL / issue / commit>` — <what this source governs>

## Current state
<Only the state needed to locate the continuation point.>

## Session-only context
<Reasoning, rejected options, user intent, or constraints that matter and are not already durable elsewhere.>

## Durable knowledge pending persistence
- <Decision or fact> — <where it should be persisted before the dependent phase proceeds>

## Open questions / risks
- <Only unresolved items that affect the next session.>

## Next action
<The first concrete action the next agent should take, with a checkable completion condition.>

## Suggested skills
- `<skill-name>` — <why it is appropriate in the current phase>
```

Omit empty sections. Reference durable material instead of paraphrasing it.

## Codex launcher prompt

Default shape:

```text
Read the attached handoff first, then follow its Authoritative sources as the project sources of truth.
Resume at the recorded Workflow owner / current phase and begin with Next action.
Load the Suggested skills for that phase.
Re-open earlier discovery only when the handoff identifies an unresolved inconsistency or missing authoritative source.
If a referenced source is missing or stale, report that before advancing the dependent work.
```

Add only the minimum target-specific detail needed to locate the handoff or repository. The launcher is an entry point, not a second spec.

## Completion gate

The handoff is ready only when:

- the next-session goal and workflow owner are explicit;
- every referenced authoritative source has a concrete locator;
- durable recorded knowledge is represented by pointers rather than duplicated prose;
- any new durable decision has either been persisted or clearly marked for persistence;
- session-only context contains only information that changes how the next agent should proceed;
- `Next action` is concrete and checkable;
- suggested skills match the current phase;
- the launcher prompt can stay short because the handoff and repository carry the context.

## Common failure modes

- **Second source of truth:** the handoff restates a spec, design, ADR, plan, issue history, or Wayfinder state instead of pointing to it.
- **Hidden durable decision:** a decision that should survive the session exists only in the handoff.
- **Phase drift:** the launcher sends Codex into planning or implementation under a different workflow than the one currently owning the work.
- **Restarted discovery:** the next agent repeats completed exploration because the continuation point or authoritative pointers are weak.
- **Launcher sprawl:** the launcher grows into another requirements document.

## Source and adaptation

Adapted from Matt Pocock's `handoff` and `writing-for-agents` concepts. Matt's handoff provides portability across sessions or harnesses; this local workflow adds a stable ChatGPT → Codex convention, explicit durable-vs-session context separation, workflow ownership, repository source-of-truth checks, and a short launcher prompt.
