import { motion } from "framer-motion";
import { FC } from "react";

interface IProps {
  score: number;
}

const GameResults: FC<IProps> = ({ score }) => (
  <motion.div
    className="flex flex-col items-center"
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1 }}
  >
    <span className="text-white text-sm">Score: {score}</span>
  </motion.div>
);

export default GameResults;
