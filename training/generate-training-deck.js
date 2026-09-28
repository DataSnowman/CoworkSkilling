const pptxgen = require(process.env.PPTXGENJS_PATH || "pptxgenjs");

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "DataSnowman / GitHub Copilot";
pptx.subject = "Microsoft 365 Copilot Cowork train-the-trainer";
pptx.title = "CoworkSkilling - Train the Trainer";
pptx.company = "DataSnowman";
pptx.lang = "en-US";
pptx.theme = {
  headFontFace: "Aptos Display",
  bodyFontFace: "Aptos",
  lang: "en-US",
};
pptx.defineLayout({ name: "CUSTOM_WIDE", width: 13.333, height: 7.5 });
pptx.layout = "CUSTOM_WIDE";

const C = {
  ink: "231F20",
  plum: "3E1F47",
  berry: "7D3658",
  coral: "E66B55",
  amber: "E7A74E",
  cream: "F8F2E7",
  paper: "FFFDF8",
  sage: "A9C4AD",
  teal: "397C78",
  blue: "4D6E8A",
  white: "FFFFFF",
  muted: "6F6868",
  line: "D8CEC2",
  paleCoral: "F9DED5",
  paleSage: "E5EFE5",
  paleBlue: "E2EBF1",
  paleAmber: "F8EBCF",
};

const SH = pptx.ShapeType;
const shadow = () => ({
  type: "outer",
  color: "000000",
  opacity: 0.12,
  blur: 3,
  angle: 45,
  distance: 1.5,
});

function addFooter(slide, n, dark = false) {
  slide.addText("COWORKSKILLING  |  TRAIN THE TRAINER", {
    x: 0.55, y: 7.16, w: 5.7, h: 0.16,
    fontFace: "Aptos", fontSize: 8.5, bold: true,
    charSpacing: 1.2, color: dark ? "DCCFDB" : C.muted,
    margin: 0,
  });
  slide.addText(String(n).padStart(2, "0"), {
    x: 12.25, y: 7.10, w: 0.5, h: 0.24,
    fontFace: "Aptos", fontSize: 10, bold: true,
    color: dark ? C.white : C.plum, align: "right", margin: 0,
  });
}

function addTitle(slide, title, kicker, opts = {}) {
  if (kicker) {
    slide.addText(kicker.toUpperCase(), {
      x: 0.62, y: 0.35, w: 4.7, h: 0.24,
      fontSize: 10, bold: true, charSpacing: 1.8,
      color: opts.dark ? "E8B9AB" : C.coral, margin: 0,
    });
  }
  slide.addText(title, {
    x: 0.62, y: 0.66, w: opts.w || 11.7, h: opts.h || 0.62,
    fontFace: "Aptos Display", fontSize: opts.size || 29,
    bold: true, color: opts.dark ? C.white : C.plum, margin: 0,
    breakLine: false, fit: "shrink",
  });
}

function addEvidenceThread(slide, y = 1.55, h = 5.15, color = C.coral) {
  slide.addShape(SH.line, {
    x: 0.34, y, w: 0, h,
    line: { color, width: 4, beginArrowType: "none", endArrowType: "none" },
  });
  [0, 1, 2].forEach((i) => {
    slide.addShape(SH.ellipse, {
      x: 0.22, y: y + (h * i / 2) - 0.12, w: 0.24, h: 0.24,
      fill: { color: i === 2 ? C.amber : color },
      line: { color: C.paper, width: 1.5 },
    });
  });
}

function addCard(slide, x, y, w, h, title, body, accent = C.coral, fill = C.white) {
  slide.addShape(SH.roundRect, {
    x, y, w, h, rectRadius: 0.08,
    fill: { color: fill },
    line: { color: C.line, width: 0.7 },
    shadow: shadow(),
  });
  slide.addShape(SH.ellipse, {
    x: x + 0.28, y: y + 0.28, w: 0.42, h: 0.42,
    fill: { color: accent }, line: { color: accent },
  });
  slide.addText(title, {
    x: x + 0.85, y: y + 0.24, w: w - 1.1, h: 0.36,
    fontSize: 17, bold: true, color: C.plum, margin: 0, fit: "shrink",
  });
  slide.addText(body, {
    x: x + 0.3, y: y + 0.86, w: w - 0.6, h: h - 1.08,
    fontSize: 12.5, color: C.ink, margin: 0.02,
    breakLine: false, valign: "top", fit: "shrink",
  });
}

