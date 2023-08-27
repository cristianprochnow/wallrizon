/**
 * https://api.nasa.gov/
 */

import { API_KEY } from '@env'
import Dates from '../helpers/Dates'

interface InterfaceExtraParamsForURL {
  date?: string
  start_date?: string
  end_date?: string
  count?: number
  thumbs?: boolean
}

interface InterfaceResponseAPI {
  copyright: string
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
}

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

  async fetch(extraParams: InterfaceExtraParamsForURL): Promise<Response> {
    this.buildHTTPQueryParams(extraParams)
    this.buildURL()

    return fetch(this.url)
  }

  async fetchByDay(date: Date) {
    const formatDate = this.Dates.formatDate(date)

    const response = await this.fetch({ date: formatDate })

    console.log(response)
  }
}

export default NasaAPOD