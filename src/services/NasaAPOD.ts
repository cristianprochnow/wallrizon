/**
 * https://api.nasa.gov/
 */

// @ts-ignore
import { API_KEY } from '@env'
import Dates from '../helpers/Dates'
import { InterfaceResponseAPI, InterfaceExtraParamsForURL } from '../types/NasaAPOD'

class NasaAPOD {
  baseURL: string
  queryParams: string
  url: string
  Dates: Dates

  constructor() {
    this.baseURL = `https://api.nasa.gov/planetary/apod`
    this.queryParams = ''
    this.url = ''
    this.Dates = new Dates()
  }

  buildHTTPQueryParams(extraParams: InterfaceExtraParamsForURL) {
    const params = [
      ['api_key', API_KEY]
    ]

    const keys = Object.keys(extraParams)
    const values = Object.values(extraParams)

    for (let x = 0; x < keys.length; x++) {
      params.push([keys[x], values[x]])
    }

    this.queryParams = params
      .map(keyValue => keyValue.join('='))
      .join('&')
  }

  buildURL() {
    this.url = `${this.baseURL}?${this.queryParams}`
  }

  async fetch(extraParams: InterfaceExtraParamsForURL): Promise<InterfaceResponseAPI> {
    this.buildHTTPQueryParams(extraParams)
    this.buildURL()

    console.log(this.url)

    const response = await fetch(this.url)
    const responseDecoded = await response.json()

    return responseDecoded
  }

  async fetchByDay(date: Date): Promise<InterfaceResponseAPI> {
    const formatDate = this.Dates.formatDate(date)

    return await this.fetch({ date: formatDate })
  }
}

export default NasaAPOD