import { Cursor, useTypewriter } from "react-simple-typewriter";

import { Paragraph } from "../../Elements/Paragraph";
import { Heading } from "../../Elements/Heading";
import { Button } from "../../Elements/Button";

export const Hero = () => {
  const [text] = useTypewriter({
    words: ["Your aese", "Your taste"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 140,
  });
  return (
    // mt-[-96px]
    <div className="max-w-[840px] w-full h-screen mx-auto text-center flex flex-col justify-center">
      <Paragraph
        className="text-aese-900 font-bold p-2"
        text="Lorem ipsum dolor sit."
      />
      <Heading
        className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6"
        size={1}
        text="Grow with aese."
      />
      <div className="flex justify-center items-center">
        <Paragraph
          className="md:text-5xl sm:text-4xl text-xl font-bold py-4"
          text={[
            `Lorem, ipsum dolor sit ${text}`,
            <span className="text-aese-900" key={"span"}>
              <Cursor />
            </span>,
          ]}
        />
      </div>
      <Paragraph
        className="md:text-2xl text-xl font-bold text-gray-500"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non saepe
          iste deleniti."
      />
      <Button
        className="bg-aese-900 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white"
        text="Get Started"
        type=""
      />
    </div>
  );
};
