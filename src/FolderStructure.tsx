import React from "react";
import SingleNode from "./SingleNode";
import type { JSX } from "react";
import type { NodeModel } from "./types";
import "./FolderStructure.css";

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

  function renderNode(
    node: NodeModel,
    addNode: (node: NodeModel, id: string) => void,
    deleteNode: (id: string) => void
  ): JSX.Element {
    return (
      <React.Fragment key={node.id}>
        <li className="node-item">
          <SingleNode node={node} addNode={addNode} deleteNode={deleteNode} />
        </li>
        {node.children && node.children.length > 0 && (
          <ul>
            {node.children &&
              node.children.length > 0 &&
              node.children.map((child: NodeModel) =>
                renderNode(child, addNode, deleteNode)
              )}
          </ul>
        )}
      </React.Fragment>
    );
  }

  return (
    <ul className="outer-list">
      {nodes.map((node: NodeModel) => renderNode(node, addNode, deleteNode))}
    </ul>
  );
}
