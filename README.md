# study_with_ChatGPT

A personal learning workspace and reusable skill library for learning with ChatGPT.

## Active courses

- `learning/software-fundamentals/` — active mission defined. Focus: understand how modern software systems work and fit together, without turning the course into coding practice.
- `learning/mbti/` — course initialized. Mission still needs a short goal-setting discussion before the first lesson.

A later `AI Agents & Harness Engineering` course is intentionally deferred until the software fundamentals foundation is stronger. The future `What's Dinner` agent will be used first as the Software Fundamentals graduation assessment, and later as a project-based vehicle for the Agent/Harness course.

## Repository structure

- `learning/` — independent Teach workspaces, one topic per directory.
- `skills/` — reusable skills we create or adapt for our own workflow.
- `vendor/` — pinned third-party skill snapshots, kept separate from our own skills.

## Third-party skills

Matt Pocock's skills are pinned to upstream commit `5b15a47f2d7150f545fbcacbfe381787fc0230dc` and are intended to live under `vendor/matt-pocock-skills/`. A repository workflow handles copying the pinned upstream snapshot so the files remain separate and reproducible.
