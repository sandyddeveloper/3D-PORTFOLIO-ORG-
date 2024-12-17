import React from "react";

import { SectionWrapper } from "../hoc";
import HireMeButton from "./HireButton";

const HireMe = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      <HireMeButton />
    </div>
  );
};

export default SectionWrapper(HireMe, "");
