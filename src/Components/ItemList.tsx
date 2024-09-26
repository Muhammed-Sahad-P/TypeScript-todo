import { ReactSetState, Task } from '../Types/utils'
import { Button } from './Button'

type ItemListProps = {
    tasks: Task[]
    setTasks: ReactSetState<Task[]>
}

export const ItemList = ({ tasks, setTasks }: ItemListProps) => {
    const handleDelete = (id: string) => {
        setTasks((prev) => prev.filter((data) => data.id !== id));
    }
    return (
        tasks.length > 0 ? (
            tasks.map((task) => (
                <div key={task.id} className="flex justify-between items-center mb-4">
                    <p className="text-gray-700">{task.title}</p>
                    <Button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => handleDelete(task.id)}
                    >
                        Del
                    </Button>
                </div>
            ))
        ) : (
            <p className="text-gray-500">No tasks added yet</p>
        )
    )
}

