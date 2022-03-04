import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function About() {
  
  const animationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    enter: { opacity: 1 },
    transition: { duration: 0.2 },
  };

  return (
    <>
      <Navbar />
      <main className="salmon">
        <motion.div
          className="img-hero big"
          initial={false}
          exit={{ scale: 0.5 }}
          enter={{ scale: 1 }}
          transition={{
            duration: 2,
            delay: 0.2,
            transition: {
              staggerChildren: 0.5,
            },
          }}
          onAnimationStart={() => {
            const tl = gsap.timeline({ paused: true });
            tl.to(window, {
              scrollTo: 0,
              duration: 0.2,
            });
            tl.play();
          }}
        >
          <Link href="/" scroll={false}>
            <Image
              layout="fill"
              src="https://images.unsplash.com/photo-1465401683404-bde9091abe83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2477&q=80"
            />
          </Link>

          <div className="hero-text">
            <motion.span {...animationProps} transition={{...animationProps.transition, delay: 0.1 }} >A</motion.span>
            <motion.span {...animationProps} transition={{...animationProps.transition, delay: 0.2 }}>b</motion.span>
            <motion.span {...animationProps} transition={{...animationProps.transition, delay: 0.3 }}>o</motion.span>
            <motion.span {...animationProps} transition={{...animationProps.transition, delay: 0.4 }}>u</motion.span>
            <motion.span {...animationProps} transition={{...animationProps.transition, delay: 0.5 }}>t</motion.span>
          </div>
        </motion.div>
      </main>
      <main className="salmon"></main>
    </>
  );
}

export default About;
