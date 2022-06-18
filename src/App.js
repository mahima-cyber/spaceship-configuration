import logo from './logo.svg';
import './App.css';
import { useState } from "react";
function App() {
  const [color,Setcolor]=useState();
  const [power,Setpower]=useState();
  const [warp,Setwarp]=useState();
  const[pakage,Setpakage]=useState();
  const Baseprice =1000
    const [active, setActive] = useState("");
    const [active2,setActive2] =useState("");
    const [active3,setActive3] =useState("");
    const [active4,setActive4] =useState("");
    // const handleClick = (event) => {
    //   setActive(event.target.id);
    // }
     //setPrice  =(1000)
  const  white =(e)=>{
Setcolor(0,true)
setActive(e.target.id);
  }
  const blue =(e)=>{
Setcolor(100)
setActive(e.target.id);
  }
  const green =(e)=>{
    Setcolor(200)
    setActive(e.target.id);
      }
  const zero=(e)=>{
    Setpower(0)
    setActive2(e.target.id);
  }
  const one=(e)=>{
    Setpower(100)
    setActive2(e.target.id);
  }
  const two=(e)=>{
    Setpower(500)
    setActive2(e.target.id);
  }
  const no=(e)=>{
    Setwarp(0)
    setActive3(e.target.id);
  }
  const yes=(e)=>{
    Setwarp(200)
    setActive3(e.target.id);
  }
  const basic=(e)=>{
    Setpakage(0)
    setActive4(e.target.id);
  }
  const sport=(e)=>{
    Setpakage(200)
    setActive4(e.target.id);
  } 
  const lux=(e)=>{
    Setpakage(600)
    setActive4(e.target.id);
  }
  

  return (
   <center> <div className='container'>
      <center>
   <h2 style={{color:"yellow", textDecorationLine: 'underline',fontStyle: 'italic'}}> Spaceship Configurator</h2></center>
  
   <h3 style={{color:"yellow"}}>Select colour:</h3>
   <button  onClick={white}  id={"1"}
   className={active === "1" ? "active" : "button white"}
   class="button white" >red<br/> $0</button>{ '   '}
    <button onClick={blue} key={2} id={"2"} 
     className={active === "2" ? "active" : "button blue"}
    class="button blue">blue<br/> $100</button>
    <button onClick={green} key={3} id={"3"}
    className={active === "3" ? "active" :"button green"}
    class="button green">green<br/> $200</button>
    

    <h3 style={{color:"yellow"}}>select power</h3>

    <button onClick={zero} key={4} id={"4"}
    className={active2 === "4" ? "active2" :"button power1"}
    class ="button power1">100 MW<br/>$00</button>{" "}

    <button onClick={one} key={5} id={"5"}
    className={active2 === "5" ? "active2" :"button power2"}
    class ="button power2">200 MW<br/>$100</button>{" "}

    <button  onClick ={two} key={6} id={"6"} 
    className={active2 === "6" ? "active2" :"button power3"}
    class ="button power3">400 MW<br/>$500</button>


    <h3 style={{color:"yellow"}}>warp drive</h3>

    <button onClick ={no} key={7} id={"7"}
     className={active3 === "7" ? "active3" :"button power1"}
    class ="button power1">NO <br/> $00</button>{" "}

    <button onClick ={yes} key={8} id={"8"}
      className={active3 === "8" ? "active3" :"button power1"}
    class ="button power2">YES <br/>$200</button>{" "}
    

    <h3 style={{color:"yellow"}}>Select pakage</h3>

    <button onClick ={basic} key={9} id={"9"} 
    className={active4 === "9" ? "active4" :"button basic"}
    class ="button basic">basic <br/> $00</button>{" "}

    <button onClick ={sport}key={10} id={"10"} 
    className={active4 === "10" ? "active4" :"button sport"}
    class ="button sport">sport <br/>$200</button>{" "}

    <button onClick ={lux}key={11} id={"11"} 
     className={active4 === "11" ? "active4" :"button lux"}
    class ="button lux">lux <br/>$600</button>{" "} 

   <p style={{color:"yellow"}}> Base Price:{Baseprice}$</p>
  <p style={{color:"yellow"}}>color:{color}$</p>
   <p style={{color:"yellow"}}>power:{power}$</p>
   <p style={{color:"yellow"}}>warp:{warp}$</p>
   <p style={{color:"yellow"}}>select pakage:{pakage}$</p>
   <p style={{color:"red"}} > <h2>Total Ammount :{Baseprice+color+power+warp+pakage} $</h2></p>
   </div></center>
   
  );
}
export default App;
