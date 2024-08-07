const bins = [1, 2, 3];
const timeUnits = ['hour', 'day', 'month'];
const joinaggregateTransform = 'sum';

const filteredLayersMixinsTransforms = [...bins, ...timeUnits, joinaggregateTransform];

console.log(filteredLayersMixinsTransforms);
// Output: [1, 2, 3, 'hour', 'day', 'month', 'sum']
