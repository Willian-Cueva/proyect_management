import React from 'react'

export default function Recurso({href,text="Recurso"}) {
  return (
    <a href={href} className="text-secondary" style={{marginLeft: "6px"}} target="_blank">{text}</a>
  )
}
