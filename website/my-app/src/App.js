import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Landing from './Pages/Landing';
import theme from './theme';
import NavBar from './Components/NavBar';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Findings from './Pages/Findings';
import Model from './Pages/Model.jsx';
import Explore from './Pages/Explore';
import Contact from './Pages/Contact';


function App() {

  const [refresh, setRefresh] = useState(false);

  const refreshApp = () => {
    console.log("refreshing app");
    setRefresh(!refresh);
  }

  useEffect(() => {
    console.log("Refreshed...")
  }, [refresh])


  return (
    <div className="App h-full w-full">
    <BrowserRouter>
      <NavBar refreshApp={refreshApp} />
      <Routes>
        <Route path="/" exact element={<Landing />} />      
        <Route path={"/MyFindings"} exact element={<Findings refresh={refresh} />} />
        <Route path={"/PredictInjurySeverity"} exact element={<Model refresh={refresh}/>} />    
        <Route path={"/ExploreFARS"} exact element={<Explore refresh={refresh} />} />
        <Route path={"/ContactMe&MoreInfo"} exact element={<Contact refresh={refresh} />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
