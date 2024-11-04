import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../animation/animations";
import video from "../assets/videos/homeVideo.mp4";
import "../styles/loading.css";

function First() {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoaded = () => {
    setIsLoading(!isLoading);
  };

  return (
    <section className="home">
      {isLoading && (
        <div id="load">
          <div>G</div>
          <div>N</div>
          <div>I</div>
          <div>D</div>
          <div>A</div>
          <div>O</div>
          <div>L</div>
        </div>
      )}

      <video
        autoPlay
        muted
        loop
        id="backgroundVideo"
        onLoadedData={handleVideoLoaded}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!isLoading && (
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
            <span style={{ color: "#AC7EAD" }}> Join us</span> on this journey
            to become a blazing torch of His light and love!
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
              Give
            </Link>
          </div>
        </motion.div>
      )}
    </section>
  );
}

export default First;
