import React from 'react'

import { useRecroContext } from 'recro/host'

export default function Trigger() {
  const context = useRecroContext()

  const trigger = () => context.messagingService.publish({ message: 'message' })

  return <button onClick={trigger}>Fire</button>
}
