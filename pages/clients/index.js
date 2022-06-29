import React from 'react'

import Link from 'next/link'
const ClientsPage = () => {
  const clients = [
    { id: 'max', name: 'Alessio Simoya' },
    { id: 'zambe', name: 'Zambrotta Simoya' },
    { id: 'mena', name: 'Menard Simoya' },
    { id: 'wale', name: 'Walenso Simoya' },
  ]
  const secondClients = [
    { id: 'max_ten', name: 'Alessio Simoya' },
    { id: 'zambe_ten', name: 'Zambrotta Simoya' },
    { id: 'mena_ten', name: 'Menard Simoya' },
    { id: 'wale_ten', name: 'Walenso Simoya' },
  ]
  return (
    <div>
      {' '}
      <h1>Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ClientsPage
