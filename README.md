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
skills/
  rentalagent-fabric-data/      Detailed Fabric/Power BI data skill
  simplerentalagent-fabric-data/Smaller Fabric data skill for teaching
  onedrive-document-dashboard2/ OneDrive dashboard workflow skill
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
| From procedure to `SKILL.md` | 10 | Explain triggers, source rules, actions, and quality gates |
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

## Teach `SKILL.md` using the included examples

A Cowork skill is reusable instruction—not a connection, credential, scheduled
job, or guarantee of deterministic output.

### `rentalagent-fabric-data`

The detailed example targets `RentalAgent` in the
`ZavaEquipRentalAssetIntel` Fabric workspace. It prefers the named Fabric Data
Agent, permits a verified Power BI semantic-model fallback, discloses the
source used, protects data freshness and counting semantics, and allows email
only after the answer and exact recipient/content confirmation.

### `simplerentalagent-fabric-data`

The smaller example targets a data agent with the same name as its skill:
`simplerentalagent-fabric-data`. Use it to teach the minimum structure:
frontmatter, when-to-use rules, one authorized source, grounding, read-only
behavior, answer format, and a confirmation-gated email offer.

### `onedrive-document-dashboard2`

This example demonstrates a longer workflow skill: intent routing, live
connector discovery, scoped navigation, read-only file handling, verification,
and separated implementation/live/deployment status.

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
