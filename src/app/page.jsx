import { prisma } from "@/libs/prisma";
import TaskCard from "@/components/TaskCard";


async function loadTasks() {
  return await prisma.task.findMany();
}

export const dynamic = 'force-dinamyc';


const HomePage = async () => {

  const tasks = await loadTasks();
  console.log(tasks);

  return (
    <section className="container mx-auto">
      <div>
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