import { clientMessages } from 'recro/core'

function handleEvent(e) {
  if (e.data.sender !== 'recro' && e.data.consumer !== window.name && e.data.consumer !== '*') {
    return
  }

  document.body.style.width = '100%'
  const el = document.getElementById('display')
  const { width, height } = el.getBoundingClientRect()

  el.innerHTML = `payload: ${e.data.payload}, consumer: ${e.data.consumer}`
  clientMessages.generateResizeMessage(width, height)

  if (e.data.channel === 'NAVIGATION_CHANGE') {
    const data = JSON.parse(e.data.payload)
    window.history.pushState({}, '', data.pathname)
  }
}

window.addEventListener('message', handleEvent, false)

window.addEventListener(
  'load',
  () => {
    document.body.style.width = 400
    document.body.style.height = 50
    const { width, height } = document.body.getBoundingClientRect()

    clientMessages.generateReady()
    clientMessages.generateResizeMessage(width, height)
  },
  false,
)
