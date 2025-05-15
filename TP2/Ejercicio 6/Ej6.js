async function mostrarComentariosDelPost(postId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        const comentarios = await response.json();

        console.log(`Comentarios del post con ID ${postId}:`);
        comentarios.forEach((comentario, index) => {
            console.log(`${index + 1}) ${comentario.name} (${comentario.email}):`);
            console.log(`${comentario.body}`);
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
}

mostrarComentariosDelPost(2);
