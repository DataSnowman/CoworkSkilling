---
name: spreadsheet-operations-dashboard
description: "Turn a spreadsheet snapshot into a small interactive operations dashboard with searchable records, status filters, and a detail view. Use for operational review of a spreadsheet table; never imply a live connection, refresh, or system integration."
---

# Spreadsheet Operations Dashboard

## When to use

Use this skill when the user wants a spreadsheet converted into a compact, readable operations dashboard using the data already present in the file. It is best for snapshot review tasks such as sales, product, customer, location, or operational trend analysis where the goal is to make a table easier to explore, filter, search, and triage.

Do not use this skill when the user expects a live data connection, a real-time dashboard, automated refresh, database integration, or a downstream system update. This skill works only from the spreadsheet as provided.

## Source and scope

Treat the workbook as a snapshot, not a live system. The dashboard must reflect the data currently in the file and must say so clearly.

This repository's example workbook has a sales/operations table with fields such as:

- `Segment`
- `Country`
- `Product`
- `Discount Band`
- `Units Sold`
- `Manufacturing Price`
- `Sale Price`
- `Gross Sales`
- `Discounts`
- `Sales`
- `COGS`
- `Profit`
- `Date`
- `Month Name`
- `Year`

Use only the columns that actually exist in the chosen spreadsheet. Do not invent fields, formulas, or business logic that the file does not contain.

## Required dashboard behavior

Build a small but useful dashboard that allows the user to:

1. Search records by key text such as product, segment, country, or date.
2. Filter by category, status, or dimension that exists in the data.
3. Review a compact summary of totals or counts from the current filtered view.
4. Select a row to open a detail view with all relevant values for that record.
5. Highlight records needing attention using only rules supported by the data.

Keep the first version intentionally narrow and practical. A simple dashboard is better than a broad or speculative one.

## Data-handling rules

1. Use the workbook as a snapshot. Do not imply a live connection, scheduled refresh, or production system status.
2. Base all filtering, grouping, and highlights on real columns and values in the sheet.
3. Treat missing data as unknown, not zero, unless the spreadsheet explicitly shows a zero value.
4. Preserve the source data; build the dashboard on top of it without overwriting or deleting original rows.
5. Keep calculations obvious and traceable. If a metric is derived, label it clearly as calculated from the source columns.
6. Do not infer business severity, risk, or urgency beyond what the data itself supports.
7. If a column is ambiguous, ask a single clarifying question instead of making assumptions.

## Highlight rules for records needing attention

Only use rules that are directly supported by the data in the spreadsheet. These are safe, evidence-based highlights:

- `Profit < 0`: highlight as a negative-profit record.
- `Units Sold = 0` or `Sales = 0`: highlight as a zero-volume/zero-sales record.
- `Date` is blank or the row is missing a required operational key: highlight as incomplete data.

Do not use unsupported rules such as invented thresholds, arbitrary scorecards, business health ratings, or general "high-risk" labels unless the spreadsheet explicitly defines them.

## Dashboard structure

Create a compact layout with these sections:

### 1. Search and filters

Include:

- Search box for product, segment, country, or other text fields
- Filters for `Segment`, `Country`, `Product`, `Discount Band`, and `Date` or `Month Name` when present
- Option to narrow to the current month or selected date range if the data supports it

### 2. Summary cards

Show a few simple summary metrics from the filtered view, such as:

- Total sales
- Total profit
- Total units sold
- Record count

If the workbook contains a clear sales or profit measure, use those. Otherwise, show the most defensible counts or totals available.

### 3. Record table

Display a concise table with the most useful columns, such as:

- Date
- Segment
- Country
- Product
- Units Sold
- Sales
- Profit
- Discount Band

Keep the list searchable and filterable. Use row highlighting only for confirmed attention conditions.

### 4. Detail view

When a row is selected, show the full record details in a side panel or detail section, including:

- raw values for all relevant columns
- date and period context
- profit and sales context
- any data quality caveat if values are missing or zero

## Output expectations

Produce a business-ready dashboard summary in plain language. For example:

- The dashboard is built from the snapshot workbook only.
- The current view is filtered by the selected dimension(s).
- The records flagged for attention are those with negative profit or zero sales/units, based on the sheet values.
- The detail view supports review of each record without changing the source workbook.

If the spreadsheet does not contain enough structure for a filter or a summary, say so plainly and keep the dashboard minimally useful instead of inventing categories.

## Quality gate

Before finalizing, verify that:

- the workbook is treated as a snapshot only,
- the dashboard uses actual sheet columns,
- search and filters work on real data,
- the detail view is accurate,
- highlight rules are limited to supported conditions,
- no live data or real-time connector is implied,
- the original spreadsheet remains intact.

If the data is missing, incomplete, or ambiguous, explain the limitation and keep the dashboard honest rather than filling gaps with assumptions.
