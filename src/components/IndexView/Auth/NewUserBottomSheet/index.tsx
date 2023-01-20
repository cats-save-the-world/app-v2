import { FC } from "react";
import { useDispatch } from "react-redux";
import { setBottomSheet } from "../../../../store/auth";
import { BottomSheetEnum } from "../../../../store/auth/types";
import BottomSheet from "../../../shared/BottomSheet";
import Button from "../../../shared/Button";

const NewUserBottomSheet: FC = () => {
  const dispatch = useDispatch();

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
        <h2 className={"text-pixel text-yellow-400 text-sm"}>
          welcome, newbie!
        </h2>
        <div className="flex justify-end">
          <Button onClick={handleClick}>continue</Button>
        </div>
      </div>
    </BottomSheet>
  );
};

export default NewUserBottomSheet;
