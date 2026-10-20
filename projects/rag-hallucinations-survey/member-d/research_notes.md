# Member D — Research and Handoff Notes
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
