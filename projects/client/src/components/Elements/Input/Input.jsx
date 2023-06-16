export const Input = ({ className, type, placeholder, ...restProps }) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      {...restProps}
    />
  );
};
