//  Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false.

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
const find = 'Marc'
function finderName(param, param2) {
  let bol = true
  for (let i = 0; i < param.length; i++)
    if (param[i].includes(param2)) {
      bol = true
    } else {
      bol = false
    }
  return bol
}

finderName(nameFinder, find)
let resultado = finderName(nameFinder, find)
console.log(resultado)
