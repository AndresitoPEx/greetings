import TaskCard from "@/components/TaskCard";


async function loadTasks() {
  return await fetch('http://localhost:3000/api/tasks')
    .then(response => response.json())


}


const HomePage = async () => {

  const tasks = await loadTasks();
  console.log(tasks);

  return (
    <section className="container mx-auto">
      <div>
        <h1 className="text-white">Enviale un mensaje a tu mascota</h1>

        <div className="text-white grid grid-cols-3 gap-3 mt-10" >
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomePage;