"use client";

import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { criteria, machines, type Machine } from "@/lib/machine-data";

export function MachineRadar({ machine, compact = false }: { machine: Machine; compact?: boolean }) {
  const data = criteria.map((criterion) => ({ criterion: criterion.shortLabel, score: machine.scores[criterion.key] }));
  return (
    <ChartContainer config={{ score: { label: machine.name, color: "#eab308" } }} className={compact ? "radar-chart compact" : "radar-chart"} initialDimension={{ width: 360, height: compact ? 220 : 300 }}>
      <RadarChart data={data} outerRadius={compact ? "66%" : "70%"}>
        <PolarGrid stroke="#cbd5e1" radialLines={true} />
        <PolarAngleAxis dataKey="criterion" tick={{ fill: "#64748b", fontSize: compact ? 10 : 11, fontWeight: 600 }} />
        <PolarRadiusAxis domain={[0, 10]} tick={false} axisLine={false} />
        <Radar dataKey="score" stroke="#ca8a04" fill="#eab308" fillOpacity={0.23} strokeWidth={2} dot={{ r: 3, fill: "#111827", strokeWidth: 0 }} />
      </RadarChart>
    </ChartContainer>
  );
}

export function ComparisonRadar() {
  const colors = ["#d49b16", "#0f766e", "#475569"];
  const data = criteria.map((criterion) => ({ criterion: criterion.shortLabel, ...Object.fromEntries(machines.map((machine) => [machine.id, machine.scores[criterion.key]])) }));
  return (
    <ChartContainer config={Object.fromEntries(machines.map((machine, index) => [machine.id, { label: machine.name, color: colors[index] }]))} className="radar-chart comparison" initialDimension={{ width: 480, height: 280 }}>
      <RadarChart data={data} outerRadius="62%">
        <PolarGrid stroke="#cbd5e1" />
        <PolarAngleAxis dataKey="criterion" tick={{ fill: "#64748b", fontSize: 10, fontWeight: 600 }} />
        <PolarRadiusAxis domain={[0, 10]} tick={false} axisLine={false} />
        {machines.map((machine, index) => <Radar key={machine.id} name={machine.name} dataKey={machine.id} stroke={colors[index]} fill={colors[index]} fillOpacity={0.05} strokeWidth={2} />)}
        <Legend iconType="plainline" iconSize={14} wrapperStyle={{ fontSize: 11, fontWeight: 600 }} />
      </RadarChart>
    </ChartContainer>
  );
}