function addPill(slide, text, x, y, w, color, textColor = C.white) {
  slide.addShape(SH.roundRect, {
    x, y, w, h: 0.38, rectRadius: 0.16,
    fill: { color }, line: { color },
  });
  slide.addText(text, {
    x, y: y + 0.02, w, h: 0.28, align: "center", valign: "mid",
    fontSize: 10.5, bold: true, color: textColor, margin: 0,
  });
}

function addStep(slide, n, label, x, y, w, accent) {
  slide.addShape(SH.ellipse, {
    x, y, w: 0.54, h: 0.54,
    fill: { color: accent }, line: { color: accent },
  });
  slide.addText(String(n), {
    x, y: y + 0.06, w: 0.54, h: 0.3,
    align: "center", fontSize: 14, bold: true, color: C.white, margin: 0,
  });
  slide.addText(label, {
    x: x + 0.66, y: y + 0.03, w: w - 0.66, h: 0.46,
    fontSize: 15, bold: true, color: C.plum, margin: 0, fit: "shrink",
  });
}

function addArrow(slide, x, y, w, color = C.line) {
  slide.addShape(SH.chevron, {
    x, y, w, h: 0.34,
    fill: { color }, line: { color },
  });
}

// 1 - title
{
  const slide = pptx.addSlide();
  slide.background = { color: C.plum };
  slide.addShape(SH.arc, {
    x: 8.8, y: -1.25, w: 5.8, h: 5.8, adjustPoint: 0.25,
    rotate: 14, fill: { color: C.coral, transparency: 12 },
    line: { color: C.coral, transparency: 100 },
  });
  slide.addShape(SH.arc, {
    x: 9.6, y: 3.65, w: 4.7, h: 4.7, rotate: 205,
    fill: { color: C.amber, transparency: 10 },
    line: { color: C.amber, transparency: 100 },
  });
  slide.addText("COWORKSKILLING", {
    x: 0.72, y: 0.68, w: 4.3, h: 0.28,
    fontSize: 12, bold: true, charSpacing: 2.5, color: "E8B9AB", margin: 0,
  });
  slide.addText("Train the trainer", {
    x: 0.72, y: 1.38, w: 7.8, h: 1.0,
    fontFace: "Aptos Display", fontSize: 46, bold: true,
    color: C.white, margin: 0,
  });
  slide.addText("Teach bounded tasks. Verify the evidence. Reuse what works.", {
    x: 0.75, y: 2.62, w: 8.35, h: 0.55,
    fontSize: 19.5, color: "F4E8E1", margin: 0,
  });
  addPill(slide, "RFP", 0.75, 4.25, 1.15, C.coral);
  addPill(slide, "CSR", 2.05, 4.25, 1.15, C.teal);
  addPill(slide, "KPI", 3.35, 4.25, 1.15, C.amber, C.ink);
  addPill(slide, "SKILL.MD", 4.65, 4.25, 1.65, C.berry);
  slide.addText("90-minute facilitator session", {
    x: 0.75, y: 5.1, w: 4.3, h: 0.3,
    fontSize: 14, bold: true, color: "DCCFDB", margin: 0,
  });
  addFooter(slide, 1, true);
}

// 2 - outcomes
{
  const slide = pptx.addSlide();
  slide.background = { color: C.cream };
  addEvidenceThread(slide);
  addTitle(slide, "What a ready trainer can do", "Session outcomes");
  addCard(slide, 0.7, 1.55, 2.9, 2.05, "Frame", "Set the fictional scope, business value, and boundaries before the first prompt.", C.coral);
  addCard(slide, 3.85, 1.55, 2.9, 2.05, "Bound", "Name exact inputs, editable outputs, exclusions, and failure behavior.", C.amber);
  addCard(slide, 7.0, 1.55, 2.9, 2.05, "Verify", "Open files, trace claims and formulas, and surface unresolved gaps.", C.teal);
  addCard(slide, 10.15, 1.55, 2.5, 2.05, "Reuse", "Translate a proven procedure into a tested, narrowly triggered skill.", C.berry);
  slide.addShape(SH.roundRect, {
    x: 1.2, y: 4.25, w: 10.9, h: 1.55,
    fill: { color: C.plum }, line: { color: C.plum }, rectRadius: 0.08,
  });
  slide.addText("The standard is not \"Cowork produced something.\"", {
    x: 1.65, y: 4.55, w: 4.75, h: 0.58,
    fontSize: 18.5, bold: true, color: C.white, margin: 0, fit: "shrink",
  });
  slide.addText("The standard is \"a reviewer can inspect the sources, challenge the assumptions, and see what remains unknown.\"", {
    x: 6.75, y: 4.42, w: 4.7, h: 0.76,
    fontSize: 15.5, color: "F4E8E1", margin: 0, fit: "shrink",
  });
  addFooter(slide, 2);
}

