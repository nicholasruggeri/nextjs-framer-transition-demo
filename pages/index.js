import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function Home() {
  return (
    <>
      <Navbar />
      <main className="orange">
        <motion.div
          className="img-hero"
          initial={{ scale: 0.5 }}
          exit={{ scale: 1 }}
          enter={{ scale: 0.5 }}
          transition={{ duration: 2 }}
        >
          <Link href="/about" scroll={false}>
            <Image
              layout="fill"
              src="https://images.unsplash.com/photo-1465401683404-bde9091abe83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2477&q=80"
            />
          </Link>
        </motion.div>
      </main>
    </>
  );
}

export default Home;
