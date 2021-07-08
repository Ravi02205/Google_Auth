import React ,{useState} from 'react';
// import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import Homepage from "./Homepage/Homepage";
import "./App.css";
// or
// import { GoogleLogin } from 'react-google-login';


const App=()=>{
    const [flag,setFlag] = useState(false);
    const responseGoogle = (response) => {
        setFlag(true);
      console.log(response);
    }
    if(flag===false){
    return (
      <div className='App'>
        <h1>Login with Google</h1>

        <GoogleLogin
          clientId='325608355336-ojoerovrqd5h8anb2ikio1al9bmvfsj6.apps.googleusercontent.com'
          buttonText='Login'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    )
    }
    else if(flag===true){
       return (
           <>
           <Homepage/>
           </>
       )
    }

   
    
}


export default App;


