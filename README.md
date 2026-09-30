# CoworkSkilling

Train-the-trainer materials for demonstrating Microsoft 365 Copilot Cowork with
fictional, reviewable business scenarios and reusable `SKILL.md` examples.

The repository is designed to help an instructor teach four habits:

1. Give Cowork a bounded task with explicit inputs, outputs, and exclusions.
2. Verify generated files against their sources instead of trusting polished
   prose.
3. Turn a successful procedure into a reusable skill with clear triggers,
   grounding rules, and action boundaries.
4. Test in fresh sessions and report limitations honestly.

Nothing in this repository installs a skill, connects a tenant, grants access,
sends email, or publishes a plugin automatically.

## Repository contents

```text
Cowork_Demo_Kit/
  directions.md                 Shareable trainer script and copyable prompts
  presenter-validation.md       Private rehearsal and answer-check key
  RFP/                          Three fictional RFP input documents
  CSR/                          Two fictional CSR input documents
  KPI/                          One fictional sales-order workbook
dashboard/
  Financial Sample.xlsx         Spreadsheet snapshot for the dashboard progression
skills/
  rentalagent-fabric-data/      Detailed Fabric/Power BI data skill
  simplerentalagent-fabric-data/Smaller Fabric data skill for teaching
  onedrive-document-dashboard2/ OneDrive dashboard workflow skill
  spreadsheet-operations-dashboard/ Snapshot spreadsheet dashboard skill
training/
  CoworkSkilling-Train-the-Trainer.pptx
```

The Office files under `Cowork_Demo_Kit` are source inputs. The requested Word
and Excel outputs are intentionally not included; create them during rehearsal
or label approved backups as prepared or prerecorded—not live.

## Recommended train-the-trainer session

**Audience:** instructors, facilitators, solution consultants, and technical
champions who will run Cowork demonstrations.

**Duration:** 90 minutes.

| Segment | Minutes | Outcome |
| --- | ---: | --- |
| Frame Cowork and safety boundaries | 10 | Explain what the demo proves and does not prove |
| Anatomy of a bounded prompt | 10 | Identify inputs, outputs, grounding, and exclusions |
| RFP demonstration | 15 | Show traceable drafting and visible evidence gaps |
| CSR demonstration | 15 | Preserve entity, period, metric, and assurance boundaries |
| KPI demonstration | 15 | Verify rule order, formulas, lineage, and reconciliation |
| From procedure to `SKILL.md` | 10 | Run the dashboard progression: same task as a prompt, then as a skill |
| Facilitation practice and teach-back | 10 | Rehearse opening, checkpoints, and failure handling |
| Close and readiness check | 5 | Confirm each trainer can run and validate a session |

Use fewer scenarios when time is constrained. Do not shorten the validation
checkpoint to make room for another generation.

## Prepare the environment

You need:

- Desktop Microsoft 365 Copilot with Cowork and customization available.
- An approved work account, network, and Office desktop or web applications.
- Permission to upload attachments and create/download Word and Excel files.
- OneDrive access when importing or directly editing a custom skill.
- A fresh Cowork task for every scenario and every behavioral skill test.

Before presenting:

1. Open `Cowork_Demo_Kit/directions.md` and rehearse the exact prompts.
2. Keep `presenter-validation.md` private and never attach it to Cowork.
3. Confirm every source file opens and remains unchanged.
4. Disable notifications and share only the relevant application window.
5. Prepare an approved backup from a successful rehearsal and label it
   `PREPARED REHEARSAL OUTPUT — NOT LIVE` or
   `PRERECORDED DEMONSTRATION — NOT LIVE`.
6. Record actual behavior and timings; do not promise a runtime or result.

Prompt restrictions are instructions, not a security boundary. Use supported
application controls, permissions, and organizational policy.

## Run the demo kit

Each pack runs in its own fresh Cowork task with only the listed attachments.
Paste the matching prompt from `Cowork_Demo_Kit/directions.md`.

