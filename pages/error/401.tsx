import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Router from 'next/router'
import Link from 'next/link'
const FourOOne: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
            Unauthorized
        </h1>
        <h1>❌</h1>
        <p>Something went wrong when attempting to verify you.</p>
        <Link href='/'>
        <button>
            <h2><a>Go Home</a></h2>
        </button>
        </Link>
        </main>
    </div>
  )
}
export default FourOOne
