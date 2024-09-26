type InputProps = {
    type: "text" | "checkbox" | "color";
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Input = ({ inputValue, setInputValue }: InputProps) => {
    return (
        <div>
            <input
                className="appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Add a new task"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
        </div>
    )
}