// 3 - facilitation loop
{
  const slide = pptx.addSlide();
  slide.background = { color: C.paper };
  addEvidenceThread(slide, 1.5, 5.15, C.teal);
  addTitle(slide, "Use one repeatable facilitation rhythm", "Six moves");
  const labels = [
    ["Frame", C.coral], ["Bound", C.amber], ["Run", C.berry],
    ["Inspect", C.teal], ["Trace", C.blue], ["Challenge", C.plum],
  ];
  labels.forEach(([label, color], i) => {
    const x = 0.78 + i * 2.05;
    slide.addShape(SH.ellipse, {
      x, y: 2.15, w: 1.35, h: 1.35,
      fill: { color }, line: { color },
      shadow: shadow(),
    });
    slide.addText(String(i + 1), {
      x, y: 2.36, w: 1.35, h: 0.35,
      fontSize: 18, bold: true, align: "center", color: C.white, margin: 0,
    });
    slide.addText(label, {
      x: x - 0.22, y: 3.68, w: 1.79, h: 0.32,
      fontSize: 16, bold: true, align: "center", color: C.plum, margin: 0,
    });
    if (i < labels.length - 1) addArrow(slide, x + 1.48, 2.64, 0.42, C.line);
  });
  slide.addText("Fresh task", { x: 0.95, y: 4.52, w: 1.6, h: 0.3, fontSize: 12, bold: true, color: C.coral, align: "center", margin: 0 });
  slide.addText("Exact attachments", { x: 2.95, y: 4.52, w: 1.8, h: 0.3, fontSize: 12, bold: true, color: C.amber, align: "center", margin: 0 });
  slide.addText("Full prompt", { x: 5.08, y: 4.52, w: 1.5, h: 0.3, fontSize: 12, bold: true, color: C.berry, align: "center", margin: 0 });
  slide.addText("Private review", { x: 7.05, y: 4.52, w: 1.7, h: 0.3, fontSize: 12, bold: true, color: C.teal, align: "center", margin: 0 });
  slide.addText("Source beside output", { x: 9.0, y: 4.52, w: 1.95, h: 0.3, fontSize: 12, bold: true, color: C.blue, align: "center", margin: 0 });
  slide.addText("Audit follow-up", { x: 11.2, y: 4.52, w: 1.5, h: 0.3, fontSize: 12, bold: true, color: C.plum, align: "center", margin: 0 });
  slide.addShape(SH.roundRect, {
    x: 2.15, y: 5.35, w: 9.05, h: 0.88,
    fill: { color: C.paleSage }, line: { color: C.sage }, rectRadius: 0.05,
  });
  slide.addText("Trainer cue: show a correction, retained gap, or honestly reported limitation - not only the happy path.", {
    x: 2.38, y: 5.61, w: 8.6, h: 0.32,
    fontSize: 13.5, bold: true, color: C.plum, align: "center", margin: 0,
  });
  addFooter(slide, 3);
}

