import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../animation/animations";
import article1 from "../assets/imgs/article1.png";

function Gallery() {
  return (
    <section className="gallery">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="gallery-img"
      >
        <img src={article1} alt="" />
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="gallery-text"
      >
        <h5>Article</h5>
        <h2>Sample title article</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque soluta
          porro voluptates, assumenda nesciunt eveniet error expedita, dolorem
          accusamus vel aperiam libero molestiae animi fuga ea ex inventore
          commodi. Aut.
        </p>
        <a href="https://www.facebook.com/torch.ph.co" target="_blank">
          Read more
        </a>
      </motion.div>

      {/* <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, amount:0.7}}

        className="gallery-img">
            <img src="https://picsum.photos/seed/picsum/536/354" alt="" />
        </motion.div>

        <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, amount:0.7}}
        
        className="gallery-text">
            <h5>Article</h5>
            <h2>Sample title article</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque soluta porro voluptates, assumenda nesciunt eveniet error expedita, dolorem accusamus vel aperiam libero molestiae animi fuga ea ex inventore commodi. Aut.</p>
            <a href="https://www.facebook.com/torch.ph.co" target='_blank'>Read more</a>
        </motion.div> */}
    </section>
  );
}

export default Gallery;
