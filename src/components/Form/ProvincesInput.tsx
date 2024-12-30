// import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { provinces } from "../../../utils/province";

const ProvincesInput = ({ defaultValue }: { defaultValue?: string }) => {
  const name = "Provinces";
  return (
    <div className="mb-2">
      <Label className="capitalize" htmlFor={name}>
        {name}
      </Label>
      <Select
        name={name}
        required
        defaultValue={defaultValue || provinces[0].PROVINCE_NAME}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {provinces.map((item) => {
            return (
              <SelectItem value={item.PROVINCE_NAME} key={item.PROVINCE_ID}>
                <span className="capitalize flex items-center gap-4 ">
                  {item.PROVINCE_NAME}
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default ProvincesInput;
