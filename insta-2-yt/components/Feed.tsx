import React from 'react'
import Posets from './Posets'
import Stories from './Stories'
import MiniPorfile from './MiniPorfile'
import Sugestions from './Sugestions'
import { useSession } from 'next-auth/react'




const Feed = () => {
  const {data: session} = useSession();
  return (
   <main><div className= {`grid grid-cols-1 md:grid-cols-1 md:max-w-3xl xl:grid-cols-2 xl:max-w-6xl mx-auto ${!session &&"!grid-col-1 !max-w-3xl"}` }>
       <section >
       {/* Stories */}
       <Stories />
        <Posets />
      
      
     
       {/* post */}
       </section>
       {session &&(

           <section className="hidden xl:inline-grid md:col-span-1">
           <div className=' fixed top-20 '>
           <MiniPorfile  />
           <Sugestions />
           </div>
           
            {/* <Suggestion /> */}
       
         </section>
       ) }

       
       </div>
   </main>
  )
}

export default Feed