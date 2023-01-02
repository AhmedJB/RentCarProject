import React, {useContext, useState} from 'react'
import {FaUserEdit} from "react-icons/fa"
import Header from "../../components/General/Header";
import Footer from "../../components/Footer"
import { UserContext } from '../../contexts/User';
import { adduser, get_token } from '../../utils';
import {toast} from "react-toastify"
import Checker from '../../components/General/Checker';


function Auth() {

  const [open,setOpen] = useState(false);
  const [user,setUser] = useContext(UserContext);

  const [userData,setUserData] = useState({});
  const [infoData,setInfoData] = useState({});
  const [loginData,setLoginData] = useState({});

  const handleUserData = (e) => {
    let t = e.target;
    let temp = {...userData};
    temp[t.name] = t.value;
    setUserData(temp);
  }

  const handleLoginData = (e) => {
    let t = e.target;
    let temp = {...loginData};
    temp[t.name] = t.value;
    setLoginData(temp);
  }

  const handleInfoData = (e) => {
    let t = e.target;
    let temp = {...infoData};
    temp[t.name] = t.value;
    setInfoData(temp)
  }

  const login = async (e) =>{
    e.preventDefault()
    await handleRespLogin(loginData)
    
  }

  const handleRespLogin = async (b) => {
    let resp = await get_token(b);
    if (resp) {
      let temp = {...user}
      temp.logged = true;
      temp.user = resp;
      setUser(temp)
      toast.success("logged in")
    }else{
      toast.error("failed login")
    }
  }

  const register = async (e) => {
    e.preventDefault();
    let params = {
      ...infoData,
      user : userData
    }

    console.log("params");
    console.log(params);
    let resp = await adduser(params);
    if (resp){
      toast.success("Registered");
      handleRespLogin(userData);
      
    }else{
      toast.error("Failed registering")
    }
  }




  const handleToggle = () => {
    console.log("clicked")
    setOpen(!open);

  }
  return <>
  <Checker login={true}>
  <Header></Header>
    <div className='pt-30 pb-[450px] mb-28'>
      <div className="Auth_pen_title"></div>
      <div className={"Auth_container " + (open ? " Auth_active " : "")}>
        <div className="Auth_card">      
        </div>
        <div className="Auth_card">      
          <h1 className="Auth_title">Login</h1>
          <form>
            <div className="Auth_input_container">
              <input type="#{type}" id="#{label}" onChange={handleLoginData} required="required" name="userName" />
              <label for="#{label}">Username</label>
              <div className="Auth_bar" />
            </div>
            <div className="Auth_input_container">
              <input type="#{type}" id="#{label}" onChange={handleLoginData} required="required" type="password" name="password" />
              <label for="#{label}">Password</label>
              <div className="Auth_bar" />
            </div>
            <div className="Auth_buttonContainer" onClick={login}>
              <button className="Auth_button"><span>Go</span></button>
            </div>
            
            

          </form>





        </div>
        <div className="Auth_card Auth_alt">
          <div  className="Auth_toggle flex items-center justify-center">
           {
            !open && <FaUserEdit onClick={handleToggle}   className="text-[.7em]" />
           } 
          </div>
          <h1 className="Auth_title">Register
            <div className="Auth_close" onClick={handleToggle}>

            </div>
          </h1>
          <form>
          <div className="Auth_input_container">
              <input type="#{type}" id="#{label}" required="required" onChange={handleInfoData} name="nom" />
              <label for="#{label}">First name</label>
              <div className="Auth_bar" />
          </div>
          <div className="Auth_input_container">
              <input type="#{type}" id="#{label}" required="required" onChange={handleInfoData} name="prenom" />
              <label for="#{label}">Last name</label>
              <div className="Auth_bar" />
            </div>
            <div className="Auth_input_container">
              <input type="#{type}" id="#{label}" required="required" onChange={handleInfoData} name="address" />
              <label for="#{label}">Address </label>
              <div className="Auth_bar" />
            </div>
            <div className="Auth_input_container">
              <input type="#{type}" id="#{label}" required="required" onChange={handleInfoData} name="telephone" />
              <label for="#{label}">Telephone</label>
              <div className="Auth_bar" />
            </div>
            <div className="Auth_input_container">
              <input type="#{type}" id="#{label}" required="required" onChange={handleInfoData} name="email" />
              <label for="#{label}">Email</label>
              <div className="Auth_bar" />
            </div>
            <div className="Auth_input_container">
              <input type="#{type}" id="#{label}" required="required" onChange={handleUserData} name="username" />
              <label for="#{label}">Username</label>
              <div className="Auth_bar" />
            </div>
            <div className="Auth_input_container">
              <input type="#{type}" id="#{label}" required="required" onChange={handleUserData} type="password" name="password" />
              <label for="#{label}">Password</label>
              <div className="Auth_bar" />
            </div>
            <div className="Auth_input_container">
              <input type="#{type}" id="#{label}" required="required" type="password" name="confirmPassword" />
              <label for="#{label}">ConfirmPassword</label>
              <div className="Auth_bar" />
            </div>
            <div className="Auth_input_container flex items-center ">
              
                <div className="Auth_input_containeA" >
                  <h2  className='labeltype'>Type</h2>
              </div>


                <div className="Auth_input_containeB flex justify-end items-center w-full" >
                      <select className="Auth_input_containeSelector " onChange={handleInfoData} name="utype">
                        <option>particulier</option>
                        <option>Agence</option>
                      </select>
                      
 {/*  <select className="Auth_input_container_options" name="utype">
                    <option value="particuler">particulier</option>
                    <option value="agence">Agence</option>
                  </select> */}

                </div>
                {/* <div className="Auth_bar" /> */}
            </div>
            



            <div className="Auth_buttonContainer">
              <button className="Auth_button" onClick={register}><span>Next</span></button>
            </div>

          </form>
        </div>

      </div>
      </div>


      <Footer/>

  </Checker>
      
  </>
}

export default Auth  