import { useState } from "react";
import Timing from '@/components/Timer';

/*Make this a componet that can take differnt users that are
actually signed up to the website instead of premade */
const Users =[
  {
   username: 'William Reed',
   position: 'Property Owner',
   text: '"It helps me alot to get my different properties the advertisments thay need so I can sell quickly and efficiently!"',
   picture: 'https://images.unsplash.com/photo-1524854859347-bd2f42367134?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  {
    username: 'Diana Moore',
    position: 'Platform User',
    text: '"The process of finding a new home was incredibly easy and satisfying! My next home will absolutely be found here!"',
    picture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },

  {
    username: 'Judith Black',
    position: 'Platform User',
    text: '"Very quick and helpful! This site has it all, From the ability to create listings easily to finding listings in different states easily!"',
    picture: 'https://images.unsplash.com/photo-1533736970669-7edc3f971be1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  {
    username: 'Jeff Riverstone',
    position: 'Property Owner',
    text: '"It saves so much time and energy. It allows people to see the house without having to drive and look around first!"',
    picture: 'https://images.unsplash.com/photo-1619169312864-c81168058d7a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  {
    username: 'Jessie Atler',
    position: 'Platform User',
    text: `"Wouldn't want to use anything else. This site is amazing and has everything I need!!!"`,
    picture: 'https://images.unsplash.com/photo-1592621385612-4d7129426394?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
]

export default function Reviews() {

    const [CurrentTime, setCurrentTime] = useState(0);
    
    // Update the user index when the timer changes
    const updateTime = () => {
      setCurrentTime((prev) => (prev + 1) % Users.length);  // Cycle through users
  };
    
    return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-6 max-h-auto min-h-[2rem]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(90rem_20rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-right skew-x-[30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl flex flex-col justify-center items-center">
        <figure className="mt-10 leading-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p key={CurrentTime} className='animate-textTransition'>
              {Users[CurrentTime].text}
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              key={CurrentTime}
              alt=""
              src={Users[CurrentTime].picture}
              className="mx-auto size-10 rounded-full animate-textTransition"
            />

            <Timing cycleLength={Users.length} timeLength={5000} onTimeUpdate={updateTime} />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
            
            <div key={Users[CurrentTime].username} className="font-semibold text-gray-900 animate-fadding_Bottom" >
              <span>{Users[CurrentTime].username}</span>
            </div>

              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                <circle r={1} cx={1} cy={1} />
              </svg>

              <div key={CurrentTime} className="text-gray-600 animate-fadding_Bottom" >
                <span>{Users[CurrentTime].position}</span>
            </div>
            
            </div> 
    
          </figcaption>
        </figure>
      </div>
    </section>
    )
};
