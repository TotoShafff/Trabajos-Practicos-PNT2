const axios = require('axios');

axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log('Post eliminado correctamente:');
        console.log('Respuesta:', response.status);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

    //Preguntar a la profe, por que tuve que usar "require" e instalar por terminal un paquete de node para que no tire error ya que uso ts como un termo si es que esta bien.