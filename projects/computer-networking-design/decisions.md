# Four season Digital Consulting — Network Design Decisions

> **Course project:** Computer Networking Design Project (individual assignment)  
> **Organisation:** Four season Digital Consulting (fictional SME digital transformation consultancy)  
> **Last updated:** 2026-10-21  
> **Status:** Design in progress — decisions confirmed through **Decision 6.2**  
> **Source of decisions:** Student–ChatGPT design discussions. This is a working decision log, **not** a completed report or implementation.

## How to use this document

- **Confirmed** means the student has explicitly accepted the choice in conversation.
- **Pending / provisional** means a possibility or planning assumption, **not** an agreed implementation detail.
- If a confirmed decision changes later, document the change and reason, and update the affected IP/topology/configuration sections.
- Keep the report, logical/physical diagrams, Packet Tracer implementation, and evidence mutually consistent.
- This repository is public: do not commit student IDs, private contact details, secrets, or sensitive material. Verify course policy for any AI-assisted final submissions.

## Decision 1 — Organisation and business purpose ✅ Confirmed

- **Name:** Four season Digital Consulting.
- **Type:** Fictional Adelaide-based IT consulting and digital transformation company.
- **Positioning:** Provides consulting and technology solutions to help small and medium-sized enterprises (SMEs) transform digitally.
- **Why this context:** Consultants, IT specialists, and technical project staff plausibly require extensive computing resources, shared servers, business email, reliable office-to-office connectivity, and wireless access.

## Decision 2 — Office locations and roles ✅ Confirmed

| Office | Adelaide suburb | Layout | Workstations | Business role |
|---|---|---|---:|---|
| Head Office (HQ) | Adelaide CBD | 2 floors | 20 PCs, 10 per floor | Floor 1: consulting/client services; Floor 2: management and IT, with central servers |
| Branch A | Norwood | 1 floor | 10 PCs | Client consulting and project delivery |
| Branch B | Mawson Lakes | 1 floor | 10 PCs | Technology development and technical support |
| **Total** | | | **40 PCs** | |

- These are **fictional office locations**, not addresses of real leased premises.
- **Internet access is centralised at HQ**; branches must reach the Internet through HQ.
- Branch-to-branch network traffic also traverses HQ in the current hub-and-spoke design.

## Decision 3 — High-level network architecture ✅ Confirmed at conceptual level

- Hub-and-spoke topology: **HQ ↔ Branch A** and **HQ ↔ Branch B**.
- Each site uses a router and local switched network; HQ contains two office floors and centrally located Web/Mail services.
- PCs, wireless laptop connectivity, network printers, a corporate Web Server, and a corporate Mail Server are part of the assignment design requirements.
- Exact router/switch models, interface counts, cabling/WAN simulation method, Wi-Fi configuration, and additional services are **pending**.
- Earlier *preliminary* device counts (3 routers, 4 switches, 4 APs, 4 printers, 2 servers) are **not final procurement/device-table decisions**; they must be validated against the topology and Packet Tracer.

## Decision 4 — Network segmentation ✅ Confirmed: Option B / Moderate Segmentation

- HQ office users and functions are separated into VLANs/subnets:
  - **VLAN 10:** HQ Floor 1 staff
  - **VLAN 20:** HQ Floor 2 staff
  - **VLAN 30:** HQ servers
  - **VLAN 40:** HQ wireless clients
- Each branch initially uses **one local office LAN/subnet**, rather than extensive per-department VLANs.
- Routing between HQ VLANs will be required; **router-on-a-stick vs Layer 3 switching is not decided yet**.
- VLAN separation **alone is not a security policy**. Detailed ACL/access-control decisions remain pending.
- A provisional simplification is for branch Wi-Fi clients to share each branch's office LAN; confirm during wireless design.

## Decision 5 — IP addressing and VLSM ✅ Confirmed

### 5.1 — Assignment-allocated private block

- **Overall private address block:** `10.0.0.0/18`
- **Mask:** `255.255.192.0`
- **Range of the allocated block:** `10.0.0.0` through `10.0.63.255`.
- The /18 is the **parent address pool**, not the subnet mask to apply unchanged to every office.

### 5.2–5.5 — Subnet capacity choices

| Purpose | Agreed prefix | Usable host IPs per subnet |
|---|---|---:|
| Four staff LANs (HQ F1, HQ F2, Branch A, Branch B) | /27 each | 30 each |
| HQ Server VLAN 30 | /28 | 14 |
| HQ Wireless VLAN 40 | /26 | 62 |
| Two private HQ–branch point-to-point WAN links | /30 each | 2 each |

- A **/30 WAN link** gives two usable interface IPs to that one point-to-point router pair; it **does not** limit the total number of future branches. Additional links can have separate /30 subnets.
- Future branch additions may require more physical/logical WAN connectivity and routing changes.

### 5.6 — Actual internal subnet allocation

The following VLSM addresses were laid out and carried forward into routing design. They are non-overlapping and lie within `10.0.0.0/18`.

