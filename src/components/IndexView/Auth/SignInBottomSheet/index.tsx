import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verify } from "../../../../api";
import { setBottomSheet } from "../../../../store/auth";
import { StateType } from "../../../../store/types";
import BottomSheet from "../../../shared/BottomSheet";
import Button from "../../../shared/Button";
import Input from "../../../shared/Input";
import { ICredentials } from "../../../../store/auth/types";

interface IProps {
  onAuth: (credentials: ICredentials) => void;
}

const SignInBottomSheet: FC<IProps> = ({ onAuth }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState<boolean>(false);
  const username = useSelector((state: StateType) => state.auth.username);
  const [password, setPassword] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await verify(username, password);
    } catch {
      return setError(true);
    }

    onAuth({ username, password });
    dispatch(setBottomSheet(null));
  };

  return (
    <BottomSheet
      onClose={() => {
        dispatch(setBottomSheet(null));
      }}
    >
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-pixel text-yellow-400 text-sm">enter password</h2>
        <Input
          value={password}
          type="password"
          placeholder="password"
          onChange={handleChange}
          error={error}
        />
        <div className="flex justify-end">
          <Button>sign in</Button>
        </div>
      </form>
    </BottomSheet>
  );
};

export default SignInBottomSheet;
