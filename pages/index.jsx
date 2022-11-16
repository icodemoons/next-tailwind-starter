import { useRef, useState, useEffect } from "react";

export default function Home() {
  const [selected, setSelectedFrom] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  function TextField(value, label, focused, onChange = () => {}) {
    const ref = useRef();
    useEffect(() => {
      if (!focused) return;
      ref.current.focus;
    });
    return (
      <div>
        <label label={label} onClick={() => ref.current?.focus()}>
          {label}
        </label>
        <input
          className=" p-2 text-black"
          onChange={(e) => onChange(e.target.value)}
          ref={ref}
          type="text"
          value={value}
        />
      </div>
    );
  }

  return (
    <div className="mt-16 container mx-auto">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <TextField
          options={[
            {
              value: "Bon",
              label: "Beng",
            },
          ]}
          focused
          label="from"
          value={setFrom}
          onChange={setFrom}
        />
        <TextField focused label="to" value={setTo} onChange={setTo} />
      </div>
    </div>
  );
}
