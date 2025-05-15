async function obtenerUsuarioPorId(id) {
    try {
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const usuario = await respuesta.json();

        console.log('Información del usuario:');
        console.log(`Nombre: ${usuario.name}`);
        console.log(`Username: ${usuario.username}`);
        console.log(`Email: ${usuario.email}`);
        console.log(`Teléfono: ${usuario.phone}`);
        console.log(`Sitio web: ${usuario.website}`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

obtenerUsuarioPorId(5);
