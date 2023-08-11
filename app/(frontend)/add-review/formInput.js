import React from "react";

const FormInput = ({
  id,
  type,
  placeholder,
  autoFocus,
  label,
  min,
  max,
  length,
  step,
  value,
  onInputChanged,
}) => {
  const handleInput = (event) => {
    const { value } = event.target;
    onInputChanged(id, value);
  };
  return (
    <div className="flex flex-col w-64 my-1">
      <label
        className="text-base text-slate-500 dark:text-slate-300 font-medium mb-1"
        htmlFor={id}
      >
        {`${label} :`}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoFocus={autoFocus}
        min={min}
        step={step}
        max={max}
        maxLength={length}
        className="border rounded border-gray-500 px-1 text-gray-800 bg-gray-200 outline-none"
        required
        value={value}
        onChange={handleInput}
      />
    </div>
  );
};

export default FormInput;
