import classNames from "classnames";
import { ChangeEvent, FC } from "react";

interface IProps {
  value: string;
  type: "text" | "password";
  placeholder: string;
  error?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IProps> = ({ value, type, placeholder, error, onChange }) => {
  return (
    <input
      className={classNames(
        "text-white text-sm tracking-widest bg-neutral-900/75 rounded-none border-2 border-b-[6px] p-4 focus:outline-none placeholder:text-neutral-400",
        {
          "border-neutral-500 focus:border-yellow-500": !error,
          "border-red-500": error,
        }
      )}
      value={value}
      type={type}
      placeholder={placeholder}
      spellCheck={false}
      onChange={onChange}
    />
  );
};

export default Input;
