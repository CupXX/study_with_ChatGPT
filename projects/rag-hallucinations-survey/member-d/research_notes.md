# Current research record — 24 October 2026

## Revised allocation and deliverable
- Active Survey deliverable: **Section 6 — Context Construction and Generation Failures**, approximately four compiled pages **subject to the team's confirmed ACM template**.
- `sections/Section6.tex` is the new unified English first draft: Stage 3 (context construction) plus Stage 4 (generation/knowledge utilisation), with distinct scope boundaries and an evidence comparison.
- `sections/S9.tex` is the preserved prior Generation-only work, not a file to discard or silently overwrite.
- `sections/S2.tex` is retained as the older factual-methodology scaffold. Under the new screenshot allocation Xuefeng owns review methodology; reuse of S2 requires coordination, not dual authorship.
- `main.tex` previews **only Section6**; this is a standalone manuscript wrapper, not an agreed final ACM mode.
- New references: Liu et al. 2024 TACL (position effects); Xu et al. 2024 ICLR RECOMP (extractive/abstractive compression and manual faithfulness checks); Jiang et al. 2024 ACL LongLLMLingua (question-aware compression/reordering). Full publisher metadata in `references.bib`; detailed summaries in `evidence_matrix.csv`.
- The literature claims are not experimental findings of this team. The 35-page global Survey is a planning target and the Section 6 four-page final-layout budget is NOT independently confirmed.

## Research findings and methodological limits
1. **Retrieved vs visible vs used:** failure must be traced through returned candidates, final model-visible context, and observed answer; do not classify stage from output alone.
2. **Position:** Liu 2024 varies placement of a known answer-bearing passage. Position-dependent QA performance is evidence of long-context sensitivity, **not** a measured deployment hallucination rate and not uniquely Stage 3.
3. **Selection/compression:** RECOMP changes the retrieved material forwarded to the model; its manual audit (Section 6, Table 4) shows compressed summaries are not uniformly faithful or comprehensive. Do not equate reduced tokens with retained entailment.
4. **Compression/reordering:** LongLLMLingua tests question-aware ordering and budgeted compression across specified tasks. Its QA/latency improvements cannot be claimed as universal hallucination reduction.
5. **Conflict boundary:** conflicting passages in assembled context are an input condition; generator interpretation and source resolution are potentially Stage 4. Jin 2024 and Wang 2025 do not establish a universal prompt-format causal effect.
6. **Truncation:** a possible Stage 3 mechanism; the current added papers do **not** establish a measured truncation-specific RAG hallucination rate. Avoid turning this into an asserted observed empirical result.
7. **PRISMA:** only member-specific targeted discovery and publisher/full-paper verification were recorded here; no group-wide formal search or PRISMA counts are claimed.

## Actual targeted web research on 2026-10-24
Searched publisher/conference pages for:
- `Lost in the Middle How Language Models Use Long Contexts Liu 2024 evidence position`
- `RECOMP Improving Retrieval-Augmented LMs with Context Compression and Selective Augmentation ICLR 2024`
- `LongLLMLingua prompt compression query aware reorder NaturalQuestions ACL 2024`
- `RAG context construction ordering truncation compression conflicting context evidence`
Reviewed three original PDFs and their publisher/conference metadata, including Liu Figure 1 and sections 2/5, Xu Sections 2/3/6 and Table 4, Jiang Sections 4/5 and Table 1. These are **targeted additions**, not a reproducible systematic corpus screen. No query-level hit counts, deduplication totals, or unsupported coverage percentages are asserted.

## Handoffs needed for integration
- **Taxonomy author (Ashwin):** maintain separate Stage 3 vs Stage 4 mechanism rows and preserve ambiguous/multi-stage assignments; source-position and compression results are Stage 3/4 boundary cases.
- **Retrieval/source chapter (Peiqi):** source/index construction = Stage 1, retrieval candidates/ranking = Stage 2; final-prompt selection, order, truncation, compression = Stage 3. Clarify where filtering and reranking actually operate in each study.
- **Detection/mitigation chapter (Jusson after the swap):** methods/accuracy/latency/abstention evidence from RECOMP, LongLLMLingua, Self-RAG, ASTUTE RAG and Joren; do not create a cross-benchmark leaderboard.
- **Taxonomy/domain/case and discussion authors:** Liu location sensitivity is task specific; RECOMP's manually checked faithfulness is not deployment-case validation; answer-support vs source correctness needs explicit reference rules.
- **Coordinator:** fix final printed section numbering and the canonical shared `.bib` merging, and verify all six drafts cover RQ1a--RQ6 and promised documented-case assessment. Confirm Survey structure is not silently used to replace the separate final report plan.

## Pending integration checks
- [TEAM DECISION] Agreed final ACM `acmsmall` / manuscript format, actual four-page check, shared Overleaf permissions, citation merge.
- [SOURCE CHECK] Group member or editor should spot-check selected Section 6 source-to-claim links in original papers.
- [TEAM DECISION] Where to place the shared taxonomy-to-manifestation mappings and cascading-case synthesis; Section 6 supplies only limited hypotheses and evidence.
- [TEAM DECISION] Whether final Section 6 needs further condensation once actual compiled page count is known.