| Network | VLAN | CIDR network | Mask | Usable range | Broadcast |
|---|---:|---|---|---|---|
| HQ Wireless | 40 | `10.0.0.0/26` | `255.255.255.192` | `10.0.0.1–10.0.0.62` | `10.0.0.63` |
| HQ Floor 1 | 10 | `10.0.0.64/27` | `255.255.255.224` | `10.0.0.65–10.0.0.94` | `10.0.0.95` |
| HQ Floor 2 | 20 | `10.0.0.96/27` | `255.255.255.224` | `10.0.0.97–10.0.0.126` | `10.0.0.127` |
| Branch A LAN | — | `10.0.0.128/27` | `255.255.255.224` | `10.0.0.129–10.0.0.158` | `10.0.0.159` |
| Branch B LAN | — | `10.0.0.160/27` | `255.255.255.224` | `10.0.0.161–10.0.0.190` | `10.0.0.191` |
| HQ Servers | 30 | `10.0.0.192/28` | `255.255.255.240` | `10.0.0.193–10.0.0.206` | `10.0.0.207` |
| WAN 1 (HQ–A) | — | `10.0.0.208/30` | `255.255.255.252` | `10.0.0.209–10.0.0.210` | `10.0.0.211` |
| WAN 2 (HQ–B) | — | `10.0.0.212/30` | `255.255.255.252` | `10.0.0.213–10.0.0.214` | `10.0.0.215` |

**Not yet fixed:**
- Exact default gateway and endpoint/management IP addresses; using the first usable IP for each LAN gateway is a **proposed convention**, not yet a final interface allocation.
- The ISP-facing public IP/interface plan and any NAT configuration. The assignment mentions the public block `203.115.0.0/28`, but no addresses have been assigned from it yet.
- DHCP vs static address assignment for individual devices.
- Free addresses in the allocated /18 pool are reserved for future design, without a yet-defined expansion plan.

## Decision 6.1 — Routing method ✅ Confirmed: Static Routing

- **Selected:** Static Routing, rather than OSPF for the initial three-office topology.
- **Rationale:** With only two branches connected through HQ, static routes provide a straightforward, predictable routing design and simpler Packet Tracer testing/troubleshooting.
- **Known tradeoff:** New sites or altered links can require manual route updates; future migration to OSPF may be reconsidered when network size/topology warrants it.
- **Implementation outline (not CLI commands):**
  - Each branch can use a default route pointing towards HQ.
  - HQ will need paths to the Branch A and Branch B LANs through their corresponding WAN links.
  - HQ's own connected VLAN networks must be routed internally; final inter-VLAN method is still to be chosen.
  - HQ's Internet default route, ISP link, and any NAT are pending design decisions.
- **Testing:** Verify inter-office host connectivity and router-to-router ping, along with any other assignment-required evidence.

## Decision 6.2 — WAN connection model ✅ Confirmed: Serial WAN

- **Selected:** Two simulated point-to-point Serial WAN links, one from HQ to Branch A (Norwood) and one from HQ to Branch B (Mawson Lakes).
- **WAN 1:** `10.0.0.208/30` between HQ and Branch A.
- **WAN 2:** `10.0.0.212/30` between HQ and Branch B.
- **Reason:** Serial point-to-point connections are readily identifiable in Cisco Packet Tracer and fit the chosen /30 subnets and static-routing approach.
- **Physical requirements:** HQ router needs at least two suitable serial interfaces (built-in or modules); each branch router needs one. Verify supported models, compatible modules, appropriate Serial DCE/DTE cabling, and clocking during implementation.
- **Scope:** This is a **Packet Tracer teaching simulation**, not a claim that the company would lease traditional serial lines in a real modern network. Consider Ethernet WAN, leased services, and/or VPN as future alternatives.
- **Still pending:** Exact router models/interfaces, DCE end assignment, serial link configuration, routing next-hop IPs, and connection to the ISP/public IP block.

## Open design questions — not yet decided

1. **Decision 6.3 — Inter-VLAN routing:** Router-on-a-stick or Layer 3 switch? Check topology, port counts, and simulator support.
2. **Internet edge:** ISP-facing addresses, default route, and NAT design.
3. **Services:** Exact placement and IPs for Web/Mail/DNS/DHCP; naming and access requirements.
4. **Wireless:** HQ/branch SSIDs, client IP assignment, AP placement and VLAN association.
5. **Security:** Practical access policies that do not contradict required all-host ping connectivity.
6. **Hardware/physical:** Cisco device models, required ports and links, physical floors/rooms, scalable configuration.
7. **Evidence/documentation:** Consistent logical/physical diagrams, addressing appendix, device table, router configuration and ping evidence, AI-assisted research log, and final independent report.

## Decision history

| Date | Decision | Status |
|---|---|---|
| 2026-10-21 | Organisational identity, office locations, baseline architecture | Confirmed |
| 2026-10-21 | Moderate segmentation: HQ VLAN 10/20/30/40; branch office LANs | Confirmed |
| 2026-10-21 | Private block /18; four /27 LANs, server /28, wireless /26, two /30 WANs | Confirmed |
| 2026-10-21 | VLSM address allocation table above | Adopted as working addressing plan |
| 2026-10-21 | Static Routing for three sites | Confirmed |
| 2026-10-21 | Serial WAN links for HQ–Branch A and HQ–Branch B | Confirmed |
