import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBottomSheet } from "../../../../store/auth";
import { BottomSheetEnum } from "../../../../store/auth/types";
import BottomSheet from "../../../shared/BottomSheet";
import Button from "../../../shared/Button";
import { StateType } from "../../../../store/types";

const WelcomeBottomSheet: FC = () => {
  const dispatch = useDispatch();
  const username = useSelector((state: StateType) => state.auth.username);

  const handleClick = () => {
    dispatch(setBottomSheet(BottomSheetEnum.SIGN_UP));
  };

  return (
    <BottomSheet
      onClose={() => {
        dispatch(setBottomSheet(null));
      }}
    >
      <div className="flex flex-col space-y-4">
        <h2 className="text-pixel text-yellow-400 text-sm">
          welcome, <span className="normal-case">@{username}</span>!
        </h2>
        <div className="space-y-2">
          <p className="text-pixel text-white text-xs">
            looks like you are new here
          </p>
          <p className="text-pixel text-white text-xs">
            create a password to finish
          </p>
        </div>
        <div className="flex justify-end">
          <Button onClick={handleClick}>continue</Button>
        </div>
      </div>
    </BottomSheet>
  );
};

export default WelcomeBottomSheet;
