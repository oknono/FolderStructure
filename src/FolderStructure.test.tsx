import { render, screen } from "@testing-library/react";
import FolderStructure from "./FolderStructure";
import type { NodeModel } from "./types";

describe("FolderStructure Component", () => {
  it("should render empty state message when no nodes are provided", () => {
    render(
      <FolderStructure
        nodes={[]}
        deleteNode={() => {}}
        addNode={() => {}}
        updateNode={() => {}}
      />
    );

    expect(screen.getByText("No data to show")).toBeInTheDocument();
  });

  it("should render a simple structure with two file nodes", () => {
    const nodes: NodeModel[] = [
      { type: "file", id: "1", name: "file 1" },
      { type: "file", id: "2", name: "file 2" },
    ];

    const { container } = render(
      <FolderStructure
        nodes={nodes}
        deleteNode={() => {}}
        addNode={() => {}}
        updateNode={() => {}}
      />
    );

    const outerList = container.querySelector("ul.outer-list");
    expect(outerList).toBeInTheDocument();
    const listItems = outerList?.querySelectorAll("li");
    expect(listItems?.length).toBe(2);
  });

  it("should render a simple structure with two folder nodes (no Children)", () => {
    const nodes: NodeModel[] = [
      { type: "folder", id: "1", name: "folder 1" },
      { type: "folder", id: "2", name: "folder 2" },
    ];

    const { container } = render(
      <FolderStructure
        nodes={nodes}
        deleteNode={() => {}}
        addNode={() => {}}
        updateNode={() => {}}
      />
    );

    const outerList = container.querySelector("ul.outer-list");
    expect(outerList).toBeInTheDocument();
    const listItems = outerList?.querySelectorAll("li");
    expect(listItems?.length).toBe(2);
    const ulItems = outerList?.querySelectorAll("ul");
    expect(ulItems?.length).toBe(0);
  });

  it("should render a nested structure", () => {
    const nodes: NodeModel[] = [
      {
        type: "folder",
        id: "1",
        name: "folder 1",
        children: [
          { type: "file", id: "3", name: "file 1" },
          { type: "file", id: "4", name: "file 2" },
          { type: "file", id: "5", name: "file 3" },
        ],
      },
      { type: "file", id: "2", name: "file 1" },
    ];

    const { container } = render(
      <FolderStructure
        nodes={nodes}
        deleteNode={() => {}}
        addNode={() => {}}
        updateNode={() => {}}
      />
    );
    const outerList = container.querySelector("ul.outer-list");
    expect(outerList).toBeInTheDocument();
    const listItems = outerList?.querySelectorAll(":scope > li");
    expect(listItems?.length).toBe(2);
    const nestedList = outerList?.querySelector(":scope > ul");
    expect(nestedList).toBeInTheDocument();
    const nestedListItems = nestedList?.querySelectorAll(":scope > li");
    expect(nestedListItems?.length).toBe(3);
  });
});
