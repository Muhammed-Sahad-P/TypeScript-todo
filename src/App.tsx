import { useState } from "react";
import { Input } from "./Components/Input";
import { Button } from "./Components/Button";
import { type Task } from "./Types/utils";
import { ItemList } from "./Components/ItemList";


function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setTasks((prev) => [...prev, { title: inputValue, id: Date.now().toString() }]);
    setInputValue("");
  };

 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6">To-Do List</h1>

      {/* Form to add new tasks */}
      <form onSubmit={handleSubmit} className="w-full max-w-sm flex items-center mb-6">
        <Input type="text" inputValue={inputValue} setInputValue={setInputValue} />
        <Button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline">Add</Button>
      </form>

      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-4">
      <ItemList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
