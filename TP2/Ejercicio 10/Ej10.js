function obtenerArticulos() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          reject('Error en la API');
        } else {
          return response.json();
        }
      })
      .then(data => {
        console.log('Articulos obtenidos:');
        data.forEach((articulo, index) => {
          console.log(`${index + 1}. ${articulo.title}`);
        });
        resolve(data);
      })
      .catch(error => reject(error));
  });
}

obtenerArticulos()
  .then(() => console.log('Fin'))
  .catch(error => console.error('Error:', error));
