const Label = ({ children, className, ...props }) => (
  <h4
    className={`font-urbanist font-bold text-base md:text-4xl w-max mb-5 ${className}`}
    {...props}
  >
    {children}
    <div className="h-[3px] bg-secondary w-11/12 rounded-sm mt-2" />
  </h4>
);

export default Label;

