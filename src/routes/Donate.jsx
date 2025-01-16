import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { fadeIn } from "../animation/animations";
import QrCode from "../../src/assets/imgs/QrCode/qrcode22.png";

function Donate() {
  return (
    <>
      <section className="donation">
        <motion.div
          className="donation-container"
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
        >
          <div>
            <h1>Proverbs 3:9-10</h1>
          </div>
          <div>
            <p>
              "Honor the Lord from your wealth, And from the first of all your
              produce; Then your barns will be filled with plenty, And your vats
              will overflow with new wine."
            </p>
          </div>
        </motion.div>

        <motion.div
          className="qr"
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
        >
          <img src={QrCode} alt="QR Code" />
          <h5>Scan the QR Code</h5>
        </motion.div>
      </section>
    </>
  );
}

export default Donate;
