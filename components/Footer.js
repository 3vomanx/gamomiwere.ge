import React from 'react'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import Logo from "../public/loan-website-logo.webp"
import Image from 'next/image'
function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.leftSide}>
            <Image src={Logo} alt='logo' unoptimized={true} width={40} height={90} />
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

export default Footer
