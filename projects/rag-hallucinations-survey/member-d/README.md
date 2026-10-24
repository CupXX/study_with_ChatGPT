# RAG Hallucinations Survey — Yanzhang / Section 6

**Status (2026-10-24):** integrated English first draft for **Section 6 — Context Construction and Generation Failures** is committed, with source-linked notes and evidence records. **Final ACM page count and clean TeX compilation are not yet independently confirmed.** The working preview uses `acmart` manuscript mode and is not the group's final template.

## Active first-draft files
- [`sections/Section6.tex`](sections/Section6.tex): **new** combined Context Construction (Stage 3) + Generation and Knowledge Utilisation (Stage 4) Survey chapter. Uses cited empirical studies and a stage-boundary table.
- [`main.tex`](main.tex): provisional standalone preview now includes Section 6 only.
- [`references.bib`](references.bib): 11 references (seven original RAG studies, three added context-construction papers, and PRISMA 2020 as archival S2 reference).
- [`evidence_matrix.csv`](evidence_matrix.csv): ten RAG/long-context empirical studies with stage scope, limitations and source locations.
- [`research_notes.md`](research_notes.md): actual searches, interpretive limits, research questions, unresolved checks and handoff recipients.

## Historical files (preserved)
- `sections/S9.tex`: prior Stage 4-only chapter. This underlies the Generation analysis and remains available for integrating with the old Master Draft.
- `sections/S2.tex`: the prior methodology scaffold (team new allocation lists Xuefeng for methodology); do not silently re-submit as this owner's second assigned chapter.

## Reuse instructions for group integration
1. Merge **Section6.tex** into the shared LaTeX project (adjust final section number as needed).
2. Import only the referenced entries from **references.bib** into the group's canonical BibTeX database; deduplicate existing keys.
3. Check every citation against the study and preserve Stage 3 vs Stage 4 boundaries. Output hallucination labels cannot alone establish a root cause.
4. Compare the compiled page count in the **actual agreed ACM class mode** and reduce text/table length only if necessary, without deleting key evidence.
5. Coordinate with Peiqi's source/retrieval section, Ashwin's taxonomy, and Jusson's detection/mitigation section. Ensure RQ1a--RQ6 and cross-stage/case outcomes have an owner.

## Research and integrity
- Context sources: Liu et al. (TACL 2024), Xu et al. (ICLR 2024, RECOMP), Jiang et al. (ACL 2024, LongLLMLingua).
- Prior generation sources: Jin (2024), Wang (2025), Gao (2023), Niu (2024), Islam (2024), Asai (2024), Joren (2025).
- New numerical findings are not conflated across model setups or treated as proof of stage-exclusive causation.
- Do not invent search/screening figures, case studies, experiment results, reviewer agreement or team decisions.
- Source priority: original research papers, then the replacement Proposal; Master Draft v2.2 defines the method/terminology but is **not** evidence.

**Visibility warning:** This parent GitHub repository is public; do not add private group contact details or unpublished personal information.
