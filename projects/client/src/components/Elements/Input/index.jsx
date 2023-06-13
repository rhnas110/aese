import { Input } from "./Input";
import { Label } from "./Label";

export const InputForm = (props) => {
  const { className, name, label, placeholder, type } = props;
  return (
    <>
      <Label className={className.label} htmlFor={name} text={label}>
        {label}
      </Label>
      <Input
        className={className.input}
        placeholder={placeholder}
        type={type}
        id={name}
      />
    </>
  );
};

export { Input, Label };
