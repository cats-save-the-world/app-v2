import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../api";
import { setCredentials } from "../../store/auth";
import { setView } from "../../store/router";
import { ViewEnum } from "../../store/router/types";
import { StateType } from "../../store/types";
import AnimatedView from "../shared/AnimatedView";
import Button from "../shared/Button";
import Input from "../shared/Input";

const AuthRegisterView: FC = () => {
  const dispatch = useDispatch();
  const username = useSelector((state: StateType) => state.auth.username);
  const [password, setPassword] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await createUser(username, password);
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
        />
        <div className="flex justify-end">
          <Button>create account</Button>
        </div>
      </form>
    </AnimatedView>
  );
};

export default AuthRegisterView;
