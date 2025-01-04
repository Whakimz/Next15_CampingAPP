import { Button } from "../ui/button";

const EmptyList = ({
  heading = "No items",
  message = "Please Try Again",
  btnText = "back home",
}: {
  heading?: string;
  message?: string;
  btnText?: string;
}) => {
  return (
    <div>
      <h2>{heading}</h2>
      <p>{message}</p>
      <Button>{btnText}</Button>
    </div>
  );
};
export default EmptyList;
