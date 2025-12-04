import { useState } from 'react'
import Head from '../Components/Head'
import { Provider } from 'react-redux'
import AppStore from '../Reduxstore/Appstore'
import Menu from '../Components/Menu'
import MiniSidebar from '../Components/Minisidebar'
import VideoFeed from '../Components/Videofeed'

function App() {

  return (
    <>
    <Provider store = {AppStore}>
      <Head />
      <div className="flex">
  <Menu className="p-80 m-40" />
  <MiniSidebar />
  <VideoFeed />
</div>

      
      </Provider>
     
    </>
  )
}

export default App
