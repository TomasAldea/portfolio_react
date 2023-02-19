import React, { useEffect, useContext,useState } from "react";
import { ProviderContext } from '../context/ProviderContext';
import ProgressBar from "@ramonak/react-progress-bar";
import CountUp from "react-countup";

export const Skills = () => {
  const {setOpenMenu} =  useContext(ProviderContext);

  useEffect(() => {
    setOpenMenu(false);
  }, []);

  return (
    <section className="section-skills col">
      <div className="sub-section">
      

      <ProgressBar
          completed={50}
          maxCompleted={100}
          baseBgColor="grey"
          customLabel={<CountUp end={100} suffix="%"/>}
          bgColor="rgb(132, 201, 183)"
          isLabelVisible={true}
          animateOnRender={true}
          transitionDuration="2s"
        ></ProgressBar>

        <span>Front-end</span>
        <div className="tecnology">
          <span className="title-tecnology"></span>
          <div className="bar"></div>
        </div>
      </div>
      <div className="sub-section">
        <span>Back-end</span>
        <div className="tecnology">
          <span className="title-tecnology"></span>
          <div className="bar"></div>
        </div>
      </div>
      <div className="sub-section">
        <span>Others-end</span>
        <div className="tecnology">
          <span className="title-tecnology"></span>
          <div className="bar"></div>
        </div>
      </div>
    </section>
  );
};
