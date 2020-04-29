import React from 'react'

import { useRecroContext } from 'recro/host'

import './styles.scss'

export default function Trigger() {
  const context = useRecroContext()

  const trigger = () => context.messagingService.publish({ message: 'message' })

  return (
    <button className="trigger" onClick={trigger}>
      Send message
    </button>
  )
}
