const brain = require('brain.js')
const network = new brain.NeuralNetwork();

network.train([
    { input: [0,0,0], output: [0] },
    { input: [0,0,1], output: [0] },
    { input: [0,1,1], output: [0] },
    { input: [1,0,1], output: [1] },
    { input: [1,1,1], output: [1] },
]);

const output1 = network.run([1,0,0]);
const output2 = network.run([0,0,0]);
console.log(`Probability ${output1}`); // [1,0,0] => Probability 0.9073489308357239 => this number tends to 1 => 1
console.log(`Probability ${output2}`); // [0,0,0] => Probability 0.04899141192436218 => this numbers tends to 0 => 0