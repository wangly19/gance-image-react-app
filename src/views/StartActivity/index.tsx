import React from 'react';
import './index.scss';
import Style from '@material-ui/icons/Style';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { IconButton } from '@material-ui/core';


function Start (props: any) {
  /** 
   * 从本地获取用户模型是否存在，如果存在就直接跳转到首页
   */
  // const getUserMode = () => {
  //   const localModel = new Storage();
    
  // }
  /**
   * 跳转到登录页面
   */
  const goToLoginActivity = () => { 
    props.history.push('/login')
  }
  return (
    <div className="start-activity">
      <Style className="camera-icon" />
      <h4 className="tip-text">打开生活，发现美好</h4>
      {/* <div className="next--btn">
        <ArrowForward/>
      </div> */}
      <IconButton className="next--btn" onClick={ goToLoginActivity }>
        <ArrowForward/>
      </IconButton>
    </div>
  )
}

export default Start
