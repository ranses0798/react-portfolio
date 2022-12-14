import React from 'react'

function Link({url='https://github.com/ranses0798', icon="fa-github"}) {
  return (
      <a href={url}>
        <i className={`fa ${icon}`}></i>
      </a>
  )
}

export default Link

