import Head from 'next/head';
import axios from 'axios';
import { useState } from 'react';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Weather from '../components/Weather';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
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
      <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10'>
        <form
          onSubmit={fetchWeather}
          className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-white text-white rounded-2xl'
        >
          <div>
            <input
              onChange={(e) => setCity(e.target.value)}
              className='bg-transparent border-none text-white focus:outline-none text-2xl'
              type='text'
              placeholder='Search City'
            />
          </div>
          <button
            className='btn btn-primary border-none'
            onClick={fetchWeather}
          >
            <MagnifyingGlassIcon className='w-6' />
          </button>
        </form>
      </div>
      {weather.main && <Weather data={weather} />}
    </div>
  );
}
