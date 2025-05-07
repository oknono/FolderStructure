import type { NodeModel } from "./types";
import "./FolderStructure.css";
import SingleNode from "./SingleNode";
import type { JSX } from "react";

interface FSProps {
  nodes: NodeModel[];
  deleteNode: (id: string) => void;
  addNode: (node: NodeModel, id: string) => void;
}

export default function FolderStructure({
  nodes,
  deleteNode,
  addNode,
}: FSProps) {
  if (nodes.length === 0) {
    return <p>No data to show</p>;
  }

  function renderSingleNode(
    node: NodeModel,
    addNode: (node: NodeModel, id: string) => void,
    deleteNode: (id: string) => void,
    isRoot: boolean = false
  ): JSX.Element {
    if (node.type === "folder" && !isRoot) {
      return (
        <ul role="tree">
          <SingleNode
            key={node.id}
            node={node}
            addNode={addNode}
            deleteNode={deleteNode}
          />
          {node.children &&
            node.children.length > 0 &&
            node.children.map((child: NodeModel) =>
              renderSingleNode(child, addNode, deleteNode, false)
            )}
        </ul>
      );
    } else {
      return (
        <>
          <SingleNode
            key={node.id}
            node={node}
            addNode={addNode}
            deleteNode={deleteNode}
          />
          {node.children &&
            node.children.length > 0 &&
            node.children.map((child: NodeModel) =>
              renderSingleNode(child, addNode, deleteNode, false)
            )}
        </>
      );
    }
  }

  return (
    <ul role="tree" className="outer-list">
      {nodes.map((node: NodeModel) =>
        renderSingleNode(node, addNode, deleteNode, true)
      )}
    </ul>
  );
}
