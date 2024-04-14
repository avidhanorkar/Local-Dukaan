import Advantages from "./Components/Advantages";
import Category from "./Components/Category";
import Feature from "./Components/Features";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App(){
  return(
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Category/>
      <Advantages />
    </>
  )
}

export default App;