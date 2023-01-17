import { FC, useState } from "react";
import SignupForm from "./SignupForm";
import SigninForm from "./SigninForm";
import { ICredentials } from "../../store/auth/types";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../store/auth";
import { useNavigate } from "react-router-dom";

const AuthView: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState<boolean>(true);

  const handleAuth = (credentials: ICredentials) => {
    dispatch(setCredentials(credentials));
    navigate("/");
  };

  return (
    <div className="grow flex flex-col justify-center">
      {newUser ? (
        <SignupForm
          onAuth={handleAuth}
          onSwitch={() => {
            setNewUser(false);
          }}
        />
      ) : (
        <SigninForm
          onAuth={handleAuth}
          onSwitch={() => {
            setNewUser(true);
          }}
        />
      )}
    </div>
  );
};

export default AuthView;
