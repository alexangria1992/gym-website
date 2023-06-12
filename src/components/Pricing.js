import React from "react";

import { pricing } from "../data";

import PlanList from "./PlanList";

const Pricing = () => {
  const { icon, title, plans } = pricing;

  return (
    <section className="border-2 border-blue-400  section">
      <div
        className="section-title-group border-2 border-red-400 max-w-[540px] mx-auto
      lg:px-0"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="200"
      >
        <img src={icon} alt="" />
        <h2 className="h2">
          {title} <span className="text-primary-200">.</span>
        </h2>
      </div>
      {/* Plan list */}
      <PlanList plans={plans} />
    </section>
  );
};

export default Pricing;
