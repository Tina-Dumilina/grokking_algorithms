const graph = {
  start: {
    a: 6,
    b: 2
  },
  a: {
    fin: 1
  },
  b: {
    a: 3,
    fin: 5
  },
  fin: {}
};

const costs = {
  a: 6,
  b: 2,
  fin: Infinity
};

const parents = {
  a: "start",
  b: "start",
  fin: null
};

const processed = [];

function findLowestCostNode(costs) {
  let lowestCost = Infinity
  let lowestCostNode = null
  Object.keys(costs).forEach((key, index) => {
    const cost = costs[key] 
    if (cost < lowestCost && processed.indexOf(key) === -1) {
      lowestCost = costs[key];
      lowestCostNode = key;
    }
  });
  return lowestCostNode;
}

// Найти узел с наименьшей стоимостью
let node = findLowestCostNode(costs);
while (node !== null) {
  let cost = costs[node];
  // Вычислить, сколько времени понадобится, чтобы добраться до всех его соседей
  const neighbors = graph[node];
  Object.keys(neighbors).forEach((key) => {
    let newCost = cost + neighbors[key];
    // Если стоимость узла с учетом соседа меньше, то обновляем стоимость и родителя
    if (costs[key] > newCost) {
      costs[key] = newCost;
      parents[key] = node;
    }
  });
  processed.push(node);
  node = findLowestCostNode(costs);
}

console.log(costs);
