import React from 'react';
import './backToNav.scss';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';

function BackToNav (props: any) {

  /**
   * 返回当前router的上一个堆栈
   */
  const onGoBack = () => {
    props.history.go(-1);
  }

  return (
    <div className="back-wrapper">
      <IconButton className="last-icon" onClick={ onGoBack }>
        <ArrowBack/>
      </IconButton>
    </div>
  )
}

export default BackToNav
