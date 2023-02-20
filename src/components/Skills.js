import React, { useEffect, useContext, useState } from "react";
import { ProviderContext } from '../context/ProviderContext';
import ProgressBar from "@ramonak/react-progress-bar";
import CountUp from "react-countup";

export const Skills = () => {
  const { setOpenMenu } = useContext(ProviderContext);

  // TODO en caso de reload page, las progressbar inician antes de tiempo
  useEffect(() => {
    setOpenMenu(false);
  }, []);

  return (
    <section className="section-skills col">
      <div className="row">
        <div className="sub-section frontend">
          <span className="title"  data-aos-duration="1500" data-aos="zoom-in">Front-end</span>
          <div className="tecnology">
            <div className="col">
              <span className="title-tecnology"><img src="/icons/react.svg"></img><span>- ReactJS</span></span>
              <ProgressBar
                completed={50}
                maxCompleted={100}
                 height="15px"
                baseBgColor="grey"
                customLabel={<CountUp end={50} suffix="%" />}
                bgColor="#1f7a8cff"
                isLabelVisible={true}
                animateOnRender={true}
                transitionDuration="2s"
              ></ProgressBar>
            </div>
            <div className="col">
              <span className="title-tecnology"><img src="/icons/less.svg"></img><span>- CSS/LESS</span></span>
              <ProgressBar
                completed={75}
                maxCompleted={100}
                 height="15px"
                baseBgColor="grey"
                customLabel={<CountUp end={75} suffix="%" />}
                bgColor="#1f7a8cff"
                isLabelVisible={true}
                animateOnRender={true}
                transitionDuration="2s"
              ></ProgressBar>
            </div>
            <div className="col">
              <span className="title-tecnology"><img src="/icons/html.svg"></img><span>- HTML</span></span>
              <ProgressBar
                completed={65}
                maxCompleted={100}
                 height="15px"
                baseBgColor="grey"
                customLabel={<CountUp end={65} suffix="%" />}
                bgColor="#1f7a8cff"
                isLabelVisible={true}
                animateOnRender={true}
                transitionDuration="2s"
              ></ProgressBar>
            </div>
            <div className="col">
              <span className="title-tecnology"><img src="/icons/jquery.svg"></img><span>- Jquery</span></span>
              <ProgressBar
                completed={85}
                maxCompleted={100}
                 height="15px"
                baseBgColor="grey"
                customLabel={<CountUp end={85} suffix="%" />}
                bgColor="#1f7a8cff"
                isLabelVisible={true}
                animateOnRender={true}
                transitionDuration="2s"
              ></ProgressBar>
            </div>
            <div className="col">
              <span className="title-tecnology"><img src="/icons/js.svg"></img><span>- JavaScript</span></span>
              <ProgressBar
                completed={80}
                maxCompleted={100}
                 height="15px"
                baseBgColor="grey"
                customLabel={<CountUp end={80} suffix="%" />}
                bgColor="#1f7a8cff"
                isLabelVisible={true}
                animateOnRender={true}
                transitionDuration="2s"
              ></ProgressBar>
            </div>
          </div>
        </div>
        <div className="sub-section backend minheight">
          <span className="title"  data-aos-duration="1500" data-aos="zoom-in">Back-end</span>
          <div className="tecnology">
            <div className="col">
              <span className="title-tecnology"><img src="/icons/php.svg"></img><span>- PHP</span></span>
              <ProgressBar
                completed={70}
                maxCompleted={100}
                 height="15px"
                baseBgColor="grey"
                customLabel={<CountUp end={70} suffix="%" />}
                bgColor="#1f7a8cff"
                isLabelVisible={true}
                animateOnRender={true}
                transitionDuration="2s"
              ></ProgressBar>
            </div>
          </div>
          <div className="tecnology">
            <div className="col">
              <span className="title-tecnology"><img src="/icons/codeigniter.svg"></img><span>- Codeigniter 4</span></span>
              <ProgressBar
                completed={65}
                maxCompleted={100}
                 height="15px"
                baseBgColor="grey"
                customLabel={<CountUp end={65} suffix="%" />}
                bgColor="#1f7a8cff"
                isLabelVisible={true}
                animateOnRender={true}
                transitionDuration="2s"
              ></ProgressBar>
            </div>
          </div>
          <div className="tecnology">
            <div className="col">
              <span className="title-tecnology"><img src="/icons/node.svg"></img><span>- Node.js</span></span>
              <ProgressBar
                completed={35}
                maxCompleted={100}
                 height="15px"
                baseBgColor="grey"
                customLabel={<CountUp end={35} suffix="%" />}
                bgColor="#1f7a8cff"
                isLabelVisible={true}
                animateOnRender={true}
                transitionDuration="2s"
              ></ProgressBar>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="sub-section bbdd">
          <span className="title"  data-aos-duration="1500" data-aos="zoom-in">Database</span>
          <div className="tecnology">
            <div className="col">
              <span className="title-tecnology"><img src="/icons/mysql.svg"></img><span>- Mysql</span></span>
              <ProgressBar
                completed={55}
                maxCompleted={100}
                 height="15px"
                baseBgColor="grey"
                customLabel={<CountUp end={55} suffix="%" />}
                bgColor="#1f7a8cff"
                isLabelVisible={true}
                animateOnRender={true}
                transitionDuration="2s"
              ></ProgressBar>
            </div>
          </div>
          <div className="tecnology">
            <div className="col">
              <span className="title-tecnology"><img src="/icons/mongo2.svg"></img><span>- MongoDB</span></span>
              <ProgressBar
                completed={40}
                maxCompleted={100}
                 height="15px"
                baseBgColor="grey"
                customLabel={<CountUp end={40} suffix="%" />}
                bgColor="#1f7a8cff"
                isLabelVisible={true}
                animateOnRender={true}
                transitionDuration="2s"
              ></ProgressBar>
            </div>
          </div>
        </div>
        <div className="sub-section others minheight2">
          <span className="title"  data-aos-duration="1500" data-aos="zoom-in">Others</span>
          <div className="tecnology">
            <div className="col">
              <span className="title-tecnology"><img src="/icons/github-dark.svg"></img><span>- Git</span></span>
              <ProgressBar
                completed={80}
                maxCompleted={100}
                 height="15px"
                baseBgColor="grey"
                customLabel={<CountUp end={80} suffix="%" />}
                bgColor="#1f7a8cff"
                isLabelVisible={true}
                animateOnRender={true}
                transitionDuration="2s"
              ></ProgressBar>
            </div>
          </div>
          <div className="tecnology">
            <div className="col">
              <span className="title-tecnology"><img src="/icons/figma.svg"></img><span>- Figma</span></span>
              <ProgressBar
                completed={60}
                maxCompleted={100}
                 height="15px"
                baseBgColor="grey"
                customLabel={<CountUp end={60} suffix="%" />}
                bgColor="#1f7a8cff"
                isLabelVisible={true}
                animateOnRender={true}
                transitionDuration="2s"
              ></ProgressBar>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
