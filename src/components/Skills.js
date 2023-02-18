import React, { useEffect, useContext } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import { ProviderContext } from '../context/ProviderContext';

export const Skills = () => {
  const {setOpenMenu} =  useContext(ProviderContext);

  useEffect(() => {
    setOpenMenu(false);
    AOS.init();
  }, []);

  return (
    <section className="section-servicios row">
      <div className="left">
        <div className="card col" data-aos-duration="1500" data-aos="zoom-in">
          <div
            className="img"
            style={{ backgroundImage: `url(/images/proyecto1.png)` }}
          ></div>
          <div className="text">Website Design</div>
        </div>
        <div className="card col" data-aos-duration="1500" data-aos="zoom-in">
          <div
            className="img"
            style={{ backgroundImage: `url(/images/proyecto1.png)` }}
          ></div>
          <div className="text">Website Design</div>
        </div>
        <div className="card col" data-aos-duration="1500" data-aos="zoom-in">
          <div
            className="img"
            style={{ backgroundImage: `url(/images/proyecto1.png)` }}
          ></div>
          <div className="text">Website Design</div>
        </div>
        <div className="card col" data-aos-duration="1500" data-aos="zoom-in">
          <div
            className="img"
            style={{ backgroundImage: `url(/images/proyecto1.png)` }}
          ></div>
          <div className="text">Website Design</div>
        </div>
        <div className="card col" data-aos-duration="1500" data-aos="zoom-in">
          <div
            className="img"
            style={{ backgroundImage: `url(/images/proyecto1.png)` }}
          ></div>
          <div className="text">Website Design</div>
        </div>
        <div className="card col" data-aos-duration="1500" data-aos="zoom-in">
          <div
            className="img"
            style={{ backgroundImage: `url(/images/proyecto1.png)` }}
          ></div>
          <div className="text">Website Design</div>
        </div>
      </div>

      <div className="right">
        <CountUp start={0} end={100}>
          {({ countUpRef }) => (
            <div
              className="circle col case1"
              data-aos-duration="500"
              data-aos="zoom-in"
            >
              <div className="row">
                <span ref={countUpRef} />%
              </div>
              <span className="text">html</span>
            </div>
          )}
        </CountUp>
        <CountUp start={0} end={100} delay={0}>
          {({ countUpRef }) => (
            <div
              className="circle col case2"
              data-aos-duration="500"
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className="row">
                <span ref={countUpRef} />%
              </div>
              <span className="text">less/css</span>
            </div>
          )}
        </CountUp>
        <CountUp start={0} end={100} delay={0}>
          {({ countUpRef }) => (
            <div
              className="circle col case3"
              data-aos-duration="500"
              data-aos-delay="400"
              data-aos="zoom-in"
            >
              <div className="row">
                <span ref={countUpRef} />%
              </div>
              <span className="text">php</span>
            </div>
          )}
        </CountUp>
        <CountUp start={0} end={100} delay={0}>
          {({ countUpRef }) => (
            <div
              className="circle col case4"
              data-aos-duration="500"
              data-aos-delay="600"
              data-aos="zoom-in"
            >
              <div className="row">
                <span ref={countUpRef} />%
              </div>
              <span className="text">javascript</span>
            </div>
          )}
        </CountUp>
        <CountUp start={0} end={100} delay={0}>
          {({ countUpRef }) => (
            <div
              className="circle col case5"
              data-aos-duration="500"
              data-aos-delay="800"
              data-aos="zoom-in"
            >
              <div className="row">
                <span ref={countUpRef} />%
              </div>
              <span className="text">react</span>
            </div>
          )}
        </CountUp>
      </div>
    </section>
  );
};
