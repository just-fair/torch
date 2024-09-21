import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../animation/animations'
import feast from '../assets/imgs/featuredImg/tempFeastImg.jpg'
import wildFireCamp from '../assets/imgs/featuredImg/wildFireCamp.jpg'
import backWardMasking from '../assets/imgs/featuredImg/backwardmasking.jpg'
import acoustic from '../assets/imgs/featuredImg/acousticImg.jpg'

const Featured = () => {
  return (

    <section className='feature'>
        <div className="feature-content">
            <motion.div 
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:true}}
            
            className="row">
                <div className="row-img">
                    <img src={feast} alt="sample img" />
                </div>
                <h4>Feast <br />Last Sunday of September</h4>
            </motion.div>
                
            <motion.div 
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:true}}

            className="row">
                <div className="row-img">
                    <img src={wildFireCamp} alt="" />
                </div>
                <h4>Wild Fire Camp 2024</h4>
            </motion.div>

            <motion.div 
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:true}}

            className="row">
                <div className="row-img">
                    <img src={backWardMasking} alt="" />
                </div>
                <h4>Backward Masking</h4>
            </motion.div>

            
            <motion.div
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:true}}

            className="row">
                <div className="row-img">
                    <img src={acoustic} alt="" />
                </div>
                <h4>Acoustic Night</h4>
            </motion.div>

            

        </div>
    </section>
    
  )
}

export default Featured
