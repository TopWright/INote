import { useReducer, useState } from "react";

const useInput = (validate) => {
  const [input, setInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const validInput = validate(input); // input.trim !== ''
  const inValidInput = !validInput && isTouched;

  const inputChangeCtrl = (e) => {
    setInput(e.target.value);
  };

  const inputBlurCtrl = (e) => {
    setIsTouched(true);
  };

  const reset = () => {
    setInput("");
    setIsTouched(false);
  };

  return {
    value: input,
    validInput,
    inValidInput,
    inputChangeCtrl,
    inputBlurCtrl,
    reset,
  };
};

export default useInput;
