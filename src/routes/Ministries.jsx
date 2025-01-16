import React from "react";
import "../styles/ministries.css";

import MATHERO from "../assets/imgs/MAT/mat-hero.JPG";
import TAMBHERO from "../assets/imgs/TAMB/tamb-hero.JPG";
import TAMBINTRO from "../assets/imgs/TAMB/tamb-intro.JPG";
import HAYLE2 from "../assets/imgs/TAMB/HAYLE2.jpg";
import PAWHERO from "../assets/imgs/PAW/paw-hero.jpg";
import PAWINTRO from "../assets/imgs/PAW/IMG_5381.jpg";
import JELOY2 from "../assets/imgs/PAW/JELOY2.jpg";
import ROSHELL1 from "../assets/imgs/PAW/ROSHELL1.jpg";

import MATINTRO from "../assets/imgs/MAT/mat-intro.JPG";
import ANGEL2 from "../assets/imgs/MAT/ANGEL2.jpg";
import COLLEEN2 from "../assets/imgs/MAT/COLLEEN2.jpg";
import USHERINGINTRO from "../assets/imgs/Ushering/una-ushering.JPG";
import USHERINGVM from "../assets/imgs/Ushering/vm-ushering.JPG";
import DANIELA2 from "../assets/imgs/Ushering/DANIELA2.jpg";

import TINA1 from "../assets/imgs/PM/TINA1.jpg";
import LOUIE1 from "../assets/imgs/PM/LOUIE1.jpg";

import PMINTRO from "../assets/imgs/PM/intro-pm.JPG";
import PMVM from "../assets/imgs/PM/vm-pm.JPG";
import PVEN1 from "../assets/imgs/PM/P.VEN1.jpg";
import LOUIE2 from "../assets/imgs/PM/LOUIE2.jpg";
import TINA2 from "../assets/imgs/PM/TINA2.jpg";

import INTROLG from "../assets/imgs/LG/intro-lg.JPG";
import VMLG from "../assets/imgs/LG/vm-lg.JPG";

import { motion } from "framer-motion";
import { fadeIn } from "../animation/animations";

