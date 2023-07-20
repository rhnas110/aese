export const SkeletonCirle = ({ width = "w-12", height = "h-12" }) => {
  return (
    <div
      className={`${width} bg-gray-300 ${height} rounded-full animate-pulse`}
    ></div>
  );
};

export const SkeletonHorizontal = ({ width = "w-full", height = "h-6" }) => {
  return (
    <div
      className={`${width} bg-gray-300 ${height} rounded-md animate-pulse`}
    ></div>
  );
};
