import React from 'react';
import './index.scss';
import SearchBar from '@/components/SearchBar';
import CardItem from '@/components/CardItem';

export default function HomePage() {

  return (
    <div className="home-wrapper">
      <SearchBar></SearchBar>
      <div className="list">
        <CardItem/>
      </div>
    </div>
  );
}
