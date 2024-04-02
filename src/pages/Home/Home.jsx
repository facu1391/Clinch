import React from 'react'
import Layout from '../../components/Layout/Layout'
import HeroHome from '../../components/Heros/HeroHome/HeroHome'
import HomeCard from '../../components/Cards/HomeCard/HomeCard'
import ClientContainer from '../../components/Carousels/CarouselClient/ClientContainer/ClientContainer'
import ExperienceCard from '../../components/Cards/ExperienceCard/ExperienceCard'
import WhatsappButton from '../../components/Buttons/WhatsappButton/WhatsappButton'

const Home = () => {
  return (
    <Layout>
      <HeroHome/>
      <ClientContainer/>
      <HomeCard/>
      <ExperienceCard/>
      <WhatsappButton/>
    </Layout>
  )
}

export default Home
