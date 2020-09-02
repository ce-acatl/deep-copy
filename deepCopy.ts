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
	const memo: Memo = {};
	let focus: Vertice[] = [];
	const newGraph = new Graph([]);
	focus.push(...graph.vertices);
	let level = 0;
	while(level < focus.length) {
		let neighborsFocus: Vertice[] = [];
		for (const focusVertice of focus) {
			const focusVerticeCopy = deepCopyVertice(focusVertice, memo);
			newGraph.add(focusVerticeCopy);
		}

		if (neighborsFocus.length >  0) {
			focus = neighborsFocus;
		}
		level++;
	}
	return newGraph;
}

export function deepCopyVertice(v: Vertice, memo: Memo): Vertice {
	const verticeReference = v.constructor.name;
	if (!memo[verticeReference]) {
		const newCopyVertice = new Vertice(+v.data, []);
		if (v.neighbors.length > 0) {
			for (const neighbor of v.neighbors) {
				const copiedNeighbor = deepCopyVertice(neighbor, memo);
				newCopyVertice.neighbors.push(copiedNeighbor);
			}
		}
		memo[verticeReference] = newCopyVertice;
		return newCopyVertice;
	} else {
		return memo[verticeReference];
	}
}

export interface Memo {
	[reference: string]: Vertice;
}
