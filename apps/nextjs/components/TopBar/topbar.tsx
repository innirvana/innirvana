import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserButton, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { MenuButton } from "./menuButton";
import Overlay from "./overlay";

const menuButtonStyle = {
  marginLeft: "2rem",
};

const Header = () => {
  const { isSignedIn } = useAuth();
  const [isOpen, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!isOpen);
  };

  return (
    <header className="header bg: w-full bg-white p-1">
      <div
        className={`container mx-auto flex items-center justify-between ${
          !isSignedIn ? "md:items-start" : "items-center"
        }`}
      >
        {isOpen && (
          <>
            <Overlay isOpen={isOpen} toggleNav={toggleNav} />
          </>
        )}
        <motion.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          href="#"
          className="flex items-center justify-start"
        >
          <Image
            priority
            src="/the_logo.svg"
            height={100}
            width={100}
            alt="Follow us on Twitter"
            className="logo"
          />

          <h1 className="text-midnight hidden text-xl lg:block">inrvana.</h1>
        </motion.a>

        <div className="flex lg:hidden">
          <MenuButton
            isOpen={isOpen}
            onClick={() => setOpen(!isOpen)}
            strokeWidth="8"
            color="#484979"
            lineProps={{ strokeLinecap: "round" }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            width="24"
            height="24"
            style={menuButtonStyle}
          />
        </div>

        {/* <div className="brutal-card bg-pink lg:hidden">
          <Link href="/sign-in" className="text-black">
            Sign In
          </Link>
        </div> */}

        {/* <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex hidden items-center justify-center lg:block"
        ></motion.div> */}
        <nav className="hidden justify-items-start space-x-4 lg:block">
          {!isSignedIn && (
            <>
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                href="/sign-in"
                className="p-5 text-white hover:text-gray-200"
              >
                <div className="brutal-card bg-pink">
                  <p className="text-black">Sign In</p>
                </div>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                href="/about"
                className="p-5 text-white hover:text-gray-200"
              >
                <div className="brutal-card bg-pink">
                  <p className="text-black">About</p>
                </div>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                href="/about"
                className="p-5 text-white hover:text-gray-200"
              >
                <div className="brutal-card bg-pink">
                  <p className="text-black">Contact</p>
                </div>
              </motion.a>
            </>
          )}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white hover:text-gray-200"
          >
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: "3rem",
                    height: "3rem",
                  },
                },
              }}
            />
          </motion.div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