// 4 - bounded prompt anatomy
{
  const slide = pptx.addSlide();
  slide.background = { color: C.cream };
  addEvidenceThread(slide, 1.5, 5.2, C.amber);
  addTitle(slide, "A bounded prompt has six visible contracts", "Prompt anatomy");
  const items = [
    ["INPUTS", "Exact files and source scope", C.coral],
    ["OUTPUTS", "Named editable deliverables", C.amber],
    ["GROUNDING", "What counts as evidence", C.teal],
    ["EXCLUSIONS", "Searches, actions, or claims forbidden", C.berry],
    ["VERIFICATION", "Checks before \"done\"", C.blue],
    ["FAILURE", "How to disclose missing capability", C.plum],
  ];
  items.forEach(([head, body, color], i) => {
    const row = Math.floor(i / 3);
    const col = i % 3;
    const x = 0.9 + col * 4.12;
    const y = 1.55 + row * 2.25;
    slide.addShape(SH.roundRect, {
      x, y, w: 3.72, h: 1.72,
      fill: { color: C.white }, line: { color, width: 1.2 },
      rectRadius: 0.08, shadow: shadow(),
    });
    slide.addText(head, {
      x: x + 0.28, y: y + 0.24, w: 1.55, h: 0.28,
      fontSize: 11, bold: true, charSpacing: 1.5, color, margin: 0,
    });
    slide.addText(body, {
      x: x + 0.28, y: y + 0.72, w: 3.15, h: 0.55,
      fontSize: 16, bold: true, color: C.plum, margin: 0, fit: "shrink",
    });
  });
  addFooter(slide, 4);
}

// 5 - agenda
{
  const slide = pptx.addSlide();
  slide.background = { color: C.plum };
  addTitle(slide, "A 90-minute session that protects the checkpoints", "Run of show", { dark: true });
  const segs = [
    ["10", "Frame"], ["10", "Prompt"], ["15", "RFP"], ["15", "CSR"],
    ["15", "KPI"], ["10", "Skills"], ["10", "Teach-back"], ["5", "Close"],
  ];
  const colors = [C.coral, C.amber, C.berry, C.teal, C.blue, C.coral, C.amber, C.sage];
  segs.forEach(([mins, label], i) => {
    const x = 0.7 + i * 1.55;
    slide.addShape(SH.roundRect, {
      x, y: 2.05, w: 1.28, h: 2.35,
      fill: { color: colors[i] }, line: { color: colors[i] }, rectRadius: 0.08,
      shadow: shadow(),
    });
    slide.addText(mins, {
      x, y: 2.42, w: 1.28, h: 0.58,
      fontSize: 30, bold: true, color: i === 7 ? C.ink : C.white,
      align: "center", margin: 0,
    });
    slide.addText("MIN", {
      x, y: 3.04, w: 1.28, h: 0.24,
      fontSize: 9, bold: true, charSpacing: 1.3,
      color: i === 7 ? C.ink : C.white, align: "center", margin: 0,
    });
    slide.addText(label, {
      x: x - 0.04, y: 4.68, w: 1.36, h: 0.36,
      fontSize: 13, bold: true, color: C.white, align: "center", margin: 0,
    });
  });
  slide.addShape(SH.roundRect, {
    x: 1.25, y: 5.55, w: 10.85, h: 0.76,
    fill: { color: "56305D" }, line: { color: "704276" }, rectRadius: 0.05,
  });
  slide.addText("If time is tight: demonstrate one pack deeply. Never skip private inspection to squeeze in another generation.", {
    x: 1.65, y: 5.73, w: 10.05, h: 0.38,
    fontSize: 13.2, bold: true, color: C.white, align: "center", margin: 0,
  });
  addFooter(slide, 5, true);
}

// 6 - RFP
{
  const slide = pptx.addSlide();
  slide.background = { color: C.paper };
  addEvidenceThread(slide, 1.5, 5.2, C.coral);
  addTitle(slide, "RFP: make the gaps as visible as the strengths", "Scenario 1");
  addPill(slide, "3 INPUT DOCS", 0.78, 1.55, 1.65, C.coral);
  addPill(slide, "2 EDITABLE OUTPUTS", 2.58, 1.55, 2.0, C.berry);
  addPill(slide, "12 REQUIREMENTS", 4.73, 1.55, 1.75, C.amber, C.ink);
  const cols = [
    ["SUPPORTED", "Evidence backs the proposed response", C.teal, C.paleSage],
    ["PARTIAL", "Some requested conditions remain unresolved", C.amber, C.paleAmber],
    ["NOT EVIDENCED", "Missing proof stays unconfirmed - not disproved", C.coral, C.paleCoral],
  ];
  cols.forEach(([head, body, color, fill], i) => {
    const x = 0.9 + i * 4.07;
    slide.addShape(SH.roundRect, {
      x, y: 2.35, w: 3.68, h: 2.25,
      fill: { color: fill }, line: { color, width: 1 }, rectRadius: 0.08,
    });
    slide.addText(head, {
      x: x + 0.3, y: 2.72, w: 3.08, h: 0.32,
      fontSize: 14, bold: true, color, align: "center", margin: 0,
    });
    slide.addText(body, {
      x: x + 0.38, y: 3.3, w: 2.92, h: 0.8,
      fontSize: 15, bold: true, color: C.plum, align: "center", margin: 0,
    });
  });
  slide.addShape(SH.roundRect, {
    x: 1.05, y: 5.18, w: 11.15, h: 0.95,
    fill: { color: C.plum }, line: { color: C.plum }, rectRadius: 0.05,
  });
  slide.addText("SHOW THIS", {
    x: 1.4, y: 5.42, w: 1.15, h: 0.25,
    fontSize: 10, bold: true, charSpacing: 1.4, color: C.amber, margin: 0,
  });
  slide.addText("A mandatory gap beside its source - not just the polished executive summary.", {
    x: 2.72, y: 5.35, w: 8.85, h: 0.38,
    fontSize: 17, bold: true, color: C.white, margin: 0,
  });
  addFooter(slide, 6);
}

