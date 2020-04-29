import { useState, useEffect } from 'react'

import { request } from './utils'

const configServerUri = 'http://localhost:8888'

export function useAppsConfig() {
  const [config, setConfig] = useState([])

  useEffect(() => {
    const [promise, abort] = request(configServerUri)
    promise
      .then((data) => {
        setConfig(data)
      })
      .catch(() => setConfig(null))
    return () => abort()
  }, [])

  return config
}
