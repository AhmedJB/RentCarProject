import React,{useState,useContext, useEffect} from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";
import { UserContext } from '../../../contexts/User';
import { isLogged } from '../../../utils';
import Loader from '../Loader';

function Checker(props) {
    const [user,setUser] = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();





    useEffect(() => {

        isLogged().then(r => {
            if (r && user.user) {
                setLoading(false);
                
                let temp = {...user};
                if (!temp.logged){
                    temp.logged = true;
                setUser(temp);
                }
                
                if (props.login){
                    if (user.user.user.isAdmin){
                        navigate("/offreAdmin")
                    }else{
                        navigate("/offre")
                    }
                   
                }

                if (props.admin){
                    if (!user.user.user.isAdmin){
                        navigate("/offre")
                    }
                }
            }else{
                if (!props.login){
                    toast.error("Need login");
                    navigate("/auth")
                }  
                console.log("navigation here");
                setLoading(false);  
                
            }
        })

    },[user])

   

  return <>
    {loading && <div className="w-full h-screen">
            <Loader />
        </div>}

    {!loading && props.children}
    
  </>
}

export default Checker;