// 7 - CSR
{
  const slide = pptx.addSlide();
  slide.background = { color: C.cream };
  addEvidenceThread(slide, 1.5, 5.2, C.teal);
  addTitle(slide, "CSR: preserve the claim ladder", "Scenario 2");
  const ladder = [
    ["POLICY", "A document exists", C.paleBlue, C.blue],
    ["PROCESS", "A method is described", C.paleSage, C.teal],
    ["IMPLEMENTATION", "Activity actually occurred", C.paleAmber, C.amber],
    ["MEASUREMENT", "A supported numerator + denominator", C.paleCoral, C.coral],
    ["ASSURANCE", "Independent evidence - not internal approval", "E9DFEA", C.berry],
  ];
  ladder.forEach(([head, body, fill, color], i) => {
    const x = 0.95 + i * 2.42;
    const y = 4.95 - i * 0.62;
    slide.addShape(SH.roundRect, {
      x, y, w: 2.12, h: 1.08,
      fill: { color: fill }, line: { color, width: 1 }, rectRadius: 0.06,
      shadow: shadow(),
    });
    slide.addText(head, {
      x: x + 0.16, y: y + 0.17, w: 1.8, h: 0.23,
      fontSize: 10.5, bold: true, color, align: "center", margin: 0,
    });
    slide.addText(body, {
      x: x + 0.14, y: y + 0.5, w: 1.84, h: 0.4,
      fontSize: 11.5, bold: true, color: C.plum, align: "center", margin: 0, fit: "shrink",
    });
  });
  slide.addText("Entity", { x: 0.98, y: 1.52, w: 1.05, h: 0.28, fontSize: 13, bold: true, color: C.coral, margin: 0 });
  slide.addText("Period", { x: 2.16, y: 1.52, w: 1.05, h: 0.28, fontSize: 13, bold: true, color: C.amber, margin: 0 });
  slide.addText("Version", { x: 3.34, y: 1.52, w: 1.05, h: 0.28, fontSize: 13, bold: true, color: C.teal, margin: 0 });
  slide.addText("Denominator", { x: 4.52, y: 1.52, w: 1.35, h: 0.28, fontSize: 13, bold: true, color: C.blue, margin: 0 });
  slide.addText("Target != result", { x: 5.99, y: 1.52, w: 1.62, h: 0.28, fontSize: 12, bold: true, color: C.berry, margin: 0 });
  slide.addShape(SH.roundRect, {
    x: 8.45, y: 1.35, w: 3.75, h: 1.1,
    fill: { color: C.plum }, line: { color: C.plum }, rectRadius: 0.06,
  });
  slide.addText("Trainer checkpoint", {
    x: 8.75, y: 1.55, w: 3.15, h: 0.24,
    fontSize: 10.5, bold: true, color: C.amber, align: "center", margin: 0,
  });
  slide.addText("Show one metric the evidence cannot calculate.", {
    x: 8.78, y: 1.88, w: 3.09, h: 0.4,
    fontSize: 12.5, bold: true, color: C.white, align: "center", margin: 0, fit: "shrink",
  });
  addFooter(slide, 7);
}