| Pack | Inputs | Expected editable outputs | Teaching focus |
| --- | --- | --- | --- |
| RFP | `RFP_01_Client_Request.docx`, `RFP_02_Vendor_Capabilities.docx`, `RFP_03_Delivery_Constraints.docx` | `RFP_Response_Draft.docx`, `RFP_Traceability.xlsx` | Evidence-backed claims, gaps, dates, and traceability |
| CSR | `CSR_01_Questionnaire.docx`, `CSR_02_Evidence_Pack.docx` | `CSR_Response_Matrix.xlsx`, `CSR_Review_Brief.docx` | Entity/period scope, denominators, targets, certification, assurance |
| KPI | `KPI_01_Sales_Orders.xlsx` | `KPI_Analysis.xlsx`, `KPI_Decision_Brief.docx` | Deduplication, latest-record selection, formulas, lineage, reconciliation |

For every pack:

1. State that all data and organizations are fictional.
2. Run the main prompt.
3. Privately open and inspect the generated files.
4. Show source-to-output traceability and at least one unresolved limitation.
5. Run the follow-up audit prompt against the same inputs and outputs.
6. Compare with `presenter-validation.md` privately.
7. If a checkpoint fails, correct it or switch visibly to a labeled backup.

A chat response does not pass when the prompt requested editable files.

## Progression demo: prompt first, then skill

This is the clearest way to teach why skills exist. Run the same work twice—
once as a one-off prompt, once as an imported skill—and compare what each run
guarantees.

**Input:** `dashboard/Financial Sample.xlsx` (a snapshot workbook with
`Segment`, `Country`, `Product`, `Discount Band`, `Units Sold`, `Sale Price`,
`Gross Sales`, `Discounts`, `Sales`, `COGS`, `Profit`, `Date`, `Month Name`,
and `Year`).

### Step 1 — Run it as a plain prompt

Start a fresh Cowork task, attach only the workbook, and paste:

```text
Turn this spreadsheet into an interactive operations dashboard. Include
searchable records, status filters, and a detail view. Highlight records
needing attention using only rules supported by the data. Use the attached
data as a snapshot; do not imply a live connection. Keep the first version
small and useful.
```

Then inspect the result out loud with the class:

- Which columns did it actually filter on, and do they exist in the file?
- Are the "needs attention" rules traceable to real values, or invented
  thresholds and risk scores?
- Did anything imply refresh, live data, or a connected system?
- Would a second person running this prompt get the same boundaries?

Expect a usable dashboard and inconsistent guardrails. That gap is the lesson.

### Step 2 — Run it again with the skill

Import `skills/spreadsheet-operations-dashboard/SKILL.md`, open a new task,
attach the same workbook, and ask for the dashboard again in your own words.

Now the rules travel with the request instead of the prompt: snapshot-only
framing, real-column filters, a detail view, missing data treated as unknown,
the source workbook left intact, and attention highlighting limited to
conditions the data supports—negative `Profit`, zero `Sales` or `Units Sold`,
and incomplete rows.

### Step 3 — Debrief the difference

| Question | One-off prompt | Imported skill |
| --- | --- | --- |
| Where do the rules live? | In one person's prompt text | In `SKILL.md` |
| Repeatable by a colleague? | Only if they retype it exactly | Yes, by intent |
| Attention rules bounded? | Left to the model | Enumerated and testable |
| Snapshot framing enforced? | Restated every time | Stated once in the skill |
| Reviewable before use? | No shared artifact | A file you can diff and approve |

Make the boundary explicit: the skill did not connect to a system, refresh
data, or grant access. It made the same task repeatable and reviewable.

## Executive demo: “I’m back from vacation”

**Opening:** “I’m back from vacation. Don’t summarize the noise—find what
needs me.”

**Best for:** Executives and anyone drowning in Microsoft 365.

Run this only in a rehearsed, demo-safe account with approved email and Teams
content. Confirm that Cowork has authorized access to both sources before the
session, disable notifications, and share only the intended application
window.

### Demo prompt

```text
Review my email and Teams messages from the last seven days. Find three
unresolved items that explicitly require my decision or response. For each,
show the latest request, relevant deadline, and source. Check for later replies
so you don’t surface something already resolved. Draft a response to the most
urgent item, but do not send it.
```

The result should favor explicit requests for the current user rather than
general mentions, informational messages, or inferred obligations. Each item
must link or cite the original source, distinguish a stated deadline from an
inferred priority, and account for later replies or status changes. If fewer
than three qualifying unresolved items exist, return fewer—never fill the list
with weaker guesses.

### The reveal

Open the original request for the most urgent item, show the later email or
Teams context that establishes it is still unresolved, and then inspect the
tailored draft. Verify that the draft answers the actual latest request,
preserves unknowns, and makes no commitment beyond the available evidence.
Keep it as a draft; do not send it.

