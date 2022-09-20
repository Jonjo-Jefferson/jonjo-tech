import React from 'react';
import { MainWeather } from '../components/MainWeather';
import Navbar from '../components/Navbar';
import ReactDOM from 'react-dom';
import { Hero } from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}
