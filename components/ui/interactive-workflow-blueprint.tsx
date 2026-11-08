"use client";

import { useEffect, useState } from "react";
import {
  Background, BackgroundVariant, Handle, MarkerType, Position, ReactFlow,
  addEdge, useEdgesState, useNodesState,
  type Connection, type Edge, type Node, type NodeProps,
} from "@xyflow/react";
import { Bot, CalendarDays, Database, GitBranch, Play, Plus, RotateCcw, ShieldCheck, Webhook } from "lucide-react";
import "@xyflow/react/dist/style.css";

const kinds = {
  trigger: { label: "Webhook", Icon: Webhook },
  agent: { label: "n8n AI Agent", Icon: Bot },
  crm: { label: "CRM", Icon: Database },
  review: { label: "Human review", Icon: ShieldCheck },
  calendar: { label: "Calendar", Icon: CalendarDays },
};
type StepKind = keyof typeof kinds;
type Step = Node<{ kind: StepKind; title: string; detail: string }, "workflow">;
type Branch = "qualified" | "review";
type LinkEdge = Edge<{ branch?: Branch }>;
type TestResult = { visited: string[]; followed: string[]; message: string };

function WorkflowNode({ data, selected }: NodeProps<Step>) {
  const { label, Icon } = kinds[data.kind];
  return (
    <div className="studio-workflow-node" data-kind={data.kind} data-selected={selected}>
      {data.kind !== "trigger" && <Handle type="target" position={Position.Top} aria-label="Input port" />}
      <Icon size={21} aria-hidden="true" />
      <strong>{data.title}</strong>
      <span>{label}</span>
      <Handle type="source" position={Position.Bottom} aria-label="Output port" />
    </div>
  );
}

const nodeTypes = { workflow: WorkflowNode };
const actions = [
  { kind: "agent", title: "Add an AI agent", detail: "Check the message against your enquiry rules." },
  { kind: "calendar", title: "Offer a booking", detail: "Prepare available times for the customer to choose from." },
  { kind: "review", title: "Request a review", detail: "Send the conversation to a teammate for a decision." },
] as const;

const initialNodes: Step[] = [
  { id: "trigger", type: "workflow", position: { x: 102, y: 0 }, data: { kind: "trigger", title: "New enquiry", detail: "A website form sends the customer's message to the workflow." } },
  { id: "agent", type: "workflow", position: { x: 102, y: 119 }, data: { kind: "agent", title: "Qualify the lead", detail: "The agent identifies what the customer needs and checks whether a teammate should review it." } },
  { id: "crm", type: "workflow", position: { x: 0, y: 252 }, data: { kind: "crm", title: "Create CRM lead", detail: "Save the enquiry and its summary so your team can follow up." } },
  { id: "review", type: "workflow", position: { x: 204, y: 252 }, data: { kind: "review", title: "Send for review", detail: "Pass the message and the agent's notes to a teammate." } },
];
const initialEdges: LinkEdge[] = [
  { id: "enquiry-agent", source: "trigger", target: "agent" },
  { id: "agent-crm", source: "agent", target: "crm", data: { branch: "qualified" } },
  { id: "agent-review", source: "agent", target: "review", data: { branch: "review" } },
];
const edgeOptions = { type: "smoothstep", markerEnd: { type: MarkerType.ArrowClosed, width: 13, height: 13 } };
const fitOptions = { padding: 0.13, maxZoom: 1.16 };

function canConnect(connection: Pick<Connection, "source" | "target">, edges: LinkEdge[]) {
  const { source, target } = connection;
  if (!source || !target || source === target || target === "trigger") return false;
  if (edges.some((edge) => edge.source === source && edge.target === target)) return false;
  const seen = new Set<string>();
  const queue = [target];
  for (const id of queue) {
    if (id === source) return false;
    if (seen.has(id)) continue;
    seen.add(id);
    queue.push(...edges.filter((edge) => edge.source === id).map((edge) => edge.target));
  }
  return true;
}

function simulate(nodes: Step[], edges: LinkEdge[], branch: Branch): TestResult {
  const seen = new Set<string>();
  const followed: string[] = [];
  const queue = ["trigger"];
  for (const id of queue) {
    if (seen.has(id)) continue;
    seen.add(id);
    for (const edge of edges.filter((link) => link.source === id && (!link.data?.branch || link.data.branch === branch))) {
      followed.push(edge.id);
      queue.push(edge.target);
    }
  }
  const completed = [...seen].map((id) => nodes.find((node) => node.id === id)?.data.title).filter(Boolean);
  return { visited: [...seen], followed, message: `Sample run complete. ${completed.join(" → ")}.` };
}