**Why it lands:** It demonstrates relevance and judgment—not just
summarization. The audience sees Cowork filter activity into a small,
source-backed decision queue and carry one item into a useful next step.

**Trade-off:** The scenario is highly relatable, but real mailbox and Teams
content create privacy and predictability risks. Use a rehearsed, demo-safe
account with seeded or approved content. Do not expose unrelated messages,
attendees, addresses, confidential material, or notifications during the
demo. If source access or the resolution-check behavior has not been tested,
use a labeled prerecorded rehearsal instead of improvising with a live
mailbox.

## Teach `SKILL.md` using the included examples

A Cowork skill is reusable instruction—not a connection, credential, scheduled
job, or guarantee of deterministic output.

### `rentalagent-fabric-data`

The detailed example targets `RentalAgent` in the
`ZavaEquipRentalAssetIntel` Fabric workspace. It prefers the named Fabric Data
Agent, permits a verified Power BI semantic-model fallback, discloses the
source used, protects data freshness and counting semantics, and allows email
only after the answer and exact recipient/content confirmation.

**Grounded demand-matching test**

Import the skill, start a fresh Cowork task, confirm that
`rentalagent-fabric-data` is active, and paste:

```text
Identify available equipment with low utilization that could satisfy upcoming
demand. Use only relationships and measures supported by the connected data.
Show the evidence, distinguish confirmed matches from candidates needing
validation, and recommend one next action. Do not change records or send
anything.
```

Use this prompt to demonstrate that the skill must first establish what the
connected source actually supports. It must not infer current availability
from historical locations, invent a low-utilization threshold, join equipment
to demand without a supported relationship, or describe old recorded status
as current without verified freshness.

A good response:

- names `RentalAgent` or the verified Power BI fallback actually used;
- states the availability, utilization, demand, date, and location definitions
  and identifies any threshold supplied by the source;
- shows record-level or aggregated evidence for each proposed match;
- labels a match **confirmed** only when the source supports every required
  relationship and condition;
- labels incomplete possibilities as **candidates needing validation** and
  says exactly what remains unverified;
- recommends one read-only next action; and
- changes no records and sends no email, even though the skill can offer email
  in other contexts.

If the connected data cannot relate availability, utilization, and upcoming
demand at a compatible grain, the correct outcome is a limitation or a
narrower validation query—not a fabricated match.

**The reveal: move from evidence to action**

Trace one recommendation from the response back to the business data. Show the
source values, supported relationships, filters, dates, and any freshness or
validation caveat that led to it. Then paste this follow-up:

```text
Turn that recommendation into a concise outreach draft. Clearly identify
anything we must verify before making a customer commitment.
```

Review the draft before taking any action. It should preserve the distinction
between a confirmed match and a candidate, carry forward unresolved
availability, location, timing, pricing, customer, and equipment-fit checks,
and avoid presenting unverified details as commitments. This follow-up creates
a draft only; it does not authorize sending email, contacting a customer, or
changing records.

**Why it lands:** The story moves from business question → evidence → decision
→ action, rather than stopping at a dashboard.

**Trade-off:** Use this reveal only after the data connection and matching logic
have been tested. If source identity, freshness, relationships, or matching
grain remain unverified, stop at the evidence review instead of drafting
outreach.

### `simplerentalagent-fabric-data`

The smaller example targets a data agent with the same name as its skill:
`simplerentalagent-fabric-data`. Use it to teach the minimum structure:
frontmatter, when-to-use rules, one authorized source, grounding, read-only
behavior, answer format, and a confirmation-gated email offer.

### `onedrive-document-dashboard2`

This example demonstrates a longer workflow skill: intent routing, live
connector discovery, scoped navigation, read-only file handling, verification,
and separated implementation/live/deployment status.

Use it when someone wants a reusable interactive browser for a folder in their
own OneDrive. It is not intended for one-time file searches, document editing,
permission changes, or static reports. The workflow requires Cowork's create
and app-generation capabilities plus an authorized App Builder OneDrive
connector that supports the required live-data operations.

**Try the workflow**

Import the skill, start a fresh Cowork task, confirm that
`onedrive-document-dashboard2` is active, and paste:

```text
Build my OneDrive document dashboard for a folder I choose. Keep the dashboard
read-only and let me browse subfolders, search filenames, filter file types,
sort the loaded items, refresh the view, and open the original documents.
```

