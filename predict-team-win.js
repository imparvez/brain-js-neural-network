const brain = require('brain.js')
const network = new brain.NeuralNetwork();

// Training model will take 4 teams and who won the match
// 0 => first input team won the match
// 1 => second input team won the match

network.train([
    { input: [1,2], output: [1] }, // Team 2 wins
    { input: [1,3], output: [1] }, // Team 3 wins
    { input: [2,3], output: [0] }, // Team 2 wins
    { input: [2,4], output: [1] }, // Team 4 wins
    // Changing training model will impact the results
    { input: [1,2], output: [0] }, // Team 1 wins
    { input: [1,3], output: [0] }, // Team 1 wins
    { input: [3,4], output: [0] }, // Team 3 wins 
]);

const output = network.run([1,4]);

console.log(`Probability of team wining is: ${output}`); // 0.996669590473175 -> Team 4 wins