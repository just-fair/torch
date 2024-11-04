import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../animation/animations";

function Verse() {
  return (
    <section className="verse">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="verse-container"
      >
        <h3>Isaiah 62:1</h3>
        <p>
          "For Zion’s sake I will not keep silent, And for Jerusalem’s sake I
          will not keep quiet, Until her righteousness goes forth like
          brightness, And her salvation like a torch that is burning."
        </p>
      </motion.div>
    </section>
  );
}

export default Verse;
