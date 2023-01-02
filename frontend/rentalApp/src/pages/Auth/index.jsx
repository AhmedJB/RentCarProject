import React, {useState} from 'react'
import {FaUserEdit} from "react-icons/fa"
import Header from "../../components/General/Header";
import Footer from "../../components/Footer"


function Auth() {

  const [open,setOpen] = useState(false);

  const handleToggle = () => {
    console.log("clicked")
    setOpen(!open);

  }
  return <>
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
              <input type="#{type}" id="#{label}" required="required" name="userName" />
              <label for="#{label}">Username</label>
              <div className="Auth_bar" />
            </div>
            <div className="Auth_input_container">
              <input type="#{type}" id="#{label}" required="required" type="password" name="password" />
              <label for="#{label}">Password</label>
              <div className="Auth_bar" />
            </div>
            <div className="Auth_buttonContainer">
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
              <input type="#{type}" id="#{label}" required="required" name="nom" />
              <label for="#{label}">First name</label>
              <div className="Auth_bar" />
          </div>
          <div className="Auth_input_container">
              <input type="#{type}" id="#{label}" required="required" name="prenom" />
              <label for="#{label}">Last name</label>
              <div className="Auth_bar" />
            </div>
            <div className="Auth_input_container">
              <input type="#{type}" id="#{label}" required="required" name="address" />
              <label for="#{label}">Address </label>
              <div className="Auth_bar" />
            </div>
            <div className="Auth_input_container">
              <input type="#{type}" id="#{label}" required="required" name="telephone" />
              <label for="#{label}">Telephone</label>
              <div className="Auth_bar" />
            </div>
            <div className="Auth_input_container">
              <input type="#{type}" id="#{label}" required="required" name="email" />
              <label for="#{label}">Email</label>
              <div className="Auth_bar" />
            </div>
            <div className="Auth_input_container">
              <input type="#{type}" id="#{label}" required="required" name="userName" />
              <label for="#{label}">Username</label>
              <div className="Auth_bar" />
            </div>
            <div className="Auth_input_container">
              <input type="#{type}" id="#{label}" required="required" type="password" name="password" />
              <label for="#{label}">Password</label>
              <div className="Auth_bar" />
            </div>
            <div className="Auth_input_container">
              <input type="#{type}" id="#{label}" required="required" type="password" name="confirmPassword" />
              <label for="#{label}">ConfirmPassword</label>
              <div className="Auth_bar" />
            </div>
            <div className="Auth_input_container flex flex-">
              
                <div className="Auth_input_containeA" >
                  <h2  className='labeltype'>Type</h2>
              </div>


                <div className="Auth_input_containeB flex flex-end" >
                      <select className="ml-24 mb-1 p-[2px] text-[18px] Auth_input_containeSelector " name="utype">
                        <option>particulier</option>
                        <option>Agence</option>
                      </select>
                      
 {/*  <select className="Auth_input_container_options" name="utype">
                    <option value="particuler">particulier</option>
                    <option value="agence">Agence</option>
                  </select> */}

                </div>
                <div className="Auth_bar" />
            </div>
            



            <div className="Auth_buttonContainer">
              <button className="Auth_button"><span>Next</span></button>
            </div>

          </form>
        </div>

      </div>
      </div>


      <Footer/>
  </>
}

export default Auth 