const Button = ({ className, children, gradient, flat, flatBlack, ...props }) => {

  const validateType = () => {
    if (gradient) {
      return "bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl text-white"
    }

    if (flat) {
      return 'bg-transparent hover:bg-white border border-white text-white hover:text-black'
    }

    if (flatBlack) {
      return 'bg-transparent hover:bg-black border border-black text-black hover:text-white'
    }

    return "bg-secondary text-white"
  }

  return (
    <button
      className={`${validateType()} transition-colors focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-xs xl:text-sm px-5 py-2.5 ${className} disabled:bg-gray-300`}
      {...props}
    >
      {children}
    </button>
  );
};



export default Button;

