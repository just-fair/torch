import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { fadeIn } from "../animation/animations";

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
            <h1>Give</h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              repellendus neque suscipit repellat odit! Hic rem magni doloribus
              voluptatum, magnam minima quis aliquam, quo iure temporibus amet
              aperiam facilis ut!
            </p>
          </div>
        </motion.div>

        <motion.div
          className="qr"
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
        >
          <img
            src="https://imgs.search.brave.com/w2OM7cKMxss94amH6vatYpb_oARSIQr65V6P-dkF4a4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8xNC83OC9z/YW1wbGUtcXItY29k/ZS12ZWN0b3ItNzEx/NDc4LmpwZw"
            alt=""
          />
          <h5>Scan the QR</h5>
        </motion.div>
      </section>
    </>
  );
}

export default Donate;
