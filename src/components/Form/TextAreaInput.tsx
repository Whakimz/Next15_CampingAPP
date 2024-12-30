import { Textarea } from "../ui/textarea";

const TextAreaInput = ({
  name,
  labelText,
  defaultValue,
}: {
  name: string;
  labelText?: string;
  defaultValue?: string;
}) => {
  return (
    <div className="mb-2">
      <label htmlFor={name} className="capitalize">
        {labelText || name}
      </label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={5}
        required
      />
    </div>
  );
};

export default TextAreaInput;
