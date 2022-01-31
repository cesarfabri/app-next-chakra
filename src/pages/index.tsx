import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image'
import styles from './home.module.scss';
import girlWork from '../../public/images/avatar.svg'
import { SubscribeButton } from '../components/SubscribeButton';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>DI Adm</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Bem Vindo!!!! </span>
          <h1>Você está na área <span>ADM</span> da DI Center</h1>
          <p>Para acessar os cadastros, escolha o desejado no <br />
          <span> menu acima</span>
          </p>
          <SubscribeButton />
        </section>

        <Image src={girlWork} alt="Girl working" objectFit='contain'/>
      </main>
    </>
  )
}

export default Home
