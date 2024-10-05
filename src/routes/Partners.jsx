import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../animation/animations";

function Partners() {
  return (
    <>
      <section className="part-us">
        <div className="part-us-container">
          <motion.h5
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Be our sponsor
          </motion.h5>
          <motion.h1
            variants={fadeIn("down", 0.7)}
            initial="hidden"
            animate="show"
          >
            Sample and sample <br />
            sample text
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.9)}
            initial="hidden"
            animate="show"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            earum numquam ullam consectetur
          </motion.p>
          <motion.div
            className="baba"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", delay: 2 }}
          >
            <a href="#">Partner With Us</a>
          </motion.div>
        </div>
      </section>

      <section className="partner">
        <div className="more-container">
          <h4 id="taas">Our Partners &amp; Sponsors</h4>

          <div className="display-grid">
            <div className="display-card grid-1">
              <img
                src="https://imgs.search.brave.com/rCvl46McQBzgP1e44A2ljN1gPKm1FNL6GSO88PZoomU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjQ0/MTYyODEzL3Bob3Rv/L2J1c2luZXNzcGVv/cGxlLW1ha2luZy1o/YW5kc2hha2UtYXQt/Y29uZmVyZW5jZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/QkVqN1A0eWRKSmFM/dUpQRUZydlFsNnRM/RU5pb01zenluNVRp/aGtHc0xMMD0"
                alt=""
              />
            </div>

            <div className="display-card">
              <i className="ri-hand-heart-fill"></i>
              <h4>Sample text</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                totam ipsa soluta. Nostrum voluptas corrupti, accusamus dolores
                quod voluptatibus atque conse
              </p>
            </div>

            <div className="display-card">
              <img
                src="https://imgs.search.brave.com/cCo5nsMC__E-wTr4b9bXVsST7vmTBwT3q4K40wnNqWk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/MzAzMzE5My9waG90/by9zcG9uc29yLXdy/aXR0ZW4tdW5kZXIt/dG9ybi1wYXBlci53/ZWJwP2I9MSZzPTE3/MDY2N2Emdz0wJms9/MjAmYz1nZjQ3dnNf/RUtNY19ubVQyR0ZV/MXdodV9zYjFjNDNV/eVpfdGNNb2J0Undv/PQ"
                alt=""
              />
            </div>

            <div className="display-card">
              <img
                src="https://imgs.search.brave.com/kLsOYjyYTFqM5x4xVZ8qrVLiUoUPvQ3JBk_iOHhwKuA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mb3Vu/ZHIuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI0LzA1L2hv/dy10by1nZXQtc3Bv/bnNvcmVkLmpwZw"
                alt=""
              />
            </div>

            <div className="display-card">
              <i className="ri-hand-coin-fill"></i>
              <h4>Sample text</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                totam ipsa soluta. Nostrum voluptas corrupti, accusamus dolores
                quod voluptatibus atque conse
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Partners;
