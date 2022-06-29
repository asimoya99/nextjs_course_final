import { useRouter } from 'next/router'
import React from 'react'

const ClientsProjectsPage = () => {
  const router = useRouter()

  console.log(router.query)

  function loadProjectHandler() {
    //load data ..
    router.push('/clients/max/projecta')
  }
  return (
    <div>
      <h1>The Project of a given Client</h1>

      <button onClick={loadProjectHandler}>
        Load Project A for {router.query.id}{' '}
      </button>
    </div>
  )
}

export default ClientsProjectsPage
