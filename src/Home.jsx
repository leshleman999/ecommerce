import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
               <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

                <div className="home__row">
                    <Product 
                        id="12341234" 
                        title="Best Choice Products 80in Outdoor Wooden Chicken Coop Multi-Level Hen House, Poultry Cage w/Ramps, Run, Nesting Box, Wire Fence, 3 Access Areas" 
                        price={249.99} 
                        rating={4} 
                        image="https://m.media-amazon.com/images/I/81iX6e4tEyL._AC_UL640_FMwebp_QL65_.jpg"
                    />
                    <Product 
                        id="25345234" 
                        title="PawHut 124 Dual Backyard Chicken Coops with Outdoor Ramps and Nesting Boxes" 
                        price={450.95} 
                        rating={3} 
                        image="https://m.media-amazon.com/images/I/81KQBVeQIXL._AC_UL640_FMwebp_QL65_.jpg"
                    />
                </div>  

                <div className="home__row">
                    <Product 
                        id="67897" 
                        title="Best Choice Products 70in Mobile Fir Wood Chicken Coop Tractor Hen House Poultry Cage for 3-5 Hens, Outdoor, Animal Care w/Wheels, 2 Doors, Nest Box, Removable Tray, UV Panel" 
                        price={239.99} 
                        rating={4} 
                        image="https://m.media-amazon.com/images/I/81tYApCvAML._AC_UL640_FMwebp_QL65_.jpg"
                    />
                    <Product 
                        id="1234123" 
                        title="Large Metal Chicken Coop Walk-in Poultry Cage Hen Run House Rabbits Habitat Cage Flat Roofed Cage with Waterproof and Anti-Ultraviolet Cover for Outdoor Backyard Farm Use (9.2' L x 12.5' W x 6.4' H)" 
                        price={279.99} 
                        rating={4} 
                        image="https://m.media-amazon.com/images/I/81MgexHCs0L._AC_UL640_FMwebp_QL65_.jpg"
                    />
                    <Product 
                        id="789678" 
                        title="ECOLINEAR 120'' Chicken Hutch w/Run Cage Outdoor Hen House Poultry Pet Wooden Coop Nest Box Garden Backyard" 
                        price={277.99} 
                        rating={3} 
                        image="https://m.media-amazon.com/images/I/91rxkvPUrdL._AC_UL640_FMwebp_QL65_.jpg"
                    />
                </div>  

                <div className="home__row">
                    <Product 
                        id="6586799"
                        title="Esright 81'' Large Rabbit Hutch, Large Chicken Coop, Wooden Bunny House, Outdoor Hen Cage with Ventilation Door, Removable Tray and Ramp" 
                        price={219.99} 
                        rating={4} 
                        image="https://m.media-amazon.com/images/I/91R+yGlYbkL._AC_UL640_FMwebp_QL65_.jpg"
                    />

                </div>  

            </div>
        </div>
    )
}

export default Home
