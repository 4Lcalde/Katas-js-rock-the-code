// Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]

function calificador(peliculas) {
  const pequeña = []
  const mediana = []
  const grande = []
  for (const pelicula of peliculas) {
    if (pelicula.durationInMinutes < 100) {
      pequeña.push(pelicula.name)
    } else if (
      pelicula.durationInMinutes >= 100 &&
      pelicula.durationInMinutes < 200
    ) {
      mediana.push(pelicula.name)
    } else if (pelicula.durationInMinutes >= 200) {
      grande.push(pelicula.name)
    } else if (pequeña.length === 0) {
      pequeña.push('ninguna')
    }
    if (pequeña.length === 0) {
      pequeña.push('Ninguna')
    }

    if (mediana.length === 0) {
      mediana.push('Ninguna')
    }

    if (grande.length === 0) {
      grande.push('Ninguna')
    }
  }
  console.log('Peliculas pequeñas: ' + pequeña)
  console.log('Peliculas medianas: ' + mediana)
  console.log('Peliculas grandes:  ' + grande)

  return pequeña, mediana, grande
}

calificador(movies)