// 8 - KPI
{
  const slide = pptx.addSlide();
  slide.background = { color: C.paper };
  addEvidenceThread(slide, 1.5, 5.2, C.amber);
  addTitle(slide, "KPI: rule order is the analysis", "Scenario 3");
  const stages = [
    ["120", "RAW ROWS", C.coral],
    ["116", "EXACT COPIES REMOVED", C.amber],
    ["112", "LATEST ORDER VERSIONS", C.berry],
    ["76", "ELIGIBLE ORDERS", C.teal],
    ["$57K", "BOOKED KPI", C.blue],
  ];
  stages.forEach(([value, label, color], i) => {
    const x = 0.75 + i * 2.48;
    slide.addShape(SH.roundRect, {
      x, y: 2.15, w: 2.02, h: 1.85,
      fill: { color }, line: { color }, rectRadius: 0.07,
      shadow: shadow(),
    });
    slide.addText(value, {
      x, y: 2.48, w: 2.02, h: 0.62,
      fontSize: 31, bold: true, color: C.white, align: "center", margin: 0,
    });
    slide.addText(label, {
      x: x + 0.18, y: 3.27, w: 1.66, h: 0.4,
      fontSize: 8.5, bold: true, charSpacing: 0.4,
      color: C.white, align: "center", margin: 0, fit: "shrink",
    });
    if (i < stages.length - 1) addArrow(slide, x + 2.06, 2.92, 0.32, C.line);
  });
  slide.addShape(SH.roundRect, {
    x: 0.95, y: 4.75, w: 5.15, h: 1.15,
    fill: { color: C.paleCoral }, line: { color: C.coral }, rectRadius: 0.05,
  });
  slide.addText("THE TRAP", {
    x: 1.25, y: 5.02, w: 1.05, h: 0.25,
    fontSize: 10.5, bold: true, charSpacing: 1.4, color: C.coral, margin: 0,
  });
  slide.addText("Filtering August Completed rows before version selection produces the wrong KPI.", {
    x: 2.3, y: 4.94, w: 3.42, h: 0.46,
    fontSize: 14, bold: true, color: C.plum, margin: 0, fit: "shrink",
  });
  slide.addShape(SH.roundRect, {
    x: 6.45, y: 4.75, w: 5.75, h: 1.15,
    fill: { color: C.paleSage }, line: { color: C.teal }, rectRadius: 0.05,
  });
  slide.addText("SHOW THIS", {
    x: 6.75, y: 5.02, w: 1.05, h: 0.25,
    fontSize: 10.5, bold: true, charSpacing: 1.4, color: C.teal, margin: 0,
  });
  slide.addText("A formula, its source rows, and a zero-difference reconciliation - not merely a chart.", {
    x: 7.82, y: 4.94, w: 3.98, h: 0.46,
    fontSize: 14, bold: true, color: C.plum, margin: 0, fit: "shrink",
  });
  addFooter(slide, 8);
}

// 9 - verification
{
  const slide = pptx.addSlide();
  slide.background = { color: C.cream };
  addEvidenceThread(slide, 1.5, 5.2, C.coral);
  addTitle(slide, "Inspect before you share", "The trust boundary");
  slide.addShape(SH.roundRect, {
    x: 0.85, y: 1.62, w: 5.55, h: 4.65,
    fill: { color: "F5E5E1" }, line: { color: C.coral, width: 1 }, rectRadius: 0.08,
  });
  slide.addText("Looks finished", {
    x: 1.2, y: 1.98, w: 4.85, h: 0.45,
    fontSize: 25, bold: true, color: C.coral, align: "center", margin: 0,
  });
  const left = [
    "Polished executive summary",
    "Plausible evidence label",
    "Formatted workbook",
    "Zero shown in a check cell",
  ];
  left.forEach((t, i) => addStep(slide, i + 1, t, 1.25, 2.75 + i * 0.72, 4.7, C.coral));
  slide.addShape(SH.roundRect, {
    x: 6.92, y: 1.62, w: 5.55, h: 4.65,
    fill: { color: C.paleSage }, line: { color: C.teal, width: 1 }, rectRadius: 0.08,
  });
  slide.addText("Passes review", {
    x: 7.27, y: 1.98, w: 4.85, h: 0.45,
    fontSize: 25, bold: true, color: C.teal, align: "center", margin: 0,
  });
  const right = [
    "Claims trace to actual source sections",
    "Gaps remain qualified and visible",
    "Formulas and lineage are inspectable",
    "Checks recalculate from retained data",
  ];
  right.forEach((t, i) => addStep(slide, i + 1, t, 7.32, 2.75 + i * 0.72, 4.7, C.teal));
  addFooter(slide, 9);
}

