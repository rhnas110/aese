export const Label = ({ className, htmlFor, text, ...restProps }) => {
  return (
    <label className={className} htmlFor={htmlFor} {...restProps}>
      {text}
    </label>
  );
};