export default function InteractiveWorkflowBlueprint() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selected, setSelected] = useState("agent");
  const [branch, setBranch] = useState<Branch>("qualified");
  const [result, setResult] = useState<TestResult | null>(null);
  const [notice, setNotice] = useState("");
  const [sequence, setSequence] = useState(0);
  const [flow, setFlow] = useState<{ fitView: (options: typeof fitOptions) => Promise<boolean> } | null>(null);
  const step = nodes.find((node) => node.id === selected) ?? nodes[1];

  useEffect(() => {
    if (!flow) return;
    let nextFrame = 0;
    const frame = requestAnimationFrame(() => {
      nextFrame = requestAnimationFrame(() => void flow.fitView(fitOptions));
    });
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(nextFrame);
    };
  }, [flow, sequence]);

  const connect = (connection: Connection) => {
    if (!canConnect(connection, edges)) return;
    setEdges((current) => addEdge(connection, current));
    setResult(null);
    setNotice("Connection added.");
  };

  const add = (action: typeof actions[number]) => {
    const id = `added-${sequence}`;
    const position = { x: 392 + 168 * (sequence % 2), y: 20 + 106 * Math.floor(sequence / 2) };
    setNodes((current) => [...current, { id, type: "workflow", position, data: { ...action } }]);
    setEdges((current) => [...current, { id: `edge-${id}`, source: step.id, target: id }]);
    setSelected(id);
    setSequence((current) => current + 1);
    setResult(null);
    setNotice(`${action.title} added after ${step.data.title}.`);
  };

  const reset = () => {
    setNodes(initialNodes);
    setEdges(initialEdges);
    setSelected("agent");
    setSequence(0);
    setBranch("qualified");
    setResult(null);
    setNotice("Example workflow restored.");
  };

  return (
    <div className="studio-workflow-editor" aria-label="Interactive n8n-style workflow example">
      <div className="studio-workflow-bar">
        <div><GitBranch size={17} aria-hidden="true" /><span>Lead intake</span><span className="studio-workflow-badge">Demo</span></div>
        <div className="studio-workflow-run">
          <label><span className="sr-only">Sample enquiry</span><select value={branch} onChange={(event) => { setBranch(event.target.value as Branch); setResult(null); }}>
            <option value="qualified">Qualified enquiry</option><option value="review">Needs a review</option>
          </select></label>
          <button type="button" className="studio-workflow-primary" onClick={() => { setNotice(""); setResult(simulate(nodes, edges, branch)); }}><Play size={15} aria-hidden="true" /> Run test</button>
        </div>
      </div>
      <div className="studio-workflow-body">
        <div className="studio-workflow-canvas" data-lenis-prevent>
          <ReactFlow<Step, LinkEdge> nodes={nodes.map((node) => ({
            ...node, className: result?.visited.includes(node.id) ? "studio-workflow-visited" : "",
          }))} edges={edges.map((edge) => ({
            ...edge, animated: result?.followed.includes(edge.id),
            className: result?.followed.includes(edge.id) ? "studio-workflow-followed" : "",
          }))}
            nodeTypes={nodeTypes} defaultEdgeOptions={edgeOptions} fitView fitViewOptions={fitOptions} minZoom={0.36}
            onInit={setFlow} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={connect}
            isValidConnection={(connection) => canConnect(connection, edges)}
            onSelectionChange={({ nodes: chosen }) => { if (chosen[0]) setSelected(chosen[0].id); }}
            zoomOnScroll={false} panOnScroll={false} preventScrolling={false} deleteKeyCode={null}
            aria-label="Lead intake diagram">
            <Background variant={BackgroundVariant.Dots} gap={18} size={1.2} color="#51434d" />
          </ReactFlow>
          <div className="studio-workflow-tools">
            <button type="button" onClick={() => void flow?.fitView(fitOptions)}>Fit canvas</button>
            <button type="button" onClick={reset}><RotateCcw size={14} aria-hidden="true" /> Reset</button>
          </div>
        </div>
        <aside className="studio-workflow-aside" aria-label="Workflow steps">
          <div className="studio-workflow-inspector">
            <label htmlFor="studio-workflow-step">Inspect step</label>
            <select id="studio-workflow-step" value={step.id} onChange={(event) => setSelected(event.target.value)}>
              {nodes.map((node) => <option key={node.id} value={node.id}>{node.data.title}</option>)}
            </select>
            <p>{step.data.detail}</p>
          </div>
          <div className="studio-workflow-actions">
            <span>Add after this step</span>
            {actions.map((action) => <button key={action.kind} type="button" onClick={() => add(action)} disabled={sequence >= 4}><Plus size={14} aria-hidden="true" /> {action.title}</button>)}
          </div>
        </aside>
      </div>
      <div className="studio-workflow-status" role="status">{result?.message || notice || "Drag a step, connect the ports, or run a sample enquiry."}<span>Sample data only</span></div>
    </div>
  );
}
