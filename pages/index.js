import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <div className={styles.imgc}>
        <Image
          src="/see.jpg"
          width={350}
          height={400}
          alt="Picture of the author"
          className={styles.imgind}
        />
        <Image
          src="/city.jpg"
          width={350}
          height={400}
          alt="Picture of the author"
          className={styles.imgind}
        />
      </div>
      <Link href="/Extra/" className={styles.btn}>
        See Extra
      </Link>
    </div>
  )
}
