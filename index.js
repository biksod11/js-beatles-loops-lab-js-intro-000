// add solution here
function theBeatlesPlay(musicians, instruments){
  var Kobe = []

  for (let i = 0, l = musicians.length; i < l; i++){
    Kobe.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return Kobe
}
