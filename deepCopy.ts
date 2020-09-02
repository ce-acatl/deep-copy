export class Graph {
	vertices: Vertice[];
	add(v: Vertice) {
		this.vertices.push(v);
	}
	constructor(vertices?: Vertice[]) {
		if (!!vertices) {
			this.vertices = vertices;
		}
	}
}

export class Vertice {
	data: number;
	neighbors: Vertice[];
	constructor(data: number, neighbors: Vertice[]) {
		this.data = data;
		this.neighbors = neighbors;
	}
}

export function deepCopy(graph: Graph): Graph {
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