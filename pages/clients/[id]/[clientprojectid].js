import React from 'react'

import { useRouter } from 'next/router'

const SelectedClientProjectPage = () => {
  const router = useRouter()
  console.log(router.query)
  return <div>SelectedClientProjectPage of givent client</div>
}

export default SelectedClientProjectPage
