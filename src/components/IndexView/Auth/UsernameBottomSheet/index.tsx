import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userExists } from "../../../../api";
import { setBottomSheet, setUsername } from "../../../../store/auth";
import { StateType } from "../../../../store/types";
import BottomSheet from "../../../shared/BottomSheet";
import Button from "../../../shared/Button";
import Input from "../../../shared/Input";
import { BottomSheetEnum } from "../../../../store/auth/types";

const UsernameBottomSheet: FC = () => {
  const dispatch = useDispatch();
  const username = useSelector((state: StateType) => state.auth.username);
  const [error, setError] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError(false);
    dispatch(setUsername(event.target.value));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      if (await userExists(username)) {
        dispatch(setBottomSheet(BottomSheetEnum.SIGN_IN));
      } else {
        dispatch(setBottomSheet(BottomSheetEnum.NEW_USER));
      }
    } catch {
      setError(true);
    }
  };

  return (
    <BottomSheet
      onClose={() => {
        dispatch(setBottomSheet(null));
      }}
    >
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-pixel text-yellow-400 text-sm">enter username</h2>
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
    </BottomSheet>
  );
};

export default UsernameBottomSheet;
