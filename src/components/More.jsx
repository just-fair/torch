import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../animation/animations'

function More() {
  return (
    <section className="more">
        <div className="more-container">
            <motion.h4
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:true}}
            
            >Sample title</motion.h4>

            <motion.p
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:true}}

            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi, officiis sequi ut deserunt odio expedita dolore eligendi.</motion.p>

            <div className="display-grid">
                <motion.div
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0, transition:{
                    type: "tween",
                    duration: 1.25,
                    delay: 0.2,
                    ease:[0.25, 0.25, 0.25, 0.75]
                }}}
                viewport={{once:true, amount:0.1}}

                className="display-card grid-1">
                    <img src="https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA" alt="" />
                </motion.div>

                <motion.div className="display-card">
                    <i className="ri-service-fill"></i>
                    <h4>Sample text</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum totam ipsa soluta. Nostrum voluptas corrupti, accusamus dolores quod voluptatibus atque conse</p>
                </motion.div>

                <motion.div
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0, transition:{
                    type: "tween",
                    duration: 1.25,
                    delay: 0.2,
                    ease:[0.25, 0.25, 0.25, 0.75]
                }}}
                viewport={{once:true, amount:0.7}}

                className="display-card">
                    <img src="https://fastly.picsum.photos/id/41/1280/805.jpg?hmac=W9CWeYdlZisqEfhjuODl83T3lCXAqjUZrOe9iMFPYmI" alt="" />
                </motion.div>

                <motion.div
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0, transition:{
                    type: "tween",
                    duration: 1.25,
                    delay: 0.2,
                    ease:[0.25, 0.25, 0.25, 0.75]
                }}}
                viewport={{once:true, amount:0.1}}
                
                className="display-card">
                    <img src="https://fastly.picsum.photos/id/57/2448/3264.jpg?hmac=ewraXYesC6HuSEAJsg3Q80bXd1GyJTxekI05Xt9YjfQ" alt="" />
                </motion.div>

                <motion.div className="display-card">
                    <i className="ri-empathize-fill"></i>
                    <h4>Sample text</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum totam ipsa soluta. Nostrum voluptas corrupti, accusamus dolores quod voluptatibus atque conse</p>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default More