const Ministries = () => {
  return (
    <>
      <section className="ministries">
        <motion.div
          variants={fadeIn("up", 0.01)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
        >
          <h1>MINISTRIES</h1>
        </motion.div>

        <div className="part">
          <motion.img
            src={MATHERO}
            alt="media and technicals image"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          />

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="words"
          >
            <h2>
              media and <br />
              technicals
            </h2>
            <a href="#mat" className="material-button">
              Click to see more
            </a>
          </motion.div>
        </div>

        <div className="part vm">
          <motion.div
            className="words"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2>TAMBOURINE</h2>
            <a href="#tamb" className="material-button">
              Click to know more
            </a>
          </motion.div>
          <motion.img
            src={TAMBHERO}
            alt="tambourine image"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          />
        </div>

        <div className="part">
          <motion.img
            src={PAWHERO}
            alt="praise and worship image"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          />
          <motion.div
            className="words"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2>Praise and worship</h2>
            <a href="#paw" className="material-button">
              Click to know more
            </a>
          </motion.div>
        </div>

        {/* Media and technicals */}
        <div className="part" id="mat">
          <motion.img
            src={MATINTRO}
            alt="Media and technicals intro"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          />
          <motion.div
            className="words"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2>MEDIA AND TECHNICALS MINISTRY</h2>
            <p>
              The Media Team is committed to enhancing worship and spreads God’s
              Word through creativity and technical expertise under the unified
              CTP Department. This department comprises three key areas:
              Content, which focuses on promotional materials and e-evangelism
              to engage and inspire a wider audience on social media; Technical,
              which manages lyrics projection, live streaming, and lighting for
              seamless worship services; and Photography, which captures key
              moments through photo and video coverage, providing materials for
              content creation. Together, the Media Team works in harmony to
              glorify God through media excellence.
            </p>
          </motion.div>
        </div>

        <div className="part vm">
          <motion.div
            className="words vm"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2>vission</h2>
            <p>
              “To be an effective channel connecting people to God and the
              church to the people by capturing and spreading the good works of
              God through visual graphics and digital platforms.”
            </p>
            <h2>mission</h2>
            <p>
              "To passionately produce visual graphics that proclaim God's love
              to His people and to provide quality digital content that
              demonstrates the good works of God."
            </p>
          </motion.div>
          <motion.img
            src={MATHERO}
            alt="mission vission image"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          />
        </div>

        <div className="part meet">
          <motion.img
            src={ANGEL2}
            alt="ate angel image"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          />
          <motion.div
            className="words introduce"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2>Meet Ate Angel</h2>
            <p>
              Hi, I’m Ate Angel, a passionate young woman with a heart for
              creativity and a love for sharing God's message through modern
              technology. With no formal academic background in media or
              technical work, she stepped into the role of head of the
              technicals and media team after the pandemic. Driven by love,
              obedience, and unwavering commitment to the Lord, Ate Angel has
              embraced her calling to serve and inspire others in innovative and
              meaningful ways.
            </p>
          </motion.div>
        </div>

        <div className="part meet vm">
          <motion.div
            className="words introduce"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2>Meet Ate Colleen</h2>
            <p>
              Hi, I’m Ate Colleen, head of the Photography Department in
              Technicals and Media Team. Love capturing moments and serving God
              through your lens? Join our team! We document church events, build
              skills, and make great friends along the way. Interested? Come
              find me—I’d love to chat with you about joining!
            </p>
          </motion.div>
          <motion.img
            src={COLLEEN2}
            alt="ate colleen image"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          />
        </div>

        <motion.div
          className="join"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <h2>Interested in Media? Join Us!</h2>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd6vkw2iitLtOUp8EKhBjdLFSwd0_bF5kfvR8ro9h9-Uql2RQ/viewform?usp=sharing"
            target="_blank"
            className="material-button submit"
          >
            Media Form
          </a>
        </motion.div>

        {/* Ushering ministry */}
        <div className="part">
          <motion.img
            src={USHERINGINTRO}
            alt="Ushering ministry image"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          />
          <motion.div
            className="words"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2>USHERING MINISTRY</h2>
            <p>
              We're the ushers, the welcoming team that prepares the church for
              worship services. We make sure everything is set up perfectly,
              from arranging the elements for Holy Communion to ensuring the
              church is clean and orderly. We're also the friendly faces that
              greet everyone as they arrive, creating a warm and inviting
              atmosphere where everyone feels welcome to worship. If you're
              looking for a way to serve and connect with our church community,
              join our ushering team!
            </p>
          </motion.div>
        </div>

        <div className="part vm">
          <motion.div
            className="words vm"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2>vission</h2>
            <p>
              To be the vessel of God's presence in welcoming souls to His
              presence by love, humility, with the serving heart for Christ.
            </p>
            <h2>mission</h2>
            <p>
              To create a Holy atmosphere by faithfully serving God and
              imparting the presence of God through our love for God,
              dedication, unity, and God service-centered.
            </p>
          </motion.div>
          <motion.img
            src={USHERINGVM}
            alt="mission vission image"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          />
        </div>

        <div className="part meet">
          <motion.img
            src={DANIELA2}
            alt="ate Daniela image"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          />
          <motion.div
            className="words introduce"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2>Meet Ate Daniela</h2>
            <p>
              Hi, I’m Ate Daniela, the ministry head of ushering. Want to be
              part of a fun team that helps make our church services awesome? We
              prepare the church, welcome people with a smile, and help out with
              lots of different things. It's a great way to meet new friends,
              build your confidence, and serve God! If you're interested in
              joining, just come find me – I'm super friendly and happy to
              answer any questions. Let's make our church even better together!
            </p>
          </motion.div>
        </div>

        <motion.div
          className="join"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <h2>Interested in Ushering? Contact Us!</h2>
          <a
            href="https://www.facebook.com/dnyela.aaa"
            className="material-button submit"
            target="_blank"
          >
            <i className="ri-facebook-box-fill"></i>
            dnyela.aaa
          </a>
        </motion.div>

        {/* Tambourine ministry */}
        <div className="part" id="tamb">
          <motion.img
            src={TAMBINTRO}
            alt="Tambourine ministry image"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          />
          <motion.div
            className="words"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2>TAMBOURINE MINISTRY</h2>
            <p>
              Tambourine and Flag Ministry is a prophetic ministry inspired by
              the Holy Spirit, using Spirit-led dance to declare victory and
              blessings. Through the rhythmic sound of tambourines and the
              powerful prophetic flag dancing, we proclaim triumph in every
              battle and the abundant grace of God.
            </p>
          </motion.div>
        </div>

        <div className="part vm">
          <motion.div
            className="words vm"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2>vission</h2>
            <p>“To dance zealously led by the Holy Spirit.”</p>
            <h2>mission</h2>
            <p>
              "To lead everyone in proclamation of his victory through dance and
              tambourine."
            </p>
          </motion.div>

          <motion.img
            src={TAMBHERO}
            alt="mission vission image"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          />
        </div>

        <div className="part meet">
          <motion.img
            src={HAYLE2}
            alt="ate Daniela image"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          />
          <motion.div
            className="words introduce"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2>Meet Ate Lee</h2>
            <p>
              Every daughter of the Lord is invited to join us in serving His
              Kingdom! Meet Ate Hayle to become part of our growing ministry and
              declare God’s victory and blessings through dance.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="join"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <h2>Interested in Tambourine? Join Us!</h2>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdulNv5n_86UIo4lN8UHG2cJoRyn9L7OmUJ9ETnxKIjTIAjQQ/viewform?usp=sharing"
            className="material-button submit"
            target="_blank"
          >
            Tambourine Form
          </a>
        </motion.div>

        {/* Praise and worship */}
        <div className="part" id="paw">
          <motion.img
            src={PAWINTRO}
            alt="PAW intro"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          />
          <motion.div
            className="words"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2>PRAISE AND WORSHIP</h2>
            <p>
              We are a group of people devoted to using our musical talents for
              the glory of God. Using a wide variety of instruments from
              meticulously playing the piano to bringing the beat from the
              drums, and let's not forget the singers who bring prophetic words
              from the Lord - Leading people into praise and worship. We
              encourage spiritual growth as well as the cultivation of our God
              given talents, as we believe that we are given this privilege to
              serve. Welcome to the Praise and Worship Ministry!
            </p>
          </motion.div>
        </div>

        <div className="part vm">
          <motion.div
            className="words vm"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2>vission</h2>
            <p>
              “To be an effective channel connecting people to God and the
              church to the people by capturing and spreading the good works of
              God through visual graphics and digital platforms.”
            </p>
            <h2>mission</h2>
            <p>
              "To passionately produce visual graphics that proclaim God's love
              to His people and to provide quality digital content that
              demonstrates the good works of God."
            </p>
          </motion.div>
          <motion.img
            src={PAWHERO}
            alt="mission vission image"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          />
        </div>

        <div className="part meet">
          <motion.img
            src={JELOY2}
            alt="kuya Jeloy image"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          />
          <motion.div
            className="words introduce"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2>Meet Kuya Geloy</h2>
            <p>
              Do you find joy in playing instruments? Hi! I’m Kuya Geloy, the
              ministry head of CWM's Instruments team! We bring the energy with
              powerful sounds and create moments of solace with gentle melodies,
              setting the atmosphere to lead people into God's presence. Let’s
              deepen our faith, embrace our God-given calling, and raise His
              name through praise and worship. Are you ready?
            </p>
          </motion.div>
        </div>

        <div className="part meet vm">
          <motion.div
            className="words introduce"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2>Meet Ate Dian</h2>
            <p>
              Hey there! I’m Ate Dian, the ministry head of the vocals team at
              CWM. If you're passionate about singing and want to be part of a
              fun team that leads people into God's presence, this is the place
              for you. We sing prophetically and worship in Spirit and in truth,
              while growing in our faith together. Ready to join us? Let's
              chitchat and get to know each other—can't wait to welcome you to
              our family!
            </p>
          </motion.div>

          <motion.img
            src={ROSHELL1}
            alt="ate roshell image"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          />
        </div>

        <motion.div
          className="join"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <h2>Interested in PAW? Join Us!</h2>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdasBonrQ1mAeZwTNxP7kQMp7YcpZ7a5Mk0c2theQdbmipz7A/viewform?usp=header"
            className="material-button submit"
            target="_blank"
          >
            PAW Form
          </a>
        </motion.div>

        {/* Light Group */}
        <div className="part">
          <motion.img
            src={INTROLG}
            alt="LG intro"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          />
          <motion.div
            className="words"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2>LIGHT GROUP</h2>
            <p>
              Light Group is an engaging ministry designed to foster spiritual
              growth, support, and connection among believers. In this ministry,
              we deepen our understanding of God's Word, encourage one another,
              and build strong and lasting relationships through bible studies,
              prayer, and fellowship. <br />
              <br />
              Join us and experience a journey of spiritual transformation. Let
              us walk in faith and be a light to those around us!
            </p>
          </motion.div>
        </div>

        <div className="part vm ">
          <motion.div
            className="words vm"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2>vission</h2>
            <p>
              Seeing Every Disciple Bearing the Light of God's Revival Fire.
            </p>
            <h2>mission</h2>
            <p>Share — Consolidate — Equip — Send.</p>
          </motion.div>

          <motion.img
            src={VMLG}
            alt="mission vission image"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          />
        </div>

        <div className="part meet">
          <motion.img
            src={TINA1}
            alt="Tina image"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          />
          <motion.div
            className="words introduce"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2>Meet Ptra. Tina</h2>
            <p>
              Meet Pastora Tina, a dedicated leader in our Light Group Ministry!
              She inspires spiritual growth, supports believers, and nurtures
              lasting connections through heartfelt Bible studies, prayer, and
              fellowship. Join us and let’s walk in faith together!
            </p>
          </motion.div>
        </div>

        <div className="part meet vm">
          <motion.div
            className="words introduce"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2>Meet Ptr. Louie</h2>
            <p>
              Meet Pastor Louie, the leader of our Light Group Ministry! He
              guides us in deepening our understanding of God’s Word, fostering
              connection through Bible studies, prayer, and fellowship. Join us
              and experience a journey of faith and transformation!
            </p>
          </motion.div>
          <motion.img
            src={LOUIE1}
            alt="Louie image"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          />
        </div>

        <motion.div
          className="join light-group-contact"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <h2>INTERESTED IN JOINING US? CONTACT US!</h2>

          <a
            href="https://www.facebook.com/kristinacassandra.ardiente"
            className="material-button submit"
            target="_blank"
          >
            <i className="ri-facebook-box-fill"></i>
            kristinacassandra.ardiente
          </a>
          <a
            href="https://www.facebook.com/louie.castro.5055"
            className="material-button submit"
            target="_blank"
          >
            <i className="ri-facebook-box-fill"></i>
            louie.castro.5055
          </a>
        </motion.div>

        {/* Pastoral Ministry */}
        <div className="part">
          <motion.img
            src={PMINTRO}
            alt="PM intro"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          />
          <motion.div
            className="words"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2>PASTORAL MINISTRY</h2>
            <p>
              Pastoral Ministry helps people grow spiritually, caring for the
              emotional and relational needs of the congregation. This ministry
              encourages spiritual growth, provides a listening ear, and creates
              a welcoming, supportive environment where individuals can connect
              with God and each other.
            </p>
          </motion.div>
        </div>

        <div className="part vm">
          <motion.div
            className="words vm"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2>vission</h2>
            <p>To Shepherd the people of God to seek Christ and His Kingdom</p>
            <h2>mission</h2>
            <p>
              We will take care of God’s flock by Feeding and Tending its Sheep
              and Lambs just as Christ does it.
            </p>
          </motion.div>
          <motion.img
            src={PMVM}
            alt="mission vission image"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          />
        </div>

        <div className="part meet">
          <motion.img
            src={PVEN1}
            alt="Pven image"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          />
          <motion.div
            className="words introduce"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2>Meet Ptr. Ven</h2>
            <p>
              Meet our lead pastor, Ptr. Ven. He leads our worship services,
              preaches sermons, and teaches Bible lessons to help individuals
              grow in their faith.
            </p>
          </motion.div>
        </div>

        <div className="part vm">
          <motion.div
            className="words two-image"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <p>
              Meet our associate pastors, Ptra. Tina and Ptr. Louie. They
              support our lead pastor in overall ministry, they help to counsel
              and provide pastoral care to church members.
            </p>
          </motion.div>
          <motion.div
            className="overlapping-image-container"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <img src={LOUIE2} alt="Louie image" className="image image-back" />
            <img src={TINA2} alt="Tina image" className="image image-front" />
          </motion.div>
        </div>

        <div className="part">
          <motion.div
            className="overlapping-image-container last-part"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <img src={HAYLE2} alt="Hayle image" className="image image-back" />
            <img
              src={ROSHELL1}
              alt="Roshell image"
              className="image image-front"
            />
          </motion.div>
          <motion.div
            className="words two-image"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <p>
              Meet our pastoral trainees, Sis. Roshell and Sis. Hayle. They also
              offer prayers and support during both joyful and difficult times.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Ministries;
