export const Label = ({ className, htmlFor, text, ...props }) => {
  return (
    <label className={className} htmlFor={htmlFor} {...props}>
      {text}
    </label>
  );
};
