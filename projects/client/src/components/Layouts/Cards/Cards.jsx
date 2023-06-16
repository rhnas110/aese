import single from "../../../assets/img/single.png";
import { Card } from "./Card";

const cards = [
  {
    id: 1,
    image: single,
    className: {
      box: "w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300",
      img: "w-20 mx-auto mt-[-3rem] bg-white",
      button:
        "bg-aese-900 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3",
    },
  },
  {
    id: 2,
    image: single,
    className: {
      box: "w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 relative",
      img: "w-20 mx-auto mt-[-3rem] bg-transparent absolute top-[8px] left-0 right-0",
      button:
        "bg-black text-white w-[200px] rounded-md font-semibold my-6 mx-auto px-6 py-3",
    },
  },
  {
    id: 3,
    image: single,
    className: {
      box: "w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300",
      img: "w-20 mx-auto mt-[-3rem] bg-white",
      button:
        "bg-aese-900 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3",
    },
  },
];

export const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white text-black">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {cards.map((item) => {
          return (
            <Card
              className={item.className}
              imgSrc={item.image}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};
