import { expect } from 'chai';
import { deepCopy, Graph, Vertice } from './deepCopy';


describe.only('deepCopy', () => {
	it('should not mutate the original graph', () => {
		const graph = new Graph(
			[
				new Vertice(10, [
					new Vertice(11, [
						new Vertice(15, [
							new Vertice(10, [
								new Vertice(11, [])
							]),
							new Vertice(99, [])
						])
					]),
					new Vertice(12, []),
					new Vertice(13, []),
					new Vertice(14, [])
				])
			]
		);
		const copyGraph = deepCopy(graph);
		console.log(JSON.stringify(graph), '11111');
		console.log(JSON.stringify(copyGraph), '3333333');
		expect(graph).deep.eq(copyGraph);
		expect(graph, 'graph should be deep equal copyGraph').deep.eq(copyGraph);
		copyGraph.vertices[0].data = 12; // was previously 10
		delete copyGraph.vertices[0].neighbors[0].neighbors[0].neighbors; // previously contains 2 nodes
		expect(graph.vertices[0].data, 'original data should not be mutated').eq(10);
		expect(graph.vertices[0].neighbors[0].neighbors[0].neighbors.length, 'original vertices should and its connections should not be mutated').eq(2);
	});
});