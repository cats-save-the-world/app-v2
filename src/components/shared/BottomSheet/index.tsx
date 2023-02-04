import { motion } from "framer-motion";
import { FC, MouseEvent } from "react";

interface IProps {
  children: JSX.Element | JSX.Element[];
  onClose?: () => void;
}

const BottomSheet: FC<IProps> = ({ children, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.8 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="fixed inset-0 bg-black"
    onClick={onClose}
  >
    <motion.div
      initial={{ y: 500 }}
      animate={{ y: 0 }}
      exit={{ y: 500 }}
      transition={{ duration: 0.3 }}
      className="absolute left-0 right-0 bottom-0"
    >
      <div className="mx-auto max-w-[390px] w-[390px] px-4">
        <div
          className="p-4 bg-white/20"
          onClick={(event: MouseEvent) => {
            event.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default BottomSheet;
