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

class Node {
	constructor(obj, level=1) {
		this.children = [];
		this.id = obj.id;
		this.level = level;
		this.name = obj.name;
		this.supervisor_id = obj.supervisor_id;
	}

	findById(id) {
		if (this.id===id) return this;
		let foundNode = null;
		const childrenArr = this.children.slice();
		while (childrenArr.length > 0) {
			let child = childrenArr.shift();
			if (child.id===id) foundNode = child;
			if (child.children.length>0) childrenArr.push(...child.children);
		}
		return foundNode;
	}

 	populate(arr) {
		let count = 0;
		// prevent endless loop
		while (arr.length>0 && count<1000) {
			const currentNode = arr.shift();
			const supervisor = this.findById(currentNode.supervisor_id);
			if (supervisor) {
				supervisor.children.push(new Node(currentNode, supervisor.level+1));
			} else {
				// if there is no parent yet for this node, push it to the end of the array
				arr.push(currentNode);
			}
			count++;
		}
	}
};
