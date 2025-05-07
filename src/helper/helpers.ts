import type { NodeModel } from "../types";

// TODO: these function really need tests
// TODO: Brush up BF and DF knowledge and check current implementation
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
