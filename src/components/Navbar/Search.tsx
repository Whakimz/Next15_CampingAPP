"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const searchParam = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(
    searchParam.get("search")?.toString() || ""
  );

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParam);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`/?${params.toString()}`);
  }, 500);

  useEffect(() => {
    if (!searchParam.get("search")) {
      setSearch("");
    }
  }, [searchParam.get("search")]);
  return (
    <Input
      type="text"
      placeholder="ค้นหา..."
      className="max-w-xs"
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
      value={search}
    />
  );
};

export default Search;
