import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Are you being sued?</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-60956755-1', 'auto');
    ga('send', 'pageview');`,
          }}
        />
      </Head>
      <h1 className={styles.zero}>NO*</h1>
      <h1 className={styles.fucks}>* condition of being sued may vary, please check with your lawyer.</h1>
    </div>
  );
}
