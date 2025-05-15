async function eliminarFoto(id) {
    try {
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
            method: 'DELETE',
        });

        if (respuesta.ok) {
            console.log(`Foto con ID ${id} eliminada, codigo: ${respuesta.status}`);
        } else {
            console.log(`No se pudo eliminar, codigo: ${respuesta.status}`);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

eliminarFoto(1);
