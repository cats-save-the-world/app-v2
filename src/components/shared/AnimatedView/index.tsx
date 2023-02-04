import { motion } from "framer-motion";
import { FC } from "react";

interface IProps {
  children: JSX.Element[] | JSX.Element | boolean;
  className: string;
}

const AnimatedView: FC<IProps> = ({ children, className }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className={className}
  >
    {children}
  </motion.div>
);

export default AnimatedView;
