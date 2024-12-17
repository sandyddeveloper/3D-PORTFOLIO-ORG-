import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { approach } from "../constants";

const FeedbackCard = ({ index, title, description }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    {/* Title in purple color */}
    <h3 className="text-[#915EFF] font-bold text-[24px] mb-4">{title}</h3>
    <p className="text-secondary tracking-wider text-[16px]">{description}</p>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Process</p>
          <h2 className={styles.sectionHeadText}>Approach.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {approach.map((step, index) => (
          <FeedbackCard key={step.title} index={index} {...step} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
