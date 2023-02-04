import { userExists } from "../../api";
import { setUsername } from "../../store/auth";
import { setView } from "../../store/router";
import { ViewEnum } from "../../store/router/types";
import { StateType } from "../../store/types";
import AnimatedView from "../shared/AnimatedView";
import Button from "../shared/Button";
import Input from "../shared/Input";
import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AuthUsernameView: FC = () => {
  const dispatch = useDispatch();
  const username = useSelector((state: StateType) => state.auth.username);
  const credentials = useSelector((state: StateType) => state.auth.credentials);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (credentials) {
      dispatch(setView(ViewEnum.MAIN));
    }
  }, [credentials]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError(false);
    dispatch(setUsername(event.target.value));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      if (await userExists(username)) {
        dispatch(setView(ViewEnum.AUTH_LOGIN));
      } else {
        dispatch(setView(ViewEnum.AUTH_REGISTER));
      }
    } catch {
      setError(true);
    }
  };

  return (
    <AnimatedView className="grow flex flex-col justify-center">
      <form
        className="mx-auto max-w-[390px] w-[390px] px-4 flex flex-col space-y-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-pixel text-yellow-400 text-sm text-center">
          enter username
        </h1>
        <Input
          value={username}
          type="text"
          placeholder="username"
          onChange={handleChange}
          error={error}
        />
        <div className="flex justify-end">
          <Button>continue</Button>
        </div>
      </form>
    </AnimatedView>
  );
};

export default AuthUsernameView;
