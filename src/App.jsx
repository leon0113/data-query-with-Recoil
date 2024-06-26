/* eslint-disable no-unused-vars */

import axios from 'axios'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { notifications, totalNotificationSelector } from './atoms'

function App() {
  return (<div>
    <MainApp />
  </div>)
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  console.log(networkCount);
  // useEffect(() => {
  //   // fetch
  //   axios.get("https://sum-server.100xdevs.com/notifications")
  //     .then(res => {
  //       setNetworkCount(res.data)
  //     })
  // }, [])

  return (
    <>
      <button>Home</button>

      <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App