"use client"; // เนื่องจาก Select ต้องการ client-side rendering

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { provinces } from "../../../utils/province";
import { useState } from "react";

const ProvinceInput = ({ defaultValue }: { defaultValue?: string }) => {
  const name = "province";
  const [value, setValue] = useState(
    defaultValue || provinces[0].PROVINCE_NAME
  );

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {name}
      </Label>
      <Select
        value={value}
        onValueChange={(selectedValue) => {
          setValue(selectedValue);
          const input = document.getElementsByName(name)[0] as HTMLInputElement;
          if (input) {
            input.value = selectedValue;
          }
        }}
        required
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a province" />
        </SelectTrigger>
        <SelectContent>
          {provinces.map((item) => (
            <SelectItem key={item.PROVINCE_ID} value={item.PROVINCE_NAME}>
              <span className="capitalize flex items-center gap-4">
                {item.PROVINCE_NAME}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {/* Hidden input to ensure data is included in the form */}
      <input type="hidden" name={name} value={value} />
    </div>
  );
};

export default ProvinceInput;
