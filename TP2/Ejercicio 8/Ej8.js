const axios = require('axios');

async function mostrarClima(ciudad) {
    const apiKey = '69b9426ffce42e133fdaab603946f1c6';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

    try {
        const respuesta = await axios.get(url);
        const datos = respuesta.data;

        console.log(`Clima en ${datos.name}:`);
        console.log(`Temperatura: ${datos.main.temp} °C`);
        console.log(`Descripción: ${datos.weather[0].description}`);
        console.log(`Humedad: ${datos.main.humidity}%`);
        console.log(`Viento: ${datos.wind.speed} m/s`);
    } catch (error) {
        console.error('Error al obtener datos:', error.message);
    }
}

mostrarClima('Buenos Aires');

//No funciona