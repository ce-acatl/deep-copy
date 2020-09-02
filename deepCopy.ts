export class Graph {
	vertices: Vertice[];
	add(v: Vertice) {
		this.vertices.push(v);
	}
}

export class Vertice {
	data: number;
	neighbors: Vertice[];
}

export function deepCopyGraph(graph: Graph): Graph {
	const newGraph = new Graph();
	traverseBFS(newGraph, graph, {});
	return newGraph;
}

export function traverseBFS(newGraph: Graph, graph: Graph, memo: any) {
	const focus = [];
	focus.push(...graph.vertices);
	while(focus.length > 0) {
		
	}
}