// 10 - skill anatomy
{
  const slide = pptx.addSlide();
  slide.background = { color: C.paper };
  addEvidenceThread(slide, 1.5, 5.2, C.berry);
  addTitle(slide, "A skill is reusable instruction - not the connection", "From procedure to SKILL.md");
  const layers = [
    ["USER REQUEST", "Intent + scope", C.coral],
    ["SKILL.MD", "Triggers + workflow + guardrails", C.berry],
    ["CAPABILITY", "Fabric agent / Power BI / email tool", C.teal],
    ["PERMISSIONS", "Tenant policy + user authorization", C.blue],
    ["EVIDENCE", "Returned data + disclosed limitations", C.amber],
  ];
  layers.forEach(([head, body, color], i) => {
    const y = 1.55 + i * 0.94;
    slide.addShape(SH.roundRect, {
      x: 1.05, y, w: 7.15 - i * 0.56, h: 0.68,
      fill: { color }, line: { color }, rectRadius: 0.06,
      shadow: i === 0 ? shadow() : undefined,
    });
    slide.addText(head, {
      x: 1.35, y: y + 0.17, w: 1.55, h: 0.25,
      fontSize: 11, bold: true, charSpacing: 1.1,
      color: i === 4 ? C.ink : C.white, margin: 0,
    });
    slide.addText(body, {
      x: 3.0, y: y + 0.15, w: 4.65 - i * 0.5, h: 0.3,
      fontSize: i === 4 ? 12.8 : 14.5, bold: true, color: i === 4 ? C.ink : C.white,
      margin: 0, fit: "shrink",
    });
  });
  slide.addShape(SH.roundRect, {
    x: 9.15, y: 1.75, w: 3.2, h: 3.95,
    fill: { color: C.cream }, line: { color: C.line }, rectRadius: 0.08,
  });
  slide.addText("What SKILL.md cannot do", {
    x: 9.48, y: 2.08, w: 2.55, h: 0.55,
    fontSize: 20, bold: true, color: C.plum, align: "center", margin: 0,
  });
  const cannot = ["Create a data agent", "Grant access", "Connect a tenant", "Guarantee email", "Make results deterministic"];
  cannot.forEach((t, i) => {
    slide.addShape(SH.ellipse, {
      x: 9.55, y: 2.9 + i * 0.48, w: 0.22, h: 0.22,
      fill: { color: C.coral }, line: { color: C.coral },
    });
    slide.addText(t, {
      x: 9.92, y: 2.84 + i * 0.48, w: 1.98, h: 0.3,
      fontSize: 13.2, bold: true, color: C.ink, margin: 0,
    });
  });
  addFooter(slide, 10);
}

// 11 - deploy/test
{
  const slide = pptx.addSlide();
  slide.background = { color: C.cream };
  addEvidenceThread(slide, 1.5, 5.2, C.teal);
  addTitle(slide, "Update once. Test in fresh sessions.", "Skill lifecycle");
  const flow = [
    ["EDIT", "Replace SKILL.md in the matching OneDrive folder", C.coral],
    ["SYNC", "Wait for OneDrive and keep one authoritative copy", C.amber],
    ["NEW SESSION", "Confirm the intended skill is active", C.berry],
    ["TEST", "Positive | negative | missing source | action confirmation", C.teal],
    ["REVISE", "Narrow triggers or strengthen grounding from evidence", C.blue],
  ];
  flow.forEach(([head, body, color], i) => {
    const x = 0.72 + i * 2.5;
    slide.addShape(SH.roundRect, {
      x, y: 1.65, w: 2.08, h: 2.35,
      fill: { color }, line: { color }, rectRadius: 0.07, shadow: shadow(),
    });
    slide.addText(head, {
      x: x + 0.15, y: 1.98, w: 1.78, h: 0.3,
      fontSize: 13, bold: true, charSpacing: 1.1,
      color: C.white, align: "center", margin: 0,
    });
    slide.addText(body, {
      x: x + 0.22, y: 2.56, w: 1.64, h: 0.9,
      fontSize: 11.6, bold: true, color: C.white,
      align: "center", margin: 0, fit: "shrink",
    });
    if (i < flow.length - 1) addArrow(slide, x + 2.1, 2.62, 0.32, C.line);
  });
  slide.addShape(SH.roundRect, {
    x: 1.25, y: 4.72, w: 10.85, h: 1.15,
    fill: { color: C.white }, line: { color: C.line }, rectRadius: 0.06,
  });
  slide.addText("Email test", {
    x: 1.62, y: 5.05, w: 1.2, h: 0.3,
    fontSize: 14, bold: true, color: C.coral, margin: 0,
  });
  slide.addText("Answer first > ask whether to email > collect recipients > show exact subject/content > confirm > send only if capability exists.", {
    x: 2.92, y: 4.96, w: 8.65, h: 0.48,
    fontSize: 13.2, bold: true, color: C.plum, margin: 0, fit: "shrink",
  });
  addFooter(slide, 11);
}

