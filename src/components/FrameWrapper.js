import React from 'react'
import cn from 'classnames'
import { useRecroContext } from 'recro/host'

import './styles.scss'

export default function FrameWrapper({ title, children, frameComponent, name }) {
  const context = useRecroContext(name)
  const state = context.state.get(name) || {}

  return (
    <div className="app_pretty_wrapper">
      {!state.isModalMode && <div className="frame_title">{title}</div>}
      <div className={cn('frame_wrapper', { fixed: state.isModalMode })}>
        <div className={cn('frame_insert', { shifted: !state.isModalMode })}>{children}</div>
        {state.isModalMode ? null : frameComponent}
      </div>
    </div>
  )
}
