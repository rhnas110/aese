export const List = ({ className, text }) => {
  return <li className={className}>{text}</li>;
};

export const UnorderedList = ({ className, children }) => {
  return <ul className={className}>{children}</ul>;
};
