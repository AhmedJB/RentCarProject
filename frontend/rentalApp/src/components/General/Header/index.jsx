import React,{useState} from 'react'
import { VscHistory } from 'react-icons/vsc'
import { MdFavorite } from 'react-icons/md'
import { GiCharacter } from 'react-icons/gi'
import {BiLogOut,BiAddToQueue} from 'react-icons/bi'
import logo from "../../../assets/general/logo.png"
import { useContext } from 'react'
import { UserContext } from '../../../contexts/User'
import { logout } from '../../../utils'
import { Link } from "react-router-dom";


function Header() {
  const  [logged,setLogged] = useState(true);
  const [user,setUser] = useContext(UserContext);
  
  //Change Header Background When Scrolling
  const[color,setColor]=useState(false);
  const changeColor = ()=>{
    console.log("Scrolllll");
    if(window.scrollY > 90){
      setColor(true);

    }
    else{
      setColor(false);
    }
  }

  const handleLogout = () => {
    logout(setUser);
  }

  window.addEventListener('scroll',changeColor)

  return (
  <header className={color ? 'w-full absolute z-20 _header _headerbg':'w-full absolute z-20 _header'}>
      <nav className="container mx-auto flex items-center justify-between py-1  ">
        <div id="logo">
          <a href="HomePage.html">
            <img src={logo} alt="logo" height="150px" width="100px" />
          </a>
        </div>
        {
          !logged && <ul className={"flex items-center gap-10  text-lg font-medium  cursor-pointer "+ (color ? "text-white" : "text-mainBlack")}>
          
          <a>
            <li className="hover:scale-110 transition-all ">
              Offers
            </li>
          </a>

          <a>
            <li className=" w-[100px] p-2 text-center rounded-[4px] shadow-sm bg-mainBlue hover:scale-105 transition-all">
                Login
            </li>
          </a>
        </ul>
        }

        {
          logged &&  
          <ul className={ "flex items-center gap-10  text-lg font-medium  cursor-pointer " + (color ? "text-white" : "text-mainBlack")}>
          
          <a>
            <li class="li_logo" onClick={handleLogout}>
                <BiLogOut />
            </li>
          </a>
          
          <Link to={"/offreHistoric"}>
            <li class="li_logo"> 
            <VscHistory />
            </li>
          </Link>

          <Link to={"/offreFavorites"}>
            <li class="li_logo">
            <MdFavorite />
            </li>
          </Link>

          <Link to={"/createoffrepage"}>
            <li class="li_logo">
            <BiAddToQueue />
            </li>
          </Link>

          <a>
            <li class="li_logo">
                <GiCharacter/>
            </li>
          </a>

          
        </ul>
        }
        
      </nav>
    </header>
  );
}

export default Header