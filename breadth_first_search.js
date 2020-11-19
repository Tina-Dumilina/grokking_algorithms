const graph = {};
graph.you = ["alice", "bob", "claire"];
graph.bob = ["anuj", "peggy"];
graph.alice = ["peggy"];
graph.claire = ["thom", "jonny"];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];

// Determine whether a person is a mango seller

function search(name) {
  const searchQueue = [...graph[name]];
  const searched = [];
  while (searchQueue.length > 0) {
    let person = searchQueue.shift();
    if (!searched.some((elem) => elem === person)) {
      if (isSeller(person)) {
        console.log(person + " is a mango seller!");
        return true;
      } else {
        searchQueue.push(...graph[person]);
        searched.push(person);
      }
    }
  }
  return false;
}

function isSeller(person) {
  return person.endsWith("m");
}

search("you");
