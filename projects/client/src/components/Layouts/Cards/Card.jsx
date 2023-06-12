import { Button } from "../../Elements/Button";
import { Heading } from "../../Elements/Heading";
import { Paragraph } from "../../Elements/Paragraph";

export const Card = ({ imgSrc, className }) => {
  return (
    <div className={className.box}>
      <img className={className.img} src={imgSrc} alt="/" />
      <Heading
        className="text-2xl font-bold text-center py-8"
        size={2}
        text="Single User"
      />
      <Paragraph className="text-center text-4xl font-bold" text="$149" />
      <div className="text-center font-medium">
        <Paragraph className="py-2 border-b mx-8 mt-8" text="500 GB Storage" />
        <Paragraph className="py-2 border-b mx-8" text="1 Granted User" />
        <Paragraph className="py-2 border-b mx-8" text="Send up to 2 GB" />
      </div>
      <Button className={className.button} text="Start Trial" />
    </div>
  );
};
