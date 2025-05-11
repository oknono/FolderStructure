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

  function renderSingleNode(
    node: NodeModel,
    addNode: (node: NodeModel, id: string) => void,
    deleteNode: (id: string) => void
  ): JSX.Element {
    if (node.type === "folder") {
      return (
        <React.Fragment key={node.id}>
          <SingleNode
            key={node.id}
            node={node}
            addNode={addNode}
            deleteNode={deleteNode}
          />
          {node.children && node.children.length > 0 && (
            <ul>
              {node.children &&
                node.children.length > 0 &&
                node.children.map((child: NodeModel) =>
                  renderSingleNode(child, addNode, deleteNode)
                )}
            </ul>
          )}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment key={node.id}>
          <SingleNode
            key={node.id}
            node={node}
            addNode={addNode}
            deleteNode={deleteNode}
          />
          {node.children &&
            node.children.length > 0 &&
            node.children.map((child: NodeModel) =>
              renderSingleNode(child, addNode, deleteNode)
            )}
        </React.Fragment>
      );
    }
  }

  return (
    <ul className="outer-list">
      {nodes.map((node: NodeModel) =>
        renderSingleNode(node, addNode, deleteNode)
      )}
    </ul>
  );
}
