// Find the winner of an epic Parenthesis battle
// that determines the fate of your code --
// will it work or give an error?!
function battleForCode(parensArr){
  // @TODO: add code here
}

// "TESTING"
sampleRuns = [
    { input: ["(", ")"], expected: 'tie' },     // valid code
    { input: [")", "("], expected: ')' },       // invalid code, ) wins
    { input: ["(", "(", ")"], expected:  '(' },
    { input: ["(", ")", ")"], expected: ')' }
];

sampleRuns.forEach(function(run){
  console.log('Battle! ', run.input);
  var actual = battleForCode(run.input);
  console.log('  expected:', run.expected);
  console.log('  actual:', actual);
  if (actual === run.expected){
    console.log('  Yay!');
  } else {
    console.log('  not working yet');
  }
});
