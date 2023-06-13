export const Button = ({ type, className, text, ...props }) => {
  return (
    <button type={type} className={className} {...props}>
      {text}
    </button>
  );
};
