import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Are you being sued?</title>
      </Head>
      <svg viewBox="0 7 30 30">
        <text x="0" y="20">NO*</text>
      </svg>
      <svg viewBox="0 23 427 15">
        <text x="0" y="35">* condition of being sued may vary, please consult your attorney</text>
      </svg>
    </div>
  );
}
// 