import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../src/Routes'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Layout> */}
          <Routes />
          {/* </Layout> */}
        </div>
      </BrowserRouter>
    )
  }
}

export default App
