import React from 'react';
import './index.scss';
import CallMissed from '@material-ui/icons/CallMissed';

export default function CardItem() {
  return (
    <div className="card-view">
      <img
        className="card-view__img"
        src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg" alt=""/>
      <h3 className="card-view__title">鱼儿戏水</h3>
      <p className="cellName">
        happly to days !!!!
        <span>
          <CallMissed/>
          1024
        </span>
      </p>
    </div>
  )
}
