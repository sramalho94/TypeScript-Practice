function performDanceMove(
  moveName: string,
  moveReps: number,
  hasFlair: boolean
): void {
  console.log(`I do the ${moveName} ${moveReps} times !`)
  if (hasFlair) {
    console.log('I do it with flair!')
  }
}

let danceMoves: [string, number, boolean][] = [
  ['chicken beak', 4, false],
  ['wing flap', 4, false],
  ['tail feather shake', 4, false],
  ['clap', 4, false],
  ['chicken beak', 4, true],
  ['wing flap', 4, true],
  ['tail feather shake', 4, true],
  ['clap', 4, true]
]
for (let i = 0; i < danceMoves.length; i++) {
  performDanceMove(danceMoves[i][0], danceMoves[i][1], danceMoves[i][2])
}
