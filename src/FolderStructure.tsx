import type { NodeModel } from "./types";
import "./FolderStructure.css";

interface FSProps {
  nodes: NodeModel[];
}

export default function FolderStructure({ nodes }: FSProps) {
  if (nodes.length === 0) {
    return <p>No data to show</p>;
  }

  function renderSingleNode(node: NodeModel) {
    return (
      <li key={node.id}>
        {node.type} {node.id}
      </li>
    );
  }

  return (
    <ul role="tree" className="outer-list">
      {nodes.map((node: NodeModel) => renderSingleNode(node))}
    </ul>
  );
}
