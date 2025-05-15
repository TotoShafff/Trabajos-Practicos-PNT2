async function obtenerTareasPendientes(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    const tareas = await response.json();

    const pendientes = tareas.filter(tarea => tarea.completed === false);

    console.log(`Tareas pendientes del usuario ${userId}:`);
    pendientes.forEach((tarea, index) => {
      console.log(`${index + 1}. ${tarea.title}`);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

obtenerTareasPendientes(3);
