import * as superagent from 'superagent-bluebird-promise'
import {queryToString} from '../utils/utils'
import config from 'config'
const {API_ROOT} = config

console.log('API_ROOT:', API_ROOT)


function callApi(endpoint, {query, method='get', params, files}) {
  if (endpoint.indexOf(API_ROOT) === - 1) {
    endpoint = API_ROOT + endpoint
  }

  if(query) {
    endpoint = `${endpoint}?${queryToString(query)}`
  }

  let request = superagent[method](endpoint);

  if(files) {
    for(var k in params) {
      request = request.field(k, params[k])
    }

    for(var name in files) {
      request = request.attach(name, files[name], files[name].name)
    }
  } else if(params) {
    request = request.send(params)
  }

  return request
    .withCredentials()
    .then((res) => {
      const json = JSON.parse(res.text)

      if(res.statusText !== 'OK') {
        return Promise.reject(res)
      }
      return json
    })
}

export const CALL_API = 'Call API'

export default store => next => action => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint, method, query, params, files } = callAPI
  const { types, bailout } = callAPI

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }

  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  if (typeof bailout !== 'undefined' && typeof bailout !== 'function') {
    throw new Error('Expected bailout to either be undefined or a function.');
  }

  if (bailout && bailout(store.getState())) {
    return Promise.resolve();
  }
  function actionWith(data) {
      const finalAction = Object.assign({}, action, data)
      delete finalAction[CALL_API]
      return finalAction
  }

  const [requestType, successType, failureType] = types
  next(actionWith({ type: requestType }))

  return callApi(endpoint, {method, query, params, files}).then(
    response => next(actionWith({
      response, method, query, params,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  )
}
