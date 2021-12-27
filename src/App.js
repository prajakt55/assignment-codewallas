import React, { useState} from 'react';
// import index from './index.css';
import LoginForm from './LoginForm';
function App(){
  const adminUSer = {
    email: "admin@admin.com",
    password:"admin123"
  }
//hooks here
  const [user, setUser] = useState({name:"",email:""});
  const [error,setError] = useState("");

  //for a login
  const Login = details => {
    console.log(details);

    if(details.email == adminUSer.email && details.password == adminUSer.password){
      console.log('Logged in');
      setUser({
        name: details.name,
        email: details.email
      });
    }else{
      console.log("Details do not match")
      setError("Details do not match")
    }
  }

  // const button = {border:'1px solid black'}
  const styleObj = {
    fontSize: 14,
    color: 'red',
    border:"1px solid black",
    borderRadius: "25% 10%",
    cursor:"pointer"
}
  //for logout
  const Logout = () => {
    // console.log("Logout")
   setUser({ name:"", email:""}) ;
  }
  return(
    <div className="App">
{(user.email !== "") ? (
  <div className="welcome" >
    <h2>Welcome, <span>{user.name}</span></h2>
    <button onClick={Logout} style={styleObj}>Logout</button>
  </div>
):(
<LoginForm Login={Login} error={error}/>
)}
  </div>
  )}

export default App;