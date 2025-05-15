const axios = require('axios');

async function obtenerAlbumesDeUsuario(userId) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
        const albumes = response.data;

        console.log(`Álbumes del usuario con ID ${userId}:`);
        albumes.forEach((album, index) => {
            console.log(`${index + 1}. ${album.title}`);
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
}

obtenerAlbumesDeUsuario(1);

//Cambio del tipo de archivo por que no me corria con ts.
