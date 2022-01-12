import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import HomePage from '../components/Homepage'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <HomePage />
      </div>
    </Layout>
  )
}
