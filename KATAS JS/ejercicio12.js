// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]

function removeDuplicates(array) {
  const unicos = []

  for (elemento of array) {
    if (!unicos.includes(elemento)) {
      unicos.push(elemento)
    }
  }

  return unicos
}

const resultado = removeDuplicates(duplicates)
console.log(resultado)
