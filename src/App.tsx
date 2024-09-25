import { useState } from "react";

type Task = {
  title: string;
  id: string;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setTasks((prev) => [...prev, { title: inputValue, id: Date.now().toString() }]);
    setInputValue("");
  };

  const handleDelete = (id: string) => {
    setTasks((prev) => prev.filter((data) => data.id !== id));
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6">To-Do List</h1>

      {/* Form to add new tasks */}
      <form onSubmit={handleSubmit} className="w-full max-w-sm flex items-center mb-6">
        <input
          className="appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Add a new task"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add
        </button>
      </form>

      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-4">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task.id} className="flex justify-between items-center mb-4">
              <p className="text-gray-700">{task.title}</p>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                onClick={() => handleDelete(task.id)}
              >
                Del
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No tasks added yet</p>
        )}
      </div>
    </div>
  );
}

export default App;
