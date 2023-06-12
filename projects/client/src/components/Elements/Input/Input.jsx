export const Input = ({ className, type, placeholder, ...props }) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  );
};
