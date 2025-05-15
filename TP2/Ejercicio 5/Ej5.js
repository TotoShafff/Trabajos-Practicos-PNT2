const axios = require('axios');

async function eliminarTodo(id) {
    try {
        const respuesta = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        console.log(`To-Do con ID ${id} eliminado`);
        console.log('Codigo de respuesta:', respuesta.status);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

eliminarTodo(1);
