import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../animation/animations";
import CardSlider from "../components/CardSlider";
import TorchPicsSlider from "../components/TorchPicsSlider";

function About() {
  return (
    <>
      <section className="about">
        <div className="about-hero">
          <TorchPicsSlider />
        </div>

        <div className="about-container">
          {/* <motion.div
            className="curvy-bg"
            initial={{ x: "-200vw", y: "-160vw", rotate: 0 }}
            animate={{ x: 0, rotate: 360 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          > */}

          {/* </motion.div> */}

          <motion.div
            className="txt-container"
            variants={fadeIn("up", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3>
              Transformation Obtain Thru Redemption by Christ Jesus our Hope.
            </h3>

            <p>
              TORCH is a pioneering church founded in Bahay Toro, Quezon City,
              Metro Manila in 2018, with the goal of evangelizing youth in
              various schools in Proj 6 and 8 of Quezon City and encouraging
              them to join our organization in serving God and society.
            </p>
          </motion.div>
        </div>

        <div className="curvy-break">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <motion.div
            className="mission-container"
            variants={fadeIn("up", 0.25)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
          >
            <h3>Our Mission</h3>
            <p>
              To share the burning desire of Jesus of making Disciples. Teaching
              them the gospel zealously, producing radical Spirit-filled
              believers.
            </p>
          </motion.div>

          <div className="mission-img"></div>
        </div>

        <div className="vision">
          <motion.div
            className="vision-container"
            variants={fadeIn("up", 0.25)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
          >
            <h3>Our Vision</h3>
            <p> Spread the Fire of Revival all around the globe.</p>
          </motion.div>

          <div className="vision-img"></div>
        </div>
      </section>

      <section className="leaders">
        <div className="leaders-curvy-border">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <motion.div
          className="leader-title"
          variants={fadeIn("up", 0.01)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
        >
          <h2>Leadership Members</h2>
        </motion.div>

        <CardSlider />
      </section>
    </>
  );
}

export default About;
