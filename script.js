const graph = {
    A: {B: 4, C: 1},
    B: {A: 4, C: 2, D: 1, E: 7},
    C: {A: 1, B: 2, D: 5},
    D: {B: 1, C: 5, E: 3},
    E: {B: 7, D: 3}
};

function runAlgorithm() {

    let source =
        document.getElementById("source").value;

    let distance = {};
    let visited = new Set();

    for (let vertex in graph) {
        distance[vertex] = Infinity;
    }

    distance[source] = 0;

    while (visited.size < 5) {

        let current = null;

        for (let vertex in graph) {
            if (!visited.has(vertex) &&
                (current === null ||
                distance[vertex] < distance[current])) {
                current = vertex;
            }
        }

        if (current === null ||
            distance[current] === Infinity) break;

        visited.add(current);

        for (let neighbor in graph[current]) {

            let newDistance =
                distance[current] + graph[current][neighbor];

            if (newDistance < distance[neighbor]) {
                distance[neighbor] = newDistance;
            }
        }
    }

    document.getElementById("result").innerHTML =
        "Shortest distance from " + source +
        ": " + JSON.stringify(distance);
}