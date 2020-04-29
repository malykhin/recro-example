import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import './styles.scss'

export default function NavLink({ title, to }) {
  const match = useRouteMatch({
    path: to,
  })
  return (
    <Link className={match ? 'link active' : 'link'} to={to}>
      {title}
    </Link>
  )
}
