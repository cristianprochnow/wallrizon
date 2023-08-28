export interface InterfaceExtraParamsForURL {
  date?: string
  start_date?: string
  end_date?: string
  count?: number
  thumbs?: boolean
}

export interface InterfaceResponseAPI extends Response {
  copyright: string
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
  error: {
    code: string
    message: string
  }
}