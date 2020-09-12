import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" 

                />

                <div className="home__row">
                    <Product title='The lean startup' price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
                        rating={4}
                    />
                    <Product
                    id="49538094"
                    title="Kenwood Mix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price={239.0}
                    rating={4}
                    image="https://appliancist.com/wp-content/uploads/2016/07/kenwood-stand-mixer-kmix-kmx56.jpg"/>
                </div>

                <div className="home__row">
                <Product 
                    id="49038509"
                    title="Fitbit Exercise Tracker"
                    price={199.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466.jpg"
                />
                <Product 
                    id="23445930"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6287/6287974_sd.jpg"
                />
                <Product 
                    id="3254354345"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg"
                />
                   
                </div>

                <div className="home__row">
                <Product 
                    id="34248576"
                    title="Samsung CHG90 Series Curved Gaming Monitor 49' "
                    price={699.99}
                    rating={4}
                    image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6115/6115611_sd.jpg"
                />
                    
                </div>
            </div>
         
        </div>
    )
}

export default Home
