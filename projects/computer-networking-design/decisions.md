# Four season Digital Consulting — Network Design Decisions

> **Course project:** Computer Networking Design Project (individual assignment)  
> **Organisation:** Four season Digital Consulting (fictional SME digital transformation consultancy)  
> **Last updated:** 2026-10-21  
> **Status:** Design in progress — decisions confirmed through **Decision 6.5**  
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
- Inter-VLAN routing for HQ VLANs is handled by Router-on-a-Stick (Decision 6.3).
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
- **Chosen NAT strategy:** PAT for outbound corporate user traffic plus Static NAT for separately published HQ Web and Mail Servers (Decision 6.4). Specific public address assignments, ISP-facing interfaces, NAT ACLs, and external-service access policies remain undecided. The assignment mentions public address block `203.115.0.0/28`.
- DHCP vs static address assignment for individual devices.
- Free addresses in the allocated /18 pool are reserved for future design, without a yet-defined expansion plan.

## Decision 6.1 — Routing method ✅ Confirmed: Static Routing

- **Selected:** Static Routing, rather than OSPF for the initial three-office topology.
- **Rationale:** With only two branches connected through HQ, static routes provide a straightforward, predictable routing design and simpler Packet Tracer testing/troubleshooting.
- **Known tradeoff:** New sites or altered links can require manual route updates; future migration to OSPF may be reconsidered when network size/topology warrants it.
- **Implementation outline (not CLI commands):**
  - Each branch can use a default route pointing towards HQ.
  - HQ will need paths to the Branch A and Branch B LANs through their corresponding WAN links.
  - HQ's own connected VLAN networks will be routed via the chosen Router-on-a-Stick subinterfaces.
  - HQ's Internet default route and ISP link are not configured yet; NAT strategy (PAT plus Static NAT) is confirmed in Decision 6.4, but its exact interface/IP configuration is pending.
- **Testing:** Verify inter-office host connectivity and router-to-router ping, along with any other assignment-required evidence.

## Decision 6.2 — WAN connection model ✅ Confirmed: Serial WAN

- **Selected:** Two simulated point-to-point Serial WAN links, one from HQ to Branch A (Norwood) and one from HQ to Branch B (Mawson Lakes).
- **WAN 1:** `10.0.0.208/30` between HQ and Branch A.
- **WAN 2:** `10.0.0.212/30` between HQ and Branch B.
- **Reason:** Serial point-to-point connections are readily identifiable in Cisco Packet Tracer and fit the chosen /30 subnets and static-routing approach.
- **Physical requirements:** HQ router needs at least two suitable serial interfaces (built-in or modules); each branch router needs one. Verify supported models, compatible modules, appropriate Serial DCE/DTE cabling, and clocking during implementation.
- **Scope:** This is a **Packet Tracer teaching simulation**, not a claim that the company would lease traditional serial lines in a real modern network. Consider Ethernet WAN, leased services, and/or VPN as future alternatives.
- **Still pending:** Exact router models/interfaces, DCE end assignment, serial link configuration, routing next-hop IPs, and connection to the ISP/public IP block.

## Decision 6.3 — Inter-VLAN routing ✅ Confirmed: Router-on-a-Stick

- **Selected:** Router-on-a-Stick at HQ instead of a Layer 3 switch.
- **Scope:** HQ VLANs 10 (Floor 1 staff), 20 (Floor 2 staff), 30 (servers), and 40 (wireless).
- **How it works:** A trunk from a HQ switch to one physical Ethernet interface on HQ Router carries multiple tagged VLANs. The router uses individual 802.1Q subinterfaces for inter-VLAN routing and each VLAN's default-gateway IP.
- **Switch topology:** The HQ floor switches must carry the relevant VLANs on a suitably configured trunk, with appropriate access-port assignment. Exact port mapping and which switch serves the router trunk are pending physical design.
- **WAN/ISP interfaces:** Keep two Serial interfaces for HQ–Branch A and HQ–Branch B. A separate routed Ethernet interface (or suitable alternative) is planned for the HQ–ISP connection; verify router interface/module capacity before final implementation.
- **Reason:** Reuses the HQ router, avoids the need for a dedicated Layer 3 switch, and fits a modest four-VLAN HQ with 20 office PCs.
- **Tradeoff:** Inter-VLAN traffic shares a router-facing trunk and the router's forwarding capacity, creating a possible performance bottleneck. VLAN separation itself is not an access-control policy.
- **Still pending:** Subinterface names, gateway IPs, switch/router device models, VLAN-to-port assignments, and whether any ACL is required. Do not treat the example layout as a finished Packet Tracer configuration.

## Decision 6.4 — Internet access and NAT strategy ✅ Confirmed: PAT + Static NAT

