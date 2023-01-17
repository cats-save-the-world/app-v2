import { forwardRef } from "react";
import classNames from "classnames";

interface IProps {
  type: "text" | "password";
  placeholder: string;
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, IProps>(({ type, placeholder, error }, ref) => {
  return (
    <input
      ref={ref}
      className={classNames(
        "text-white text-sm tracking-widest bg-neutral-900/75 rounded-none border-2 border-b-[6px] p-4 focus:outline-none focus:border-yellow-500 placeholder:text-neutral-400",
        {
          "border-neutral-500": !error,
          "border-red-500": error,
        }
      )}
      type={type}
      placeholder={placeholder}
      spellCheck={false}
    />
  );
});

export default Input;
