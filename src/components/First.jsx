import React from "react";
import { Link } from "react-router-dom";
import { delay, motion } from "framer-motion";
import { fadeIn } from "../animation/animations";
import video from "../assets/videos/homeVideo.mp4";

function First() {
  return (
    <section className="home">
      <video autoPlay muted loop id="backgroundVideo">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="home-text"
      >
        <h1>
          <span className="our" style={{ color: "white" }}>
            Our passion is to lead you to Jesus ignite a fervent faith.
          </span>{" "}
          <span style={{ color: "#AC7EAD" }}> Join us</span> on this journey to
          become a blazing torch of His light and love!
        </h1>
        <h3>"Worshippng God, Advancing His Kingdom"</h3>

        <div className="opening-btns">
          <a
            href="https://www.facebook.com/torch.ph.co"
            target="_blank"
            id="join"
          >
            Join Us
          </a>

          <Link to="donation" id="donate-btn">
            Donate
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default First;
