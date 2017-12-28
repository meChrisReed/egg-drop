var floors = 100
var breaksAt = 99

var findFirstStep = (floors, stepSize = 1) =>
  floors > 0 ? findFirstStep(floors - stepSize, stepSize + 1) : stepSize - 1

var findBreak = (
  {
    initialStep = 1,
    breaksAt = 0,
    currentHeight = 0,
    firstEggBroke = false,
    secondEggBroke = false,
    steps = 0
  },
  pass = {
    initialStep,
    breaksAt,
    currentHeight,
    firstEggBroke,
    secondEggBroke,
    steps
  }
) => console.log(pass) || 
  ({
    [currentHeight < breaksAt]: () =>
      findBreak({
        ...pass,
        currentHeight: currentHeight + (initialStep - steps),
        steps: steps + 1,
      }),
    [!firstEggBroke && currentHeight >= breaksAt]: () =>
      findBreak({
        ...pass,
        currentHeight: currentHeight - (initialStep - steps),
        firstEggBroke: true,
      }),
    [firstEggBroke && currentHeight < breaksAt]: () =>
      findBreak({
        ...pass,
        currentHeight: currentHeight + 1,
        steps: steps + 1,
      }),
    [firstEggBroke && currentHeight >= breaksAt]: () => `
      Seccond egg broke at ${currentHeight},
      in ${steps} steps
      previous floor was ${currentHeight -1},
      the highest floor from which an egg can be dropped without breaking
    `
  }.true())

findBreak({
  initialStep: findFirstStep(floors),
  breaksAt
})
