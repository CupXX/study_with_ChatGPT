# Mission — Software Fundamentals

## Why I am learning this

I want to understand how modern software systems work as systems: what the major parts do, how they communicate, why each part exists, how data and state move through the system, and how architectural choices affect behaviour and failure modes.

My goal is architectural understanding, not becoming a traditional code-first software engineer.

## What success looks like

By the end of this course, I should be able to:

- explain the purpose and behaviour of the major parts of a modern software system;
- reason about concepts such as runtime, process, state, persistence, database, API, request/response, asynchronous work, workers, deployment, and system boundaries;
- follow a system-level data flow from user action through the relevant components and back;
- understand why an architecture uses particular components and what trade-offs they introduce;
- identify likely classes of failure at a conceptual/system level;
- discuss architecture with ChatGPT or a coding agent and make informed product and architecture decisions without needing to implement the code myself;
- transfer the fundamentals to unfamiliar projects instead of memorising one stack.

## Depth rule

Learn downward only as far as necessary to explain important behaviour above it.

For example, concepts such as process, memory, runtime, compiler/interpreter, networking, and persistence are in scope when they explain real software behaviour. Deep CPU architecture, low-level assembly, and similarly distant implementation detail are out of scope unless they become necessary for understanding something important.

## Coding boundary

This is not a coding course.

- No requirement to hand-write production code.
- No requirement to read or modify source code as a learning objective.
- No algorithm or LeetCode-style track.
- Diagrams, concrete scenarios, data flows, simplified examples, and pseudocode-like explanations are welcome when they improve understanding.

## Teaching approach

Teach concepts from first principles, but anchor them in real systems and projects whenever possible. Reuse situations from projects I have already encountered when they make an abstract concept concrete.

Prioritise understanding over vocabulary. Test whether I can explain mechanisms and make decisions rather than whether I can repeat definitions.

## Graduation assessment — What's Dinner

Use the `What's Dinner` agent as the final integrative assessment.

ChatGPT should guide the process throughout. I will not be expected to implement the system myself. Instead, I should progressively make architecture and product decisions with guidance, explain why components are needed, trace the important data flows, identify trade-offs and likely failure points, and connect each decision back to fundamentals learned earlier in the course.

The assessment should deliberately revisit earlier concepts rather than introduce a completely separate project exercise.

## Out of scope for this course

AI-agent-specific architecture and Harness Engineering are not the primary subject of this course. They may be mentioned when useful, but they belong to a later dedicated course that can build on these fundamentals.
