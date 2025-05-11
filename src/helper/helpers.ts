import type { NodeModel } from "../types";

export function deleteNodeById(nodes: NodeModel[], id: string): NodeModel[] {
  const filteredNodes = nodes.filter((node) => node.id !== id);
  if (filteredNodes.length < nodes.length) {
    return filteredNodes;
  }
  return filteredNodes.map((node) => {
    if (node.children && node.children.length > 0) {
      return {
        ...node,
        children: deleteNodeById(node.children, id),
      };
    }
    return node;
  });
}

export function addNode(
  nodes: NodeModel[],
  newNode: NodeModel,
  parentNodeId?: string
): NodeModel[] {
  // add to root folder
  if (parentNodeId == undefined) {
    return [...nodes, newNode];
  }

  return nodes.map((node) => {
    if (node.id === parentNodeId && node.type === "folder") {
      return {
        ...node,
        children: [...(node.children || []), newNode],
      };
    }
    if (node.children && node.children.length > 0) {
      return {
        ...node,
        children: addNode(node.children, newNode, parentNodeId),
      };
    }
    return node;
  });
}

export function updateNodeById<K extends keyof NodeModel>(
  nodes: NodeModel[],
  nodeId: string,
  property: K,
  value: NodeModel[K]
): NodeModel[] {
  return nodes.map((node) => {
    if (node.id === nodeId) {
      return {
        ...node,
        [property]: value,
      };
    }
    if (node.children && node.children.length > 0) {
      return {
        ...node,
        children: updateNodeById(node.children, nodeId, property, value),
      };
    }
    return node;
  });
}
