// import { Application_ID, Application_Key } from '../../secrets'
import axios from 'axios'
import {isArray, reduce, isEmpty} from 'lodash'

const Application_ID = '7843a751'
const Application_Key = '025c33c427b571c756921f64f631862e'

export const getSearch = (query: any): any => {
  const queryString: string = isEmpty(query) ? '' : reduce(query, (result, queryVal, label) => {
    if (!queryVal) {
      return result
    } else if (isArray(queryVal)) {
      return reduce(queryVal, (insideResult, value) => {
        return `${insideResult}&${label}=${value.toLowerCase()}`
      }, result)
    }
    return `${result}&${label}=${queryVal.toLowerCase()}`
  }, '')

  return axios.get(`https://api.edamam.com/search?app_id=${Application_ID}&app_key=${Application_Key}&calories=0-2000` + queryString)
}