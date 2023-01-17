import { FC, FormEvent, useEffect, useRef } from "react";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import { ICredentials } from "../../../store/auth/types";
import { verify } from "../../../api";

interface IProps {
  onAuth: (credentials: ICredentials) => void;
  onSwitch: () => void;
}

const SigninForm: FC<IProps> = ({ onAuth, onSwitch }) => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!usernameRef.current || !passwordRef.current) return;

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    try {
      await verify(username, password);
      onAuth({ username, password });
    } catch {}
  };

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-4">
        <Input ref={usernameRef} type="text" placeholder="username" />
        <Input ref={passwordRef} type="password" placeholder="password" />
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Button primary>sign in</Button>
        <Button onClick={onSwitch}>create account</Button>
      </div>
    </form>
  );
};

export default SigninForm;
