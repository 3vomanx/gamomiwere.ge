import React from "react";
import { useEffect } from "react";
import ContactBox from "../components/ContactBox";
import Logo from "../public/loan-website-logo.webp";
import styles from "../styles/Contact.module.css";
import Head from "next/head";
import Link from 'next/link'
import Image from 'next/image'


function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.leftSide}>
            <Image src={Logo} alt='logo' width={40} height={90} unoptimized={true} />
        </div>
        <div className={styles.rightSide}>
            <div>
                <Link href="/privacy">კონფიდენციალურობა</Link>
                <Link href="/contact">კონტაქტი</Link>
            </div>
        </div>
    </div>
  )
}

function Contact() {
  useEffect(() => {
    // Add the ID to the body element when the component mounts
    document.body.id = "contact-page";

    // Clean up the ID when the component unmounts
    return () => {
      document.body.id = "";
    };
  }, []);

  return (
    <div className={styles.contact}>
      <Head>
        <meta charSet="utf-8" />
        <title>კონტაქტი | Gamomiwere.ge</title>
        <meta property="og:title" content="კონტაქტი | Gamomiwere.ge" />
        <link rel="canonical" href="https://gamomiwere.ge/contact" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className={styles.contactOptions}>
        <ContactBox
          title={"ელ-ფოსტა"}
          content={"contact@gamomiwere.ge"}
          icon={Logo}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
