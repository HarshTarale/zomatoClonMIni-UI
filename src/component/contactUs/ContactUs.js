import './ContactUs.css'


export function ContactUs(){
  

    return(
    <>
       <div className="contactUs-0">
             <nav className="contactUs-0-navbar">
                <h1 className="contactUs-0-navbar-h1">zomato</h1>
                  <div className="contactUs-0-search">
                      <i className="fa-solid fa-location-dot contactUs-0-search-i1"></i>
                      <input type="text" placeholder="Dattawadi, Shobhapur khas" className="contactUs-0-search-input-1" />
                      <i class="fa-solid fa-angle-down contactUs-0-search-i2"></i>                    
                        <input type="text" placeholder="Search for your reataurent, eg. Greenland Cafe" className="contactUs-0-search-input-2" />

                  </div>
                <div>
                     <a><button>log in</button></a>
                     <a><button>Sign up</button></a>
                </div>
             </nav>

       </div>
      
    
    
    
    </>
    )
}