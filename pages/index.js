import Head from 'next/head';
import axios from 'axios';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=dubai&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      console.log(response.data);
    });
    setCity('');
    setLoading(false);
  };

  return (
    <div>
      <Head>
        <title>Jonjo.tech</title>
      </Head>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]' />
      <Image
        alt='weather'
        src='https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        layout='fill'
        className='object-cover'
      />
    </div>
  );
}
