import Tilt from "react-parallax-tilt";

export const Auth = ({ authSrc, authAlt, children }) => {
  return (
    <>
      <img
        className="absolute w-full h-full object-cover -z-10 brightness-[.69]"
        src={authSrc}
        alt={authAlt}
        loading="lazy"
      />
      <div className="flex justify-center items-center h-full">
        <Tilt className="max-w-[380px] w-full mx-auto">{children}</Tilt>
      </div>
    </>
  );
};
