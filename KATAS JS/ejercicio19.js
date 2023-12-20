// Usa un bucle for para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función .includes() para comprobarlo. Puedes usar este array:

const toys = [
  { id: 5, name: 'Buzz MyYear' },
  { id: 11, name: 'Action Woman' },
  { id: 23, name: 'Barbie Man' },
  { id: 40, name: 'El gato con Guantes' },
  { id: 40, name: 'El gato felix' }
]

function mixedFor(param) {
  let nuevo = []
  for (let i = 0; i < param.length; i++) {
    if (param[i].name.includes('gato')) {
      continue
    } else {
      nuevo.push(param[i])
    }
  }
  return nuevo
}
let resultado = mixedFor(toys)
mixedFor(toys)
console.log(resultado)
