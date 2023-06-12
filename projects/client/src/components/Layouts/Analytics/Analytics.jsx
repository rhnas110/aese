import { Button } from "../../Elements/Button";
import { Heading } from "../../Elements/Heading";
import { Paragraph } from "../../Elements/Paragraph";
import aese512 from "../../../assets/img/aese512.png";

export const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4 text-black">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[350px]  mx-auto my-4" src={aese512} alt="aese" />
        <div className="flex flex-col justify-center">
          <Paragraph
            className="text-aese font-bold"
            text="Lorem, ipsum dolor."
          />
          <Heading
            className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"
            text="Lorem ipsum dolor sit."
            // size={3}
          />
          <Paragraph
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?"
          />
          <Button
            className="bg-black text-white w-[200px] rounded-md font-semibold my-6 mx-auto md:mx-0 py-3"
            text="Get Started"
            type=""
          />
        </div>
      </div>
    </div>
  );
};
