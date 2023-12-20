// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

function sustitucion(param1, param2) {
  let nuevo = []
  for (let i = 0; i < param1.length; i++) {
    if (param1[i].isVegan === false) {
      param1[i].name = param2[i]
      param1[i].isVegan = true
    }
  }
  return param1
}

sustitucion(foodSchedule, fruits)
let resultado = sustitucion(foodSchedule, fruits)
console.log(sustitucion(foodSchedule))
