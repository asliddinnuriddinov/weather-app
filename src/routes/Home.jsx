import React from 'react'
import Nav from '../components/nav/Nav'
import Container from '../utils/Utils'
import Main from '../components/main/Main'
import Map from '../components/map/Map'
import Additional from '../components/additional/Additional'
import "./Home.scss"
import { useSelector } from 'react-redux'

const Home = () => {
  const theme=useSelector(state=>state.themeReducer.themeState)
  return (
    <div className={theme=="dark"?"dark__home":"home"}>
        <Container>
        <Nav/>
        <Main/>
        <Map/>
        <Additional/>
        </Container>
    </div>
  )
}

export default Home