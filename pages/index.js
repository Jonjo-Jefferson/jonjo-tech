import Head from 'next/head';

const url = `https://api.openweathermap.org/data/2.5/weather?q=Bodmin&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jonjo.tech</title>
      </Head>
    </div>
  );
}
