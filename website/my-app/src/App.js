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
        <Route path={"/My Findings"} exact element={<Findings refresh={refresh} />} />
        <Route path="/Predict Injury Severity" exact element={<Model refresh={refresh}/>} />      
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
