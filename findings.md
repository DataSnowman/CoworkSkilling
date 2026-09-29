# CoworkSkilling findings

**Date:** September 28, 2026

## Purpose

Today's work extended the repository from a set of Cowork training materials
and Fabric data skills into a clearer train-the-trainer story. The central
pattern is:

> Start with a business question, ground the result in source evidence, make a
> bounded decision, and prepare a safe next action.

The materials consistently distinguish reusable Cowork instructions from the
connections, permissions, and actions that must already exist in Microsoft
365.

## Spreadsheet dashboard skill

Created:

- `skills/spreadsheet-operations-dashboard/SKILL.md`

The skill turns a spreadsheet snapshot into a small operations dashboard with:

- searchable records;
- filters based only on columns present in the workbook;
- summary cards for defensible totals and counts;
- a record table and detail view; and
- attention highlighting limited to data-supported conditions.

The example source is `dashboard/Financial Sample.xlsx`. Its table includes
fields such as segment, country, product, discount band, units sold, sales,
profit, date, month, and year.

The skill explicitly treats the workbook as a snapshot. It does not imply a
live connection, automatic refresh, production-system status, or downstream
write capability. The source rows must remain unchanged, missing data remains
unknown, and derived metrics must be labeled.

The initial supported attention rules are deliberately narrow:

- negative `Profit`;
- zero `Sales` or `Units Sold`; and
- missing dates or required operational keys.

No arbitrary risk score, business-health classification, or unsupported
threshold should be introduced.

## Prompt-to-skill progression

The README now demonstrates the dashboard task in two stages.

### Stage 1: one-off prompt

```text
Turn this spreadsheet into an interactive operations dashboard. Include
searchable records, status filters, and a detail view. Highlight records
needing attention using only rules supported by the data. Use the attached
data as a snapshot; do not imply a live connection. Keep the first version
small and useful.
```

The trainer reviews whether the generated dashboard used real columns,
invented any thresholds, implied a live connection, or depended on prompt
wording that another person might not reproduce.

### Stage 2: imported skill

The same workbook is used with
`skills/spreadsheet-operations-dashboard/SKILL.md` active. The lesson is that
the reusable rules now travel with the intent rather than relying on every
user to reproduce the full prompt.

The comparison focuses on repeatability, reviewability, bounded attention
rules, snapshot framing, and source preservation. The skill still does not
create a connection, grant access, or refresh data.

## RentalAgent evidence-to-action demo

The README now includes this grounded test for
`skills/rentalagent-fabric-data/SKILL.md`:

```text
Identify available equipment with low utilization that could satisfy upcoming
demand. Use only relationships and measures supported by the connected data.
Show the evidence, distinguish confirmed matches from candidates needing
validation, and recommend one next action. Do not change records or send
anything.
```

The expected behavior is to:

- disclose whether `RentalAgent` or a verified Power BI semantic-model
  fallback was used;
- state the supported definitions for availability, utilization, demand,
  dates, location, and any source-defined threshold;
- show evidence for each proposed match;
- reserve **confirmed match** for cases where every required relationship and
  condition is supported;
- label incomplete possibilities as **candidates needing validation** and
  identify the missing verification;
- recommend one read-only next action; and
- neither change records nor send email.

The skill must not infer current availability from historical locations,
invent a low-utilization threshold, join demand to equipment without a
supported relationship, or treat old recorded status as current without
verified freshness.

### Follow-up reveal

After tracing one recommendation back to its business data, the trainer uses:

```text
Turn that recommendation into a concise outreach draft. Clearly identify
anything we must verify before making a customer commitment.
```

The outreach remains a draft. It must preserve unresolved checks involving
availability, location, timing, pricing, customer context, and equipment fit.
It does not authorize sending a message or changing records.

The teaching story is:

> business question → evidence → decision → action

This reveal should be used only after the data connection and matching logic
have been tested. If source identity, freshness, relationships, or grain are
unverified, the demonstration should stop at evidence review.

## Executive Microsoft 365 demo

The README also includes:

> “I’m back from vacation. Don’t summarize the noise—find what needs me.”

The demo prompt is:

```text
Review my email and Teams messages from the last seven days. Find three
unresolved items that explicitly require my decision or response. For each,
show the latest request, relevant deadline, and source. Check for later replies
so you don’t surface something already resolved. Draft a response to the most
urgent item, but do not send it.
```

This scenario demonstrates relevance and judgment rather than broad
summarization. A valid result should favor explicit requests directed to the
current user, cite the original source, separate stated deadlines from inferred
priority, check later context for resolution, and return fewer than three
items rather than fill the list with guesses.

The reveal opens the original request, shows the later context proving that it
remains unresolved, and inspects the tailored draft. The draft must answer the
latest request without creating unsupported commitments, and it must not be
sent.

Because mailbox and Teams content can be sensitive and unpredictable, this
demo requires a rehearsed, demo-safe account with seeded or approved content.
Notifications should be disabled, only the intended application window should
be shared, and a labeled prerecorded rehearsal should be used when live source
access or resolution checking has not been tested.

## Common design findings

Across the dashboard, Fabric, and Microsoft 365 scenarios, the strongest demo
pattern is:

1. Start with a bounded business question.
2. Name and inspect the actual source.
3. Show evidence and preserve relevant dates, filters, definitions, and grain.
4. Separate confirmed findings from candidates or unknowns.
5. Recommend one proportionate next action.
6. Keep drafts separate from sending, sharing, or record changes.
7. State what the demo proves and what remains unverified.

Recurring failure modes to guard against include:

- polished output without source traceability;
- inferred relationships presented as known facts;
- stale status presented as current;
- missing values converted to zero;
- arbitrary thresholds or urgency labels;
- filling requested result counts with weak matches;
- implying that a skill creates a connector or grants permission; and
- presenting a draft as though it was sent.

## Files affected

- `README.md`
  - Added the spreadsheet prompt-to-skill progression.
  - Added the grounded RentalAgent demand-matching demo.
  - Added the evidence-to-outreach follow-up.
  - Added the executive email-and-Teams demo.
  - Added the dashboard workbook and skill to the repository map.
- `skills/spreadsheet-operations-dashboard/SKILL.md`
  - Added the snapshot dashboard workflow, evidence rules, layout, and quality
    gate.
- `dashboard/Financial Sample.xlsx`
  - Used as the snapshot input for the dashboard progression.

## Remaining validation

- Import `spreadsheet-operations-dashboard` into Cowork and test it in a fresh
  session with `dashboard/Financial Sample.xlsx`.
- Compare the one-off dashboard prompt with the skill-enabled run and record
  any differences in source use, filters, highlights, and snapshot disclosure.
- Test the RentalAgent matching prompt against the authorized source and verify
  that every confirmed match can be traced through supported relationships.
- Rehearse the outreach follow-up without sending anything.
- Run the executive Microsoft 365 scenario only in a demo-safe account and
  verify that later replies correctly suppress resolved items.

