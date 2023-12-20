// Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log sus valores.

const placesToTravel = [
  'Japon',
  'Venecia',
  'Murcia',
  'Santander',
  'Filipinas',
  'Madagascar'
]

function listPlaces(places) {
  for (const place of places) {
    console.log(place)
  }
}

listPlaces(placesToTravel)