If no folder was named, the skill should ask which OneDrive folder to use. It
must resolve that folder and the current user's authorized connection from live
tool results rather than inventing a path, reusing another person's scope, or
silently broadening access to the drive. Ambiguous folder matches should be
confirmed with their full parent paths.

A successful dashboard should:

- keep navigation bounded to the selected root folder and provide breadcrumbs;
- list folders and files separately, load subfolders lazily, and handle
  pagination without duplicates or request loops;
- label page-local search, filters, sorting, and item counts accurately rather
  than implying a complete recursive or folder-wide result;
- open original documents only from authoritative service-provided links;
- provide explicit loading, empty, no-match, retryable error, and access-denied
  states without modifying source files; and
- report implementation/typecheck, live-read verification, interaction tests,
  and deployment status separately.

**Validate the result**

Use an approved folder with known contents. Confirm that the selected root
loads from the live connector, compare returned names and metadata with
OneDrive, navigate into a real subfolder and back, exercise search/filter/sort
and refresh, follow pagination when available, and open an original document
link. A compiled or published app shell is not proof that live reads work. If a
connector, permission, folder, pagination condition, or interaction cannot be
tested, the handoff should identify it as not exercised or blocked instead of
claiming success or substituting sample personal data.

The skill creates a workflow for each user's own connection; it does not ship a
preconfigured app, grant OneDrive access, share the resulting app, change
document permissions, or authorize upload, rename, move, edit, or delete
operations.

### `spreadsheet-operations-dashboard`

This example turns a spreadsheet snapshot into a small operations dashboard
with searchable records, status filters, summary cards, and a detail view. Use
it with `dashboard/Financial Sample.xlsx` and the progression above to teach
how a working prompt becomes a bounded, reviewable skill—snapshot-only framing,
real-column filters, unknown-not-zero handling, an untouched source workbook,
and attention highlighting restricted to rules the data actually supports.

## Import or update a Cowork skill

Each skill must be stored as UTF-8 `SKILL.md`. Its folder must match the
lowercase kebab-case frontmatter `name`.

**Preferred update path**

1. In Microsoft 365 Copilot, open **Customize > Skills**.
2. Open the existing skill and choose **Open in OneDrive**.
3. Replace its `SKILL.md` while preserving the folder/name match.
4. Wait for OneDrive synchronization.
5. Start a new Cowork session and verify the active skill in the Skills panel.

**New import path**

1. Choose **Customize > Skills > Add > Upload skill**.
2. Select the individual `SKILL.md`, or a `.zip`/`.skill` archive with
   `SKILL.md` at the archive root.
3. Remove or disable duplicate imports before testing.

Uploading a skill does not create a Fabric agent, Power BI connection, OneDrive
connection, permission grant, or email capability. Those must already be
available and authorized in the current Microsoft 365 environment.

## Behavioral skill testing

Use a fresh session per test and record the active skill plus evidence.

| Test | Expected behavior |
| --- | --- |
| Positive trigger | The intended skill activates and follows its source and output rules |
| Negative trigger | An unrelated request does not activate or distort into the skill workflow |
| Missing source/access | The skill reports the limitation instead of fabricating data |
| Ambiguous scope | The skill asks a focused question rather than guessing |
| Grounding trap | Missing, stale, or differently grained data stays qualified |
| Action confirmation | No email or other action occurs before exact confirmation |

When two skills cover the same domain, keep one active during testing or narrow
their descriptions so Cowork can select reliably.

## Trainer completion checklist

- [ ] I can explain task prompts, skills, connectors, actions, and permissions.
- [ ] I rehearsed each scenario I intend to show in a fresh task.
- [ ] I can verify files, citations, formulas, and limitations before sharing.
- [ ] I keep the presenter validation key off-screen and out of Cowork.
- [ ] I can explain why a polished answer is not proof of correctness.
- [ ] I can import/update a skill and run positive, negative, and failure tests.
- [ ] I can distinguish source-data access from the `SKILL.md` instructions.
- [ ] I have a labeled backup and an honest failure-handling plan.

## Public references

- [Use Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/use-cowork)
- [Customize Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-customize)
- [Build your first Cowork skill](https://microsoft.github.io/copilot-camp/pages/copilot-cowork/01-cowork-skills/)
- [Build plugins for Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugin-development)
