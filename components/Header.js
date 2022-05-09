
import Image from 'next/image'
import React from 'react'
import{
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon,
} from"@heroicons/react/outline";
import { signIn, signOut , useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';

const Header = () => {
  const { data : session } = useSession();
  const [open, setOpen] =  useRecoilState(modalState);
  const router = useRouter();
  return (
    <div  className='shadow-sm bg-white sticky top-0 z-50'>
      <div className='flex justify-between max-w-6xl mx-5 xl:mx-auto '>


  {/* Left */}
<div className=' relative hidden lg:inline-grid   w-24 cursor-pointer '>
  <Image onClick={()=> router.push('/')} src="https://links.papareact.com/ocw" layout='fill' objectFit='contain'/>
</div>

<div className='relative  lg:hidden flex-shrink-0 w-10  cursor-pointer'>
<Image onClick={()=> router.push('/')} src="https://links.papareact.com/jjm" layout='fill' objectFit='contain'/>
</div>


  {/* MIddle */}
<div className="max-w-xs">
  <div className="relative mt-1 p-3 rounded-md">
    <div className='absolute  inset-y-0 pl-3 flex items-center pointer-events-none'>
   <SearchIcon className='h-5 w-5 text-gray-500' />
    </div>
    <input className="bg-green-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
     type="text" placeholder='Search' />
  </div>
  </div>

  {/* Right */}
             <div className="flex items-center space-x-4">
      <HomeIcon onClick={()=> router.push('/')} className="navBtn"/>
      <MenuIcon className="h-6 md:hidden cursor-pointer"/>
       
   {session ? (
   <>
   <div className='relative navBtn'>
      <PaperAirplaneIcon className='navBtn rotate-45 '/>
      <div className='absolute top-1.5  right-2 w-3 h-3 bg-red-700 rounded-full flex items-center justify-center animate-pulse text-white'>
        3</div>
       </div>
      

      <PlusCircleIcon onClick={() =>setOpen(true)} className='navBtn'/>
      <UserGroupIcon className='navBtn' />
      <HeartIcon className='navBtn' />
      
      <img onClick={signOut} src={session.user.image}  alt="profile picture"  
      className='h-10 rounded-full cursor-pointer'
      />
       </>
     ):(
    <button onClick={signIn}>Sign In</button>
    
   
   )}

   
      
             </div>
       </div>
    </div>
  )
}

export default Header