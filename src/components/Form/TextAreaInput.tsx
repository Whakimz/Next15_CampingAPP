import { Textarea } from "../ui/textarea";

const TextAreaInput = ({
  name,
  labelText,
  defaultValue,
  placeholder,
}: {
  name: string;
  labelText?: string;
  defaultValue?: string;
  placeholder?: string;
}) => {
  return (
    <div className="mb-2">
      <label htmlFor={name} className="capitalize text-md font-semibold">
        {labelText || name}
      </label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={5}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default TextAreaInput;
