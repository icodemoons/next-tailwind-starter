import { useState } from "react";
import TextField from "ui/text-field";
export default function AutoCompleteField({ value, options, onChange = () => {} }) {
  const [query, setQuery] = useState("");

  return (
    <div className="flex-col justify-center">
      <TextField {...{ value: query, onChange: setQuery }} />
      {Boolean(query.length) && (
      <div className="absolute top-12">{options.map((option) => (
                <div key={option.value} onClick={() => onChange(option.value)} className="">
                    {option.label}
                </div>
      )}</div>)}
    </div>
  );
}
