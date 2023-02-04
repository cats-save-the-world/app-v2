import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verify } from "../../api";
import { setCredentials } from "../../store/auth";
import { setView } from "../../store/router";
import { ViewEnum } from "../../store/router/types";
import { StateType } from "../../store/types";
import AnimatedView from "../shared/AnimatedView";
import Button from "../shared/Button";
import Input from "../shared/Input";

const AuthLoginView: FC = () => {
  const dispatch = useDispatch();
  const username = useSelector((state: StateType) => state.auth.username);
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await verify(username, password);
    } catch {
      setError(true);
      return;
    }

    dispatch(setCredentials({ username, password }));
    dispatch(setView(ViewEnum.MAIN));
  };

  return (
    <AnimatedView className="grow flex flex-col justify-center">
      <form
        className="mx-auto max-w-[390px] w-[390px] px-4 flex flex-col space-y-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-pixel text-yellow-400 text-sm text-center">
          enter password
        </h1>
        <Input
          value={password}
          type="password"
          placeholder="password"
          onChange={handleChange}
          error={error}
        />
        <div className="flex justify-end">
          <Button>log in</Button>
        </div>
      </form>
    </AnimatedView>
  );
};

export default AuthLoginView;
