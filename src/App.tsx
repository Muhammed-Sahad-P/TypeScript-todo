function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6">
        To-Do List
      </h1>
      
      {/* Form to add new tasks */}
      <form className="w-full max-w-sm flex items-center mb-6">
        <input 
          className="appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          type="text" 
          placeholder="Add a new task" 
        />
        <button 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline" 
          type="submit">
          Add
        </button>
      </form>

      {/* Task list section */}
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-700">Sample Task 1</p>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline">
            Del
          </button>
        </div>

        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-700">Sample Task 2</p>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline">
            Del
          </button>
        </div>

        {/* You can add more tasks dynamically here */}
      </div>
    </div>
  );
}

export default App;
