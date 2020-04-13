// import { Application_ID, Application_Key } from '../../secrets'
import axios from 'axios'
import _ from 'lodash'

const Application_ID = '7843a751'
const Application_Key = '025c33c427b571c756921f64f631862e'

export const getSearch = (query: object): object => {
  const queryString: string = _.map(query, (val, key) => {
    return key + '=' + val
  }).join('&')

  return axios.get(`https://api.edamam.com/search?app_id=${Application_ID}&app_key=${Application_Key}&` + queryString)
}