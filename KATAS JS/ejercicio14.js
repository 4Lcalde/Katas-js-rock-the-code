//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]

function repeatCounter(words) {
  const wordFrequency = {}
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (wordFrequency[word]) {
      wordFrequency[word]++
    } else {
      wordFrequency[word] = 1
    }
  }

  return wordFrequency
}

const resultado = repeatCounter(counterWords)
console.log(resultado)
