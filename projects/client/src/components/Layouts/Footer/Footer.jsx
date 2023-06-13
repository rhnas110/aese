import { Heading } from "../../Elements/Heading";
import { Paragraph } from "../../Elements/Paragraph";
import { footer } from "../../../lib/footer";

export const Footer = () => {
  return (
    <footer className="max-w-[1240px] mx-auto py-16 px-4 text-gray-300">
      <div id="about">
        <Heading
          className="text-3xl font-bold text-gray-400 group"
          text="About aese"
          size={1}
        />
        <Paragraph
          className="mt-3 md:text-xl"
          text="
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus nisi
          saepe distinctio qui aperiam dolorem omnis asperiores inventore? Nulla
          sed cum rerum maxime laudantium totam nisi odit, dolorum voluptate
          assumenda quibusdam laborum ipsam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nam eveniet assumenda error animi nobis
          esse necessitatibus, nostrum molestiae laudantium, dolorum amet
          aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eligendi blanditiis!"
        />
      </div>
      <hr className="mt-20 mb-[4.5rem] h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <div className="grid md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-8">
          {footer.contact.map((contact, index) => {
            return (
              <div key={index}>
                <Heading
                  className="font-medium text-gray-400 md:text-3xl text-2xl"
                  text={contact.text}
                />
                <Paragraph text={contact.sub_text} className="text-lg mt-2" />
              </div>
            );
          })}
        </div>
        <div>
          <Heading
            className="font-medium text-gray-400 md:text-3xl text-2xl"
            text="Follow aese"
          />
          <div className="flex flex-wrap md:text-6xl md:gap-6 mt-2 text-4xl gap-3">
            {footer.follow.map((icon, index) => {
              return <span key={index}>{icon.icon}</span>;
            })}
          </div>
        </div>
        <div className="-order-1 md:order-none">
          <Heading
            className="font-medium text-gray-400 text-2xl treat"
            text="Treat aese coffee &#8594;"
          />
        </div>
      </div>
    </footer>
  );
};
