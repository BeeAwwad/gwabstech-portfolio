const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-primary-200 hover:bg-primary-100 font-semibold py-2 px-4 border-b-4 border-primary-400 hover:border-primary-200 transition-all shadow-lg rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
