import { useState } from "react";
import './App.css';


function App() {
  const [details,setDetails]=useState({
    name:"",
    age:"",
    gender:"",
    occupation:"",
    isCool:false
})
const handelChange=(e)=>{
    const {name,value}=e.target;
    setDetails({...details,[name]:value})
}
// console.log(details)
return (
<div className="container">
<p>{`{name:${details.name},age:${details.age},gender:${details.gender},occupation:${details.occupation},isCool:${details.isCool}}`}</p>
  <div className="form">
    <form>
      <div className="input-controll" style={{ marginBottom: "20px" }}>
        <p>Name</p>
        <input type="text" name="name" value={details.name} onChange={handelChange}/>
      </div>
      <div className="input-controll" style={{ marginBottom: "20px" }} >
        <p>Age</p>
        <input type="text" name="age" value={details.age} onChange={handelChange}/>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <p>Gender</p>
        <input type="radio" name="gender" onChange={()=>{
            setDetails({...details,gender:"male"})
        }} />
        <label style={{ marginRight: "20px" }}>Male</label>
        <input type="radio" name="gender" onChange={()=>{
            setDetails({...details,gender:"Female"})
        }}/>
        <label style={{ marginRight: "20px" }}>Female</label>
        <input type="radio" name="gender" onChange={()=>{
            setDetails({...details,gender:"others"})
        }}/>
        <label style={{ marginRight: "20px" }}>others</label>
      </div>
      <div className="input-controll" style={{ marginBottom: "20px" }}>
        <p style={{ marginBottom: "20px" }}>Occupations</p>
        <select name="occupation" onChange={(e)=>{
            setDetails({...details,[e.target.name]:e.target.value})
        }} >
            <option>select</option>
          <option name="occupation" value="Frontend">Frontend</option>
          <option name="occupation" value="Backend">Backend</option>
          <option name="occupation" value="FullStack">FullStack</option>            
        </select>
      </div>
      <div  style={{ marginBottom: "20px" }}>
        <p>Are you cool</p>
        <input type="checkbox" onChange={()=>{
            setDetails({...details,isCool:!details.isCool})
        }}/><label>Of course I'm cool</label>
      </div>
    </form>
  </div>
</div>
);
};


export default App;
