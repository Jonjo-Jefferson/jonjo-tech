import React from 'react';
import Navbar from '../components/Navbar';
import { Admech } from '../components/Warhammer/admech';
import { Orks } from '../components/Warhammer/orks';
import { useState } from 'react';
export default function Home() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  return (
    <div>
      <Navbar />
      <div className='text-center'>
        <button onClick={handleClick} className='btn btn-primary'>
          Change Army
        </button>
      </div>
      <div>{isShown && <Orks />}</div>
      <div>{!isShown && <Admech />}</div>
    </div>
  );
}
