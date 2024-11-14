import ExploreMore from "./components/ExploreMore"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import LanguageModal from "./components/LanguageModal"
import LatestSection from "./components/LatestSection"
import MerchMenu from "./components/MerchMenu"
import NavBar1 from "./components/NavBar1"
import NavBar2 from "./components/NavBar2"
import NavBar3 from "./components/NavBar3"
import NewInThisWeek from "./components/NewInThisWeek"
import NikeMembership from "./components/NikeMembership"
import ShopBySport from "./components/ShopBySport"
import ShopIcons from "./components/ShopIcons"
import React, { useState } from 'react';


function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="antialiased overflow-x-hidden">
      <NavBar1 />
      <NavBar2 />
      <NavBar3 />
      <Hero />
      <LatestSection />
      <ShopIcons />
      <ShopBySport />
      <NewInThisWeek />
      <ExploreMore />
      <NikeMembership />
      <MerchMenu />
      <Footer openModal={openModal}/>
      <LanguageModal isOpen={isModalOpen} onClose={closeModal}/>
    </main>
  )
}

export default App
