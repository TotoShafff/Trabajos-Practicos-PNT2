fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(response => {
        if (!response.ok) {
            console.error('Error en la respuesta de la api');
        } else {
            return response.json();
        }
    })
    .then(data => {
        if (data && data.results) {
            const pokemonNombre = data.results.map(pokemon => pokemon.name);

            console.log('Primeros 10 Pokémon:');
            pokemonNombre.forEach((nombre, indice) => {
                console.log(`${indice + 1}. ${nombre}`);
            });
        } else {
            console.error('No se encontraron resultados en la API');
        }
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });


