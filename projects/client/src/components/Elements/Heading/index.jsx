export const Heading = ({ className, text, size }) => {
  if (size === 1) {
    return <h1 className={className}>{text}</h1>;
  } else if (size === 2) {
    return <h2 className={className}>{text}</h2>;
  } else if (size === 3) {
    return <h3 className={className}>{text}</h3>;
  } else if (size === 4) {
    return <h4 className={className}>{text}</h4>;
  } else if (size === 5) {
    return <h5 className={className}>{text}</h5>;
  } else {
    return <h6 className={className}>{text}</h6>;
  }
};
