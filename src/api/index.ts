import http from '../plugin/axios'

function loginAPI () {
  return http({
    url: '/mock',
    method: 'get'
  })
}

// @ts-ignore
export default {
  loginAPI
}
