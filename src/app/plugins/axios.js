// import axios from 'axios';
// import axios from '@nuxtjs/axios'


export default function ({ $axios, $auth, store, req, redirect }) {
  $axios.onRequest(config => {
    // store.dispatch('loading/incrementLoadingCount')
    // if (config.url.indexOf($auth.strategies.auth0.options.domain) !== -1) {
    //   return config
    // }
    console.warn(66666)
    // if (process.server && req.headers['x-forwarded-for']) {
    //   config.headers.common['X-Front-Forwarded-For'] = req.headers['x-forwarded-for']
    // }
    // config.headers.common[constant.HEADER_FRONT_VERSION] = process.env.frontVersion
    return config
  })
  // $axios.onResponse(() => {
  //   store.dispatch('loading/decrementLoadingCount')
  // })
  // $axios.onError(e => {
  //   store.dispatch('loading/decrementLoadingCount')
  //   if (!e.response) {
  //     return Promise.reject({
  //       response: { data: { code: constant.UNKNOWN_ERROR_STATUS_CODE } }
  //     })
  //   }

  //   const statusCode = parseInt(e.response.status)

  //   if (statusCode === 503) {
  //     return Promise.reject({
  //       response: { data: { code: constant.MAINTENANCE_ERROR_STATUS_CODE } }
  //     })
  //   }

  //   if (statusCode === 401 ||
  //     statusCode === 409 ||
  //     (statusCode === 403 && constant.IP_ERROR_CODES.findIndex(code => code === e.response.data.code) !== -1) ||
  //     (statusCode === 403 && e.response.request.responseURL === $auth.strategies.auth0.options.endpoints.token)
  //   ) {
  //     if ($auth.$state.loggedIn) {
  //       redirect('/logout')
  //     }
  //   }
  // })
}
