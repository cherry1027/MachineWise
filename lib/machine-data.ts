export const criteria = [
  { key: "safety", label: "Safety", shortLabel: "Safety" },
  { key: "ergonomics", label: "Ergonomics", shortLabel: "Ergo." },
  { key: "automation", label: "Automation", shortLabel: "Auto." },
  { key: "maintainability", label: "Maintainability", shortLabel: "Maintain." },
  { key: "reliability", label: "Reliability", shortLabel: "Reliab." },
  { key: "efficiency", label: "Operational Efficiency", shortLabel: "Efficiency" },
] as const;

export type CriterionKey = (typeof criteria)[number]["key"];
export type MachineId = "flexconvert" | "packline" | "fiberpro";
export type Status = "green" | "yellow" | "red";

export type Machine = {
  id: MachineId;
  name: string;
  type: string;
  code: string;
  scores: Record<CriterionKey, number>;
  operations: { name: string; status: Status; note: string }[];
  findings: { kind: "positive" | "attention"; title: string; detail: string }[];
  strengths: string[];
  opportunities: string[];
};

export const machines: Machine[] = [
  {
    id: "flexconvert", name: "FlexConvert 300", type: "Modular converting line", code: "FC-300",
    scores: { safety: 8.6, ergonomics: 7.4, automation: 9.0, maintainability: 7.2, reliability: 8.5, efficiency: 8.8 },
    operations: [
      { name: "Production", status: "green", note: "Guarded, automated material flow" },
      { name: "Cleaning", status: "yellow", note: "Two manual access points" },
      { name: "Changeover", status: "green", note: "Recipe-led adjustment sequence" },
      { name: "Troubleshooting", status: "yellow", note: "Rear-panel access required" },
      { name: "Maintenance", status: "yellow", note: "Low service point at drive side" },
    ],
    findings: [
      { kind: "attention", title: "Awkward maintenance posture", detail: "Drive-side belt inspection requires a sustained low reach." },
      { kind: "attention", title: "Difficult component access", detail: "Rear sensor cluster has limited tool clearance." },
      { kind: "positive", title: "Emergency-stop accessibility", detail: "Controls remain visible and reachable from primary operator zones." },
      { kind: "positive", title: "Automated material handling", detail: "Powered web transport reduces repetitive manual movement." },
      { kind: "positive", title: "Efficient changeover logic", detail: "Stored recipes reduce setup variation between products." },
    ],
    strengths: ["High automation coverage", "Consistent production efficiency", "Accessible emergency-stop layout"],
    opportunities: ["Raise drive-side service point", "Increase rear sensor clearance", "Add guided cleaning access"],
  },
  {
    id: "packline", name: "PackLine X2", type: "Compact packaging cell", code: "PL-X2",
    scores: { safety: 7.8, ergonomics: 8.6, automation: 7.5, maintainability: 8.4, reliability: 7.9, efficiency: 8.2 },
    operations: [
      { name: "Production", status: "green", note: "Clear operator sightlines" },
      { name: "Cleaning", status: "green", note: "Tool-free removable guides" },
      { name: "Changeover", status: "yellow", note: "Several manual adjustments" },
      { name: "Troubleshooting", status: "green", note: "Front-facing diagnostics" },
      { name: "Maintenance", status: "green", note: "Waist-height service modules" },
    ],
    findings: [
      { kind: "attention", title: "Excessive manual changeover", detail: "Six adjustment points depend on operator alignment." },
      { kind: "positive", title: "Good service height", detail: "Routine modules sit inside the preferred reach envelope." },
      { kind: "positive", title: "Direct fault visibility", detail: "HMI guidance identifies the affected module and access side." },
      { kind: "attention", title: "Manual infeed replenishment", detail: "Frequent carton loading may increase repetitive handling." },
      { kind: "positive", title: "Tool-free cleaning access", detail: "Product guides release without loose fasteners." },
    ],
    strengths: ["Best ergonomic score", "Strong maintenance access", "Clear troubleshooting guidance"],
    opportunities: ["Automate format adjustment", "Reduce manual infeed loading", "Improve guard interlock coverage"],
  },
  {
    id: "fiberpro", name: "FiberPro 500", type: "High-capacity fiber processor", code: "FP-500",
    scores: { safety: 9.2, ergonomics: 6.8, automation: 6.9, maintainability: 6.6, reliability: 9.1, efficiency: 7.6 },
    operations: [
      { name: "Production", status: "green", note: "Robust interlocked enclosure" },
      { name: "Cleaning", status: "red", note: "Confined lower collection area" },
      { name: "Changeover", status: "yellow", note: "Manual tooling replacement" },
      { name: "Troubleshooting", status: "yellow", note: "Limited internal visibility" },
      { name: "Maintenance", status: "red", note: "Heavy cover removal required" },
    ],
    findings: [
      { kind: "positive", title: "Strong safeguarding concept", detail: "Interlocked perimeter protection isolates process hazards." },
      { kind: "attention", title: "Restricted cleaning access", detail: "Lower collection area requires kneeling and extended reach." },
      { kind: "attention", title: "Heavy removable guarding", detail: "Two service covers exceed preferred single-person handling mass." },
      { kind: "attention", title: "Manual tooling change", detail: "Changeover depends on repeated lifting and alignment." },
      { kind: "positive", title: "High mechanical reliability", detail: "Simplified drive architecture supports stable production." },
    ],
    strengths: ["Highest safety score", "Strong mechanical reliability", "Robust process isolation"],
    opportunities: ["Redesign lower cleaning access", "Reduce guard handling mass", "Automate tooling alignment"],
  },
];

export const statusStyles: Record<Status, { label: string; pill: string; dot: string }> = {
  green: { label: "Acceptable", pill: "status-green", dot: "bg-emerald-500" },
  yellow: { label: "Review", pill: "status-yellow", dot: "bg-amber-500" },
  red: { label: "Action needed", pill: "status-red", dot: "bg-red-500" },
};
