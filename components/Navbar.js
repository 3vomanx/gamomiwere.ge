import React from "react";
import Link from 'next/link';
import styles from "../styles/Navbar.module.css";  // Import the CSS module
import Logo from "../public/loan-website-logo.webp";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Image from 'next/image';  // Import the Image component from Next.js


function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <>
    <div className={styles.navbar}>
      <div className={styles.leftSide}>
        <Image src={Logo} unoptimized={true} alt="logo" />
      </div>
      <div className={styles.rightSide}>
        <div>
          <Link href="/Home">მთავარი</Link>
          <Link href="/avto-sesxi">ავტო სესხი</Link>
          <Link href="/samomxmareblo-sesxi">სამომხმარებლო სესხი</Link>
          <Link href="/avto-lombardi">ავტოლომბარდი</Link>
          <Link href="/contact">კონტაქტი</Link>
        </div>
        <button onClick={toggleNavbar}>
          <MenuIcon />
        </button>
      </div>
    </div>
    <div className={`${styles.hiddenLinks} ${openLinks ? styles.show : ''}`}>
          <Link href="/Home">მთავარი</Link>
          <Link href="/CarLoan">ავტო სესხი</Link>
          <Link href="/CarLoan">სამომხმარებლო სესხი</Link>
          <Link href="/Avtolombardi">ავტოლომბარდი</Link>
          <Link href="/Contact">კონტაქტი</Link>
        </div>
    </>
  );
}

export default Navbar;
