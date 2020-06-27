import React, { useState } from 'react';
import BackToNav from '@/components/backToNav/index';
import LoginModule from './login.module.scss';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import FormControl from "@material-ui/core/FormControl";
import NearMe from '@material-ui/icons/NearMe';
import CloseIcon from '@material-ui/icons/Close';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Button, Snackbar  } from '@material-ui/core';
import { Validation } from '@/tools/util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHdd } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Storage from '@/tools/local';

function Login (props: any) {
  // 登录表单
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
    code: '',
    codeStatus: true,
  });

  // 错误处理
  const [errorRule, setErrorRule] = useState({
    username: false,
    password: false,
    code: false
  })

  // 是否显示密码
  const [passwordStatus, setPasswordStatus] = useState(true);

  // 验证码
  const [authCode, setAuthCode] = useState({
    codeStatus: false,
    codeToast: false,
    codeData: ''
  })

  /**
   * 输入事件
   */
  const handleChange = (prop: string) => (event: any): void => {
    setErrorRule({
      ...errorRule,
      [prop]: event.target.value ? false : true
    })
    setLoginData({
      ...loginData,
      [prop]: event.target.value
    });
  };

  /**
   * 切换密码显示状态
   */
  const handleClickPasswordStatus = (): void => {
    setPasswordStatus(!passwordStatus)
  };

  /**
   * 登录
   */
  const submitLoginForm = (): void => {
    Validation(errorRule, (res: boolean): void => {
      Storage.setData<string>('token', '1')
    })
  }

  /**
   * 发送手机验证码
   */
  const sendAuthCode = (): void => {
    // 生成一个code
    const code: string = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    setAuthCode({
      ...authCode,
      codeStatus: true,
      codeToast: true,
      codeData: code
    });
  }

  return (
    <div className={ LoginModule.loginActivity }>
      <BackToNav history={ props.history } />
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={ authCode.codeToast }
        message={ `当前生成的验证码: ${authCode.codeData}` }
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={ () => (setAuthCode({
              ...authCode,
              codeToast: false
            })) }>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }/>
      <div className={ LoginModule.LoginMain }>
        <h1 className={ LoginModule.welcomeText }>欢迎来到雅图</h1>
        <form className={ LoginModule.loginForm } noValidate autoComplete="off">
          <div className={ LoginModule.formItem }>
            <FormControl variant="outlined" className={ LoginModule.inputWitth }>
              <InputLabel htmlFor="input-with-icon-adornment">请输入账号</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type="text"
                error={ errorRule.username }
                value={ loginData.username }
                onChange= { handleChange('username') }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility" edge="end">
                      <NearMe/>
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={ 80 }
              />
            </FormControl>
          </div>
          <div className={ LoginModule.formItem } style={ { display: loginData.codeStatus ? 'none' : '' } }>
            <FormControl variant="outlined" className={ LoginModule.inputWitth }>
              <InputLabel htmlFor="outlined-adornment-password">请输入密码</InputLabel>
              <OutlinedInput
                error={ errorRule.password }
                id="outlined-adornment-password"
                type={ passwordStatus ? 'password' : 'text' }
                value={ loginData.password }
                onChange= { handleChange('password') }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility" edge="end"
                      onClick={ handleClickPasswordStatus }>
                      { passwordStatus ? <VisibilityOff/> : <Visibility /> }
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={ 80 }
              />
            </FormControl>
          </div>
          <div className={ LoginModule.formItem } style={ { display: loginData.codeStatus ? '' : 'none' } }>
            <FormControl variant="outlined" className={ LoginModule.inputWitth }>
              <InputLabel htmlFor="outlined-adornment-password">验证码登录</InputLabel>
              <OutlinedInput
                error={ errorRule.code }
                id="outlined-adornment-password"
                type="text"
                value={ loginData.code }
                onChange= { handleChange('code') }
                endAdornment={
                  <InputAdornment position="end">
                    <Button variant="contained" color="primary" disableElevation
                      onClick= { sendAuthCode }
                      className={ LoginModule.authCode }>
                      { authCode.codeStatus ? '重新发送' : '获取验证' }
                    </Button>
                  </InputAdornment>
                }
                labelWidth={ 80 }
              />
            </FormControl>
          </div>
          <div className={ LoginModule.formItem }>
            <h5>未注册的手机号验证后自动创建摄图账号</h5>
          </div>
          <div className={ LoginModule.formItem }>
            <Button variant="contained" size="large" disableElevation
            onClick= { submitLoginForm }
            className={ LoginModule.submitButton }>
              进入雅图
            </Button>
          </div>
      </form>
        <div className="rests-icon">
          <IconButton aria-label="close" color="inherit">
            <FontAwesomeIcon icon={ faCoffee }/>
          </IconButton>
          <IconButton aria-label="close" color="inherit">
            <FontAwesomeIcon icon={ faHdd }/>
          </IconButton>
        </div>
        <div className="deal-link">
          登录后，默认同意<Link to="/">用户协议</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
