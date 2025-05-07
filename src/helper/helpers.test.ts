import type { NodeModel } from "../types";
import { deleteNodeById } from "./helpers";

describe("Helper Functions: manipulate NodeModel", () => {
  describe("removeNodeById", () => {
    it("should return an empty array when structure is empty", () => {
      const emptyStructure: NodeModel[] = [];
      const newStructure = deleteNodeById(emptyStructure, "some_id");
      expect(newStructure).toHaveLength(0);
    });
    it("should remove top level node", () => {
      const idToRemove = "test_id";
      const simpleStructure: NodeModel[] = [
        {
          type: "folder",
          name: "my_first_folder",
          id: idToRemove,
          children: [],
        },
      ];
      const newStructure = deleteNodeById(simpleStructure, idToRemove);
      expect(newStructure).toHaveLength(0);
    });
    it("should remove nested node", () => {
      const idToRemove = "test_id";
      const nestedStructure: NodeModel[] = [
        {
          type: "folder",
          name: "my_first_folder",
          id: "id_1",
          children: [
            {
              type: "folder",
              name: "my_second_folder",
              id: "id_4",
              children: [
                {
                  type: "folder",
                  name: "another_folder",
                  id: "id_6",
                  children: [],
                },
                {
                  type: "file",
                  name: "another_folder",
                  id: idToRemove,
                },
              ],
            },
          ],
        },
        {
          type: "file",
          name: "some_file",
          id: "id_2",
        },
      ];
      expect(nestedStructure).toHaveLength(2);
      // TODO: Figure out more readable way
      expect(nestedStructure[0]?.children?.[0]?.children).toHaveLength(2);
      const newStructure = deleteNodeById(nestedStructure, idToRemove);
      expect(newStructure).toHaveLength(2);
      expect(newStructure[0]?.children?.[0]?.children).toHaveLength(1);
    });
    it("should return an same structure if id doesn't match any node", () => {
      const idToRemove = "nonExistingId";
      const testStructure: NodeModel[] = [
        {
          type: "folder",
          name: "my_first_folder",
          id: "id_1",
          children: [
            {
              type: "folder",
              name: "my_second_folder",
              id: "id_4",
              children: [],
            },
          ],
        },
        {
          type: "file",
          name: "some_file",
          id: "id_2",
        },
      ];
      const newStructure = deleteNodeById(testStructure, idToRemove);
      expect(newStructure).toHaveLength(2);
      expect(newStructure[0]?.children).toHaveLength(1);
    });
  });
});
