import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBottomSheet, setCredentials } from "../../store/auth";
import { BottomSheetEnum } from "../../store/auth/types";
import Button from "../shared/Button";
import Auth from "./Auth";
import { StateType } from "../../store/types";

const IndexView: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const credentials = useSelector((state: StateType) => state.auth.credentials);

  const handleLogout = () => {
    dispatch(setCredentials(null));
  };

  return (
    <>
      <div className="grow flex flex-col justify-center space-y-12">
        <h1 className="text-center text-3xl text-yellow-400 text-pixel">
          Cats, Save the World
        </h1>
        <div className="flex flex-col items-center space-y-4">
          <Button
            primary
            onClick={() => {
              navigate("/new");
            }}
          >
            start game
          </Button>
          {credentials ? (
            <Button onClick={handleLogout}>log out</Button>
          ) : (
            <Button
              onClick={() => {
                dispatch(setBottomSheet(BottomSheetEnum.USERNAME));
              }}
            >
              sign in
            </Button>
          )}
        </div>
      </div>
      <Auth />
    </>
  );
};

export default IndexView;
