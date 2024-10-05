import React from "react";
import ATEANGEL from "../assets/imgs/leaders/ATEANGEL1.jpg";
import ATEPHOEBE from "../assets/imgs/leaders/ATEPHOEBE.jpeg";
import COLLEEN from "../assets/imgs/leaders/COLLEEN.jpg";
import JELOY2 from "../assets/imgs/leaders/JELOY2.jpg";
import KUYAJHERALD from "../assets/imgs/leaders/KUYAJHERALD.jpg";
import KUYAPAUL from "../assets/imgs/leaders/KUYAPAUL.jpg";
import KUYATIAN from "../assets/imgs/leaders/KUYATIAN1.jpg";
import LEE from "../assets/imgs/leaders/LEE2.jpg";
import LOU from "../assets/imgs/leaders/LOU1.jpeg";
import MISA from "../assets/imgs/leaders/MISA1.jpg";
import PVEN from "../assets/imgs/leaders/PVEN1.jpeg";
import TINA from "../assets/imgs/leaders/TINA2.jpeg";
import TITALHEK from "../assets/imgs/leaders/TITALHEK1.jpeg";
import TITASWEET from "../assets/imgs/leaders/TITASWEET2.jpg";
import TITOLITO from "../assets/imgs/leaders/TITOLITO2.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../animation/animations";

function About() {
  return (
    <>
      <section className="about">
        <div className="about-container">
          <motion.div
            className="curvy-bg"
            initial={{ x: "-200vw", y: "-160vw", rotate: 0 }}
            animate={{ x: 0, rotate: 360 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <motion.h1
              className="torch"
              variants={fadeIn("down", 2)}
              initial="hidden"
              animate="show"
            >
              TORCH
            </motion.h1>
          </motion.div>

          <motion.div
            className="txt-container"
            variants={fadeIn("up", 3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3>
              Transformation Only Thru Redemption by Christ Jesus our Hope.
            </h3>

            <p>
              That is the abbreviation for our Church’s name. TORCH is a
              pioneering church founded in Bahay Toro, Quezon City, Metro Manila
              in 2018, with the goal of evangelizing youth in various schools in
              Proj 6 and 8 of Quezon City and encouraging them to join our
              organization in serving God and society.
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
          variants={fadeIn("up", 0.25)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
        >
          <h2>Leadership Members</h2>
        </motion.div>

        <div id="card-area">
          <div className="wrapper">
            <div className="box-area lead-pastor">
              <div className="box">
                <img src={PVEN} alt="" />
                <div className="overlay">
                  <h3>John Oliven Rances</h3>
                  <p>Lead Pastor</p>
                </div>
              </div>
            </div>

            <div className="box-area assc-pastor">
              <div className="box">
                <img src={TINA} alt="" />
                <div className="overlay">
                  <h3>Kristina Cassandra Ardiente</h3>
                  <p>Associate Pastor</p>
                </div>
              </div>
            </div>

            <div className="box-area pastoral-trainee">
              <div className="box">
                <img src={LOU} alt="" />
                <div className="overlay">
                  <h3>Louie Castro Calma</h3>
                  <p>Pastoral Trainee</p>
                </div>
              </div>
              <div className="box">
                <img src={LEE} alt="" />
                <div className="overlay">
                  <h3>Hayle Greselle L. Base</h3>
                  <p>Pastoral Trainee</p>
                </div>
              </div>
              <div className="box">
                <img src={MISA} alt="" />
                <div className="overlay">
                  <h3>Roshell Dian F. Subillaga</h3>
                  <p>Pastoral Trainee</p>
                </div>
              </div>
            </div>

            <div className="box-area elder">
              <div className="box">
                <img src={KUYAPAUL} alt="" />
                <div className="overlay">
                  <h3>Christian Paul Salvador</h3>
                  <p>Elder</p>
                </div>
              </div>
              <div className="box">
                <img src={ATEPHOEBE} alt="" />
                <div className="overlay">
                  <h3>Phoebe Kates Salvador</h3>
                  <p>Elder</p>
                </div>
              </div>
              <div className="box">
                <img src={TITALHEK} alt="" />
                <div className="overlay">
                  <h3>Rosemarie Beltran</h3>
                  <p>Elder</p>
                </div>
              </div>
              {/* </div>

            <div className="box-area elder"> */}
              <div className="box">
                <img src={TITASWEET} alt="" />
                <div className="overlay">
                  <h3>Sweetheart B. Maga</h3>
                  <p>Elder</p>
                </div>
              </div>
              <div className="box">
                <img src={TITOLITO} alt="" />
                <div className="overlay">
                  <h3>Angelito Maga</h3>
                  <p>Elder</p>
                </div>
              </div>
              <div className="box">
                <img src={KUYATIAN} alt="" />
                <div className="overlay">
                  <h3>William Tristian Beltran</h3>
                  <p>Elder</p>
                </div>
              </div>
            </div>

            <div className="box-area leader">
              <div className="box">
                <img src={COLLEEN} alt="" />
                <div className="overlay">
                  <h3>Colleen Millicent C. Gane</h3>
                  <p>Leader</p>
                </div>
              </div>
              <div className="box">
                <img src={JELOY2} alt="" />
                <div className="overlay">
                  <h3>Heart Angelo Maga</h3>
                  <p>Leader</p>
                </div>
              </div>
              <div className="box">
                <img src={KUYAJHERALD} alt="" />
                <div className="overlay">
                  <h3>Mark Jherald B. Abila</h3>
                  <p>Leader</p>
                </div>
              </div>
              <div className="box">
                <img src={ATEANGEL} alt="" />
                <div className="overlay">
                  <h3>Maria Angela Victoria E. Beltran</h3>
                  <p>Leader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
