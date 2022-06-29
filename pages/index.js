import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link replace href='/portfolio'>
            Portfolio Link
          </Link>
        </li>
        <li>
          <Link replace href='/clients'>
            Client Link
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