// 12 - teachback
{
  const slide = pptx.addSlide();
  slide.background = { color: C.paper };
  addEvidenceThread(slide, 1.5, 5.2, C.amber);
  addTitle(slide, "Teach-back: can you explain the evidence boundary?", "Participant practice");
  addCard(slide, 0.85, 1.55, 3.7, 3.85, "Business value", "Why does this scenario matter?\n\nWhat does the generated output still not prove?\n\nName the reviewer who remains in the loop.", C.coral, C.paleCoral);
  addCard(slide, 4.82, 1.55, 3.7, 3.85, "Grounding trap", "Where could polished output overstate the source?\n\nState the correct evidence boundary.\n\nName one unknown that must remain visible.", C.amber, C.paleAmber);
  addCard(slide, 8.79, 1.55, 3.7, 3.85, "Inspection point", "Which file, claim, formula, or row must you open?\n\nWhat is the pass/fail checkpoint?\n\nWhat will you show beside the output?", C.teal, C.paleSage);
  slide.addShape(SH.roundRect, {
    x: 1.3, y: 5.75, w: 10.75, h: 0.58,
    fill: { color: C.plum }, line: { color: C.plum }, rectRadius: 0.04,
  });
  slide.addText("Add one sentence: \"If the run is slow, incomplete, or wrong, I will...\"", {
    x: 1.7, y: 5.92, w: 9.95, h: 0.24,
    fontSize: 15, bold: true, color: C.white, align: "center", margin: 0,
  });
  addFooter(slide, 12);
}

// 13 - close
{
  const slide = pptx.addSlide();
  slide.background = { color: C.plum };
  slide.addShape(SH.arc, {
    x: -1.1, y: 3.4, w: 5.2, h: 5.2, rotate: 210,
    fill: { color: C.teal, transparency: 10 },
    line: { color: C.teal, transparency: 100 },
  });
  slide.addShape(SH.arc, {
    x: 9.2, y: -1.6, w: 5.5, h: 5.5, rotate: 20,
    fill: { color: C.coral, transparency: 8 },
    line: { color: C.coral, transparency: 100 },
  });
  slide.addText("TRAIN FOR EVIDENCE,\nNOT THEATER.", {
    x: 1.25, y: 1.38, w: 10.8, h: 1.7,
    fontFace: "Aptos Display", fontSize: 42, bold: true,
    color: C.white, align: "center", margin: 0,
  });
  slide.addText("A credible Cowork demonstration shows the source, the limits, and the reviewer - not only the generated artifact.", {
    x: 1.6, y: 3.52, w: 10.15, h: 0.58,
    fontSize: 18.5, color: "F4E8E1", align: "center", margin: 0,
  });
  addPill(slide, "REHEARSE", 3.35, 5.05, 1.55, C.coral);
  addPill(slide, "INSPECT", 5.18, 5.05, 1.55, C.teal);
  addPill(slide, "DISCLOSE", 7.01, 5.05, 1.65, C.amber, C.ink);
  addFooter(slide, 13, true);
}

// Lightweight structural checks before writing.
for (const [index, slide] of pptx._slides.entries()) {
  if (!slide._slideObjects || slide._slideObjects.length === 0) {
    throw new Error(`Slide ${index + 1} has no objects`);
  }
}

pptx.writeFile({ fileName: "training/CoworkSkilling-Train-the-Trainer.pptx" });