---

## Archived record — 20 October 2026 (pre-reallocation)

**Current as of 2026-10-20.** GitHub is the authoritative text version. S9 has a full English working draft, but its exact final page count has not been confirmed in the group's ACM template. S2 remains a factual-methodology scaffold pending six members' real search/screening records.

## Locked section plan
- 9.1 Scope and Stage Boundaries
- 9.2 Failure Mechanisms
- 9.3 Empirical Evidence and Critical Comparison
- 9.4 Downstream Effects and Research Implications

## Working synthesis (distinguish synthesis from original authors' findings)
1. Whether evidence is actually present and sufficient for the generator is distinct from whether it is used well; see Joren 2025, Sections 3–4.
2. Simple rules to always trust retrieval or always trust memory are unreliable under observed conflict settings; see Jin 2024 and Wang 2025.
3. Multi-hop use of evidence, correct answer generation, claim-level support and valid citation are not interchangeable evaluation goals; see Islam 2024, Gao 2023, Niu 2024.
4. RAGTruth is primarily an output-manifestation and detection benchmark. ALCE tests end-to-end citation quality; neither alone proves Stage 4 origin.
5. S9 addresses mechanisms and qualified downstream effects. Full mitigation comparisons belong to F's S10.

## Research evidence set (seven sources)
- Jin et al. (2024) — LREC-COLING — https://aclanthology.org/2024.lrec-main.1466/
- Wang et al. (2025) — ACL — https://aclanthology.org/2025.acl-long.1476/
- Gao et al. (2023) — EMNLP — https://aclanthology.org/2023.emnlp-main.398/
- Niu et al. (2024) — ACL — https://aclanthology.org/2024.acl-long.585/
- Islam et al. (2024) — Findings EMNLP — https://aclanthology.org/2024.findings-emnlp.831/
- Asai et al. (2024) — ICLR — https://proceedings.iclr.cc/paper_files/paper/2024/hash/25f7be9694d7b32d5cc670927b8091e1-Abstract-Conference.html
- Joren et al. (2025) — ICLR — https://proceedings.iclr.cc/paper_files/paper/2025/hash/33dffa2e3d2ab74a783d1a8c292f66d9-Abstract-Conference.html

## Actual search notes (not comprehensive team history)
**Date:** 2026-10-20. The following searches were made within this member's ChatGPT research session. These records do NOT constitute the group's complete screening log or PRISMA counts.
- Web search: `site:aclanthology.org "Tug-of-War between Knowledge" Jin 2024 knowledge conflicts RAG`
- Web search: `site:aclanthology.org "Astute RAG" knowledge conflicts 2025`
- Web search: `site:aclanthology.org "Enabling Large Language Models to Generate Text with Citations" Gao ALCE`
- Web search: `site:aclanthology.org "RAGTruth" Niu 2024`
- Web search: `RAG generator fail to use retrieved evidence chain of thought multi hop reasoning paper evidence utilisation study RAG hallucination 2024 2025`
- Web search: `site:aclanthology.org "RAG" "faithfulness" "reasoning" generator multi documents 2025`
- Web search: `"Sufficient Context: A New Lens on Retrieval Augmented Generation Systems" 2025 study abstention`
- Web search: `"Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection" 2024 ICLR`
**Selection process:** targeted discovery for directly relevant studies; checked conference records and original full-text PDFs. No systematic exhaustive search, deduplication totals, per-query result counts, or formal team screening counts were established.

## Handoffs
- **Member C — taxonomy**: use context sufficiency (Joren 2025) as a boundary diagnostic; treat retrieval noise as input condition and knowledge selection as the generator behavior. Possible cross-stage labels remain.
- **Member E — manifestations/cases**: RAGTruth Table 1 example; attribution mismatch in ALCE; unsupported vs contradictory claims are not guaranteed Stage 4 failures.
- **Member F — detection/mitigation**: ASTUTE RAG source consolidation; Self-RAG reflection tokens; OPEN-RAG contrastive training; Jin's contrastive decoding; Joren's selective abstention. Compare baselines, model access, cost, accuracy and answer coverage; no cross-benchmark leaderboard.
- **All members to D — S2**: actual sources and search strings, date windows, deduplication, inclusion/exclusion decisions, full-text status, excluded papers with reasons, coding changes, and review checks.

## Outstanding
- [TEAM DECISION] Final ACM acmsmall/manuscript mode, shared Overleaf access and confirmed compiled page allowance.
- [PROJECT LOG NEEDED] Six authors' search/screening records and actual synthesis procedure before any team-wide S2 factual claims.
- [SOURCE CHECK] Group should independently spot-check source-to-claim links during integration.
- [EVIDENCE NEEDED] More directly controlled generator-only studies could strengthen claims on unsupported inference and stage-specific causation.
