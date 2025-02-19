'use client'

//list of imports to different pages
const navigation = [
  { name: 'Listings', href: '/listings' },
  { name: 'About Us', href: '/about' },
  { name: 'Sign-Up', href: '/sign/login' },
  { name: 'Creating', href: '/create'},
]


export default function More(){
    return (
        <div className="relative">
        <div>
          {/* Display Login first then add Sign-up next
          if user is already signed up replace login tab with profile */}
          <form>

            


          </form>
        </div>
      </div>
    );
}