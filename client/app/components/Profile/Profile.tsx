import React, {FC, useState} from 'react'
import SideBarProfile from './SideBarProfile'
import { userLoggedOut } from '@/redux/features/auth/authSlice';
import { useLogOutQuery } from '../../../redux/features/auth/authApi';
import { signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
// import { useLogOutQuery } from '@/redux/features/auth/authApi';


type Props = {
  user:any;
}

const Profile:FC<Props> = ({user}) => {
  const [scroll, setScroll] = useState(false);
  const [avatar, setAvatar] = useState
  (null);
  const [logout, setLogout] = useState(false);
  const {} = useLogOutQuery(undefined, {
    skip: !logout ? true : false,
  });
  const [active, setActive] = useState(1); 
  
  const logOutHandler = async () => {
    try {
      await signOut();
      console.log("Successfully signed out");
      // setLogout(true); // Comment out temporarily
      redirect("/");
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };
  

  if(typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 85) {
        setScroll(true);
      }else {
        setScroll(false);
      }
    });
  }



  return (
    <div className='w-[85%] flex mx-auto'>
      <div className={`w-[60px] 800px:w-[310px] h-[450px] dark:bg-slate-900 bg-opacity-90 border bg-white dark:border-[#ffffff1d] border-[#0000003b] rounded-[5px] shadow-xl dark:shadow-sm mt-[80px] sticky ${scroll ? "top-[120px]" : "top-[30px]"
    }left-[30px]`}
    >
      <SideBarProfile
      user = {user}
      active={active}
      avatar={avatar}
      setActive={setActive}
      logOutHandler={logOutHandler}
      />
    </div>
    </div>
  )
}

export default Profile