// add solution here
function theBeatlesPlay(musicians, instruments) {
  const foo = []
  for (var i = 0, l = musicians.length; i < l; i++) {
    foo.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return foo
}

function johnLennonFacts (facts)
{
  var checkedFacts = [];
  var i = 0;
  while (i < checkedFacts.length) {
    checkedFacts.push(`${checkedFacts[i]}!!!`);
    i++;
  }
  return checkedFacts
}
