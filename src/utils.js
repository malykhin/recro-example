export function request(url, options = {}, data) {
  const controller = new AbortController()
  const { signal } = controller

  const params = {
    method: options.method || 'GET',
    mode: options.mode || 'cors',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    signal,
  }
  if (options.body || data) {
    params.body = options.body || JSON.stringify(data)
  }
  const promise = fetch(url, params).then((response) => response.json())

  return [promise, controller.abort.bind(controller)]
}
