let petOnSale = 'chinchilla'
let ordersArray = [
  ['rat', 2],
  ['chinchilla', 1],
  ['hamster', 2],
  ['chinchilla', 50]
]

// Write your code below:
enum Pet {
  Hamster = 'HAMSTER',
  Rat = 'RAT',
  Chinchilla = 'CHINCHILLA',
  Tarantula = 'TARANTULA'
}

let petOnSaleTS: Pet = Pet.Chinchilla

const ordersArrayTS = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50]
]
// This will not work because it has to be Pet.Hamster
// ordersArrayTS.push(['HAMSTER', 1])
