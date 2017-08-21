const assert = require('assert');
const TreeNode = require('./treenode');

const data = [
  {
    name: "Jo",
    id: 7,
    supervisor_id: 0
  },
  {
    name: "Ariel",
    id: 3,
    supervisor_id: 7
  },
  {
    name: "Erin",
    id: 1,
    supervisor_id: 3
  },
  {
    name: "Lee",
    id: 4,
    supervisor_id: 1
  },
  {
    name: "Scout",
    id: 9,
    supervisor_id: 7
  },
  {
    name: "Marai",
    id: 2,
    supervisor_id: 7
  },
];

const root = {
  children: [],
  id: 7,
  level: 1,
  name: 'Jo',
  supervisor_id: 0
};

describe('hasPathSum', function() {
  describe('base cases', function() {
    it('should return the correct ID for a one-node tree', function() {
			const result = new Node(data[0]);
      assert.equal(result, root);
    });
  });
});
