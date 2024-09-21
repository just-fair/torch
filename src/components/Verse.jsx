import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../animation/animations'

function Verse() {
  return (
    <section className="verse">
        <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, amount:0.7}}

        className="verse-container">
            <h3>John 3:16</h3>
            <p>"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."</p>
        </motion.div>
    </section>
  )
}

export default Verse
