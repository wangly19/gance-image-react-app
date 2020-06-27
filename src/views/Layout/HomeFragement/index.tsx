import React from 'react';
import './index.scss';
import SearchBar from '@/components/SearchBar';
import CardImage from '@/components/CardImage';
 

export default function HomePage() {

  return (
    <div className="home-wrapper">
      <SearchBar></SearchBar>
      <CardImage/>
    </div>
  );
}