- **Selected:** Option B — **PAT (Port Address Translation) + Static NAT** at the headquarters Internet edge.
- **Outbound Internet access:** Clients in HQ and both branches are intended to access the Internet via HQ, with PAT allowing multiple private client IP addresses to share an outside public address. Branch-to-HQ routing must support this central egress.
- **Inbound published services:** Provide separate Static NAT public-to-private address mappings for the corporate **Web Server** and **Mail Server**, both hosted within HQ Server VLAN 30.
- **Public address resource:** The assignment-specified `203.115.0.0/28` block will be used for public-facing design; **no individual public IP assignments have been confirmed**.
- **Business rationale:** A digital consulting SME needs outward Internet access for staff and may need externally accessible corporate website and email services.
- **Security caveat:** Static NAT alone does not restrict inbound traffic to particular protocols/ports. Access controls, server security and service exposure must be designed separately. Do not claim that NAT alone secures the servers.
- **Implementation still pending:** Exact HQ and ISP router interface assignments and default routes, individual PAT/static NAT mappings, server private IPs, DNS/MX considerations, and end-to-end internal/external testing. The ISP simulation model has been selected in Decision 6.5.
- **Simulation caveat:** Packet Tracer Internet access is a model of external connectivity; it does not establish genuine public Internet availability.

## Decision 6.5 — ISP simulation ✅ Confirmed: ISP Router + External Test Device

- **Selected:** Option A — model an Internet Service Provider using a **separate ISP Router** connected to the HQ Router, plus an **external test PC or server** on an ISP-side test LAN.
- **Purpose:** Demonstrate that PCs at HQ and both branches can access an external destination through HQ PAT, and that an external host can reach the separately mapped corporate Web and Mail Servers via static NAT where the simulated application protocols permit.
- **Flow:** Corporate LANs/branches → HQ Router (central Internet gateway, PAT/static NAT) → ISP Router → external test device. The ISP router is a simulation component, not a fourth company office.
- **Rationale:** Clear, testable, and simpler to troubleshoot than adding a Packet Tracer Cloud device.
- **Internal architecture unchanged:** Static routes and the two Serial WAN links stay in place. The HQ–ISP path uses a separate Ethernet interface where the chosen router model supports it.
- **Public pool:** Use assignment-specified `203.115.0.0/28` for the ISP–HQ public-facing design. Specific addresses below are a **working allocation to validate in Packet Tracer**, rather than final tested settings.
- **Real-world caveat:** This lab's ISP/external network is simulated and is not actual connectivity to the live Internet.

### Working public-side address allocation (not yet configured/tested)

| Purpose | Working address | Notes |
|---|---|---|
| HQ–ISP shared public-facing subnet | `203.115.0.0/28` | 14 usable addresses: `.1`–`.14`; network `.0`, broadcast `.15` |
| ISP Router's interface toward HQ | `203.115.0.1/28` | Candidate next hop for HQ default route |
| HQ Router's outside Ethernet interface / outbound PAT address | `203.115.0.2/28` | Candidate public address for PAT overload |
| Web Server Static NAT outside/global IP | `203.115.0.3` | Tentatively map to private Web Server in VLAN 30 |
| Mail Server Static NAT outside/global IP | `203.115.0.4` | Tentatively map to private Mail Server in VLAN 30 |

- These NAT global IPs are planned from the **same directly connected public subnet**; validate NAT behaviour, relevant ARP handling, public test routes, and supported Packet Tracer router features before freezing the design.
- The external test LAN requires a **separate, non-overlapping network**, with final router/host addresses to be set during topology implementation. Do not incorrectly reuse the corporate `10.0.0.0/18` or public `203.115.0.0/28` pool for that separate LAN.
- The public website/email test must also include service-level configuration and relevant safe inbound traffic control, not just an ICMP ping.
- Server internal IPs and the exact NAT/routing CLI are **not yet decided**.

## Open design questions — not yet decided

1. **Decision 7.1 — Client address assignment:** DHCP for PCs/wireless vs manual static IPs, plus fixed addressing for infrastructure.
2. **Services:** Exact placement and internal IPs for Web/Mail/DNS/DHCP; naming and access requirements.
3. **Internet configuration:** Final external test LAN, WAN interface assignment, default/static return routes, NAT/PAT commands and service checks.
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
| 2026-10-21 | Router-on-a-Stick at HQ for VLANs 10/20/30/40 | Confirmed |
| 2026-10-22 | PAT for staff outbound traffic and separate Static NAT for Web and Mail servers | Confirmed |
| 2026-10-22 | ISP Router + external test device simulation; preliminary `203.115.0.0/28` IP allocation | ISP simulation confirmed; addresses provisional |
