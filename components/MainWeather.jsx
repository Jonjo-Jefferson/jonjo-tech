import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import { useState } from 'react';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Weather from '../components/Weather';

export const MainWeather = () => {
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

      <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 px-4 text-white z-10'>
        <form
          onSubmit={fetchWeather}
          className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl'
        >
          <div>
            <input
              onChange={(e) => setCity(e.target.value)}
              className='bg-transparent border-none text-b focus:outline-none text-2xl prose lg:prose-xl'
              type='text'
              placeholder='Search city'
            />
          </div>
          <button className='w-5' onClick={fetchWeather}>
            <MagnifyingGlassIcon />
          </button>
        </form>
      </div>
      {weather.main && <Weather data={weather} />}
    </div>
  );
};
