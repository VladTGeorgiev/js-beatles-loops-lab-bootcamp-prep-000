// add solution here
function theBeatlesPlay(musicians, instruments) {
  const foo = []
  for (var i = 0, l = musicians.length; i < l; i++) {
    foo.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return foo
}

function johnLennonFacts (facts) {
  var checkedFacts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];
  var checkedFacts = [];
  var i = 0;
  while (i < checkedFacts.length) {
    checkedFacts.push(`${checkedFacts[i]}!!!`);
    i++;
  }
  return checkedFacts
}
