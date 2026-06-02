import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  variants: any;
};

const MotionWrapper = ({
  children,
  variants,
}: Props) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;