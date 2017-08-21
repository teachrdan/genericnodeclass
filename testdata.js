const testData = {
  employeeArr: [
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
  ],

  treeRoot: {
    id: 7,
    level: 1,
    name: 'Jo',
    supervisor_id: 0,
    children: []
  },

  rootAndFirstEmployee: {
    id: 7,
    level: 1,
    name: 'Jo',
    supervisor_id: 0,
    children: [{
      id: 3,
      level: 2,
      name: 'Ariel',
      supervisor_id: 7,
      children: []
    }]
  },

  wholeCompany: {
    id: 7,
    level: 1,
    name: 'Jo',
    supervisor_id: 0,
    children: [
      {
        id: 3,
        level: 2,
        name: 'Ariel',
        supervisor_id: 7,
        children: [
          {
            name: "Erin",
            id: 1,
            supervisor_id: 3,
            level: 3,
            children: [
              {
                name: "Lee",
                id: 4,
                supervisor_id: 1,
                level: 4,
                children: []
              }
            ]
          }
        ]
      }, {
        id: 9,
        level: 2,
        name: 'Scout',
        supervisor_id: 7,
        children: []
      }, {
        id: 2,
        level: 2,
        name: 'Marai',
        supervisor_id: 7,
        children: []
      }
    ]
  }
};

module.exports = testData;
