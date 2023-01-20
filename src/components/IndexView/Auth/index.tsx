import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BottomSheetEnum, ICredentials } from "../../../store/auth/types";
import { StateType } from "../../../store/types";
import NewUserBottomSheet from "./NewUserBottomSheet";
import SignInBottomSheet from "./SignInBottomSheet";
import UsernameBottomSheet from "./UsernameBottomSheet";
import SignUpBottomSheet from "./SignUpBottomSheet";
import { setCredentials } from "../../../store/auth";

const Auth: FC = () => {
  const dispatch = useDispatch();
  const bottomSheet = useSelector((state: StateType) => state.auth.bottomSheet);

  const handleAuth = (credentials: ICredentials) => {
    dispatch(setCredentials(credentials));
  };

  return (
    <>
      <AnimatePresence>
        {bottomSheet === BottomSheetEnum.USERNAME && (
          <UsernameBottomSheet key={BottomSheetEnum.USERNAME} />
        )}
        {bottomSheet === BottomSheetEnum.NEW_USER && (
          <NewUserBottomSheet key={BottomSheetEnum.NEW_USER} />
        )}
        {bottomSheet === BottomSheetEnum.SIGN_IN && (
          <SignInBottomSheet
            key={BottomSheetEnum.SIGN_IN}
            onAuth={handleAuth}
          />
        )}
        {bottomSheet === BottomSheetEnum.SIGN_UP && (
          <SignUpBottomSheet
            key={BottomSheetEnum.SIGN_UP}
            onAuth={handleAuth}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Auth;
