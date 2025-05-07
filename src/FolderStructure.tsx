import type { NodeModel } from "./types";
import "./FolderStructure.css";
import SingleNode from "./SingleNode";

interface FSProps {
  nodes: NodeModel[];
}

export default function FolderStructure({ nodes }: FSProps) {
  if (nodes.length === 0) {
    return <p>No data to show</p>;
  }

  return (
    <ul role="tree" className="outer-list">
      {nodes.map((node: NodeModel) => (
        <SingleNode key={node.id} node={node} />
      ))}
    </ul>
  );
}
