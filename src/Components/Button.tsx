type ButtonProps = {
  children: JSX.Element | string;
  className?: string;
  onClick?: () => void;
}
export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button type="submit" className={`bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className} `} onClick={onClick}>{children}</button>
  )
}
