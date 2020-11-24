/*
  Найти минимальный набор станций, который бы покрывал все необходимые штаты.
*/

let statesNeeded = ["mt", "wa", "or", "id", "nv", "ut", "ca", "az"];

const stations = {
  kone: ["id", "nv", "ut"],
  ktwo: ["wa", "id", "mt"],
  kthree: ["or", "nv", "ca"],
  kfour: ["nv", "ut"],
  kfive: ["ca", "az"]
};

const finalStations = new Set();

while (statesNeeded.length > 0) {
  let bestStation = null;
  let statesCovered = [];
  for (let [station, statesForStation] of Object.entries(stations)) {
    // находим пересечение statesForStation и statesNeeded
    let covered = statesForStation.filter(
      (state) => statesNeeded.indexOf(state) !== -1
    );
    // если новое пересечение длиннее предыдущего, то назначаем лучшую станцию
    if (covered.length > statesCovered.length) {
      bestStation = station;
      statesCovered = covered;
    }
  }
  finalStations.add(bestStation);
  statesNeeded = statesNeeded.filter(
    (state) => statesCovered.indexOf(state) === -1
  );
}

console.log(finalStations)
