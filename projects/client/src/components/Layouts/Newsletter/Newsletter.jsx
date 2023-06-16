import { Button } from "../../Elements/Button";
import { Heading } from "../../Elements/Heading";
import { Input } from "../../Elements/Input";
import { Paragraph } from "../../Elements/Paragraph";

export const Newsletter = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <Heading
            className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"
            text="Want tips & tricks to optimize your flow?"
            // size={3}
          />
          <Paragraph text="Sign up to our newsletter and stay up to date" />
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <Input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <Button
              className="bg-aese-900 rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3"
              text="Notify Me"
              type=""
            />
          </div>
          <Paragraph
            text={[
              "We care bout the protection of your data. Read our",
              <span className="text-aese-900 font-semibold" key="span">
                {" "}
                Privacy Policy.
              </span>,
            ]}
          />
        </div>
      </div>
    </div>
  );
};
