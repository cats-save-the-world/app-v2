import { FC } from "react";
import Button from "../../shared/Button";
import { useNavigate } from "react-router-dom";

const Menu: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center space-y-4">
      <Button
        onClick={() => {
          navigate("/auth");
        }}
        primary
      >
        start game
      </Button>
    </div>
  );
};

export default Menu;
