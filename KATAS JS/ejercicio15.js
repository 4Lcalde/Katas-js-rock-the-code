// Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinrurón de Orión',
  'AC/DC Camiseta'
]

function mostrarIncluidas(param) {
  let final = []
  for (const product of param) {
    if (product.includes('Camiseta')) {
      final.push(product)
    }
  }
  return final
}

mostrarIncluidas(products)
let resultado = mostrarIncluidas(products)
console.log(resultado)
