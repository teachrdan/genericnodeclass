const assert = require('assert');
const TreeNode = require('./treenode');
const testData = require('./testdata');
const boss = testData.employeeArr[0];
const employees = testData.employeeArr.slice(1)
const firstEmployeeArr = employees.slice(0,1);

describe('hasPathSum', function() {
  describe('base cases', function() {
    it('should return a one-node tree', function() {
			const oneNodeTree = new TreeNode(boss);
      assert.deepEqual(oneNodeTree, testData.treeRoot);
    });

    it('should return a tree with two nodes', function() {
			const twoNodeTree = new TreeNode(boss);
      twoNodeTree.populate(firstEmployeeArr);
      assert.deepEqual(twoNodeTree, testData.rootAndFirstEmployee);
    });

    it('should return the whole tree of the whole company', function() {
      const wholeCompany = new TreeNode(boss);
      wholeCompany.populate(employees);
      assert.deepEqual(wholeCompany, testData.wholeCompany);
    });
  });
});
