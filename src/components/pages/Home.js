import React from "react";
/* import hero from "../src/images/pasta2.jpg";
import salad1 from "../src/images/salad1.jpg";
import truffleRisotto from "../src/images/truffleRisotto3.jpg";
import pasta from "../src/images/pasta2.jpg";
*/

function Home() {
    return (
       <main className="container">
        <section className="hero">
            <div className="content">
                <div>
                <h1>The Little Lemon</h1>
                <h2>Capri Italy</h2>
                <p className="">Dine under lemon trees on our outdoor terrace. 
                Enjoy some of our delicious Italian foods and wines.
                Here is where memories are made. 
                The Little Lemon has been a pillar of Capri since 1755.</p>
                </div>
                <img src={require('../images/LL_CapriPic1.jpg')} alt="hero image" className="hero-image"/>
                </div>
                
        </section>
        <section className="Highlights">
            <div className="hl-content">
                <div className="HL1">
                    <img src={require('../images/salad1.jpg')} alt="Salad1 image"/>
                    <h2>Capri Salad</h2>
                    <p>This new take on an old classic will leave 
                        you feeling glad you chose a salad today.</p>
                </div>
                <div className="HL2">
                    <img src={require('../images/truffleRisotto3.jpg')} alt="Truffle image"/>
                    <h2>Truffle Risotto</h2>
                    <p>Our most beloved dinner, and our top
                         rated dish. This Risotto isn’t like any 
                         you’ve had before.</p>
                </div>
                <div className="HL3">
                    <img src={require('../images/pasta2.jpg')} alt="pasta1" />
                    <h2>Little Lemon Pasta</h2>
                    <p>The pasta you'll love forever. It has sausage, 
                        peppers, Alfredo, and a little lemon. Plus our
                        secret blend of herbs and spices.</p>
                </div>
            </div>
        </section>
        <section className="Reviews">
            <div className="Review1">
                <h2>Mario G.</h2>
                <p>"My new favorite restaurant!
                    I loved every dish."</p>
            </div>
            <div className="Review2">
                <h2>Michelle F.</h2>
                <p>"Everything was perfect. I plan to be back soon."</p>
            </div>
            <div className="Review3">
                <h2>Austin B.</h2>
                <p>"The food was great. I just still can't believe this
                    restaurant was started by pirates."</p>
            </div>
        </section>
        <section className="HomeAbout">
            <div className="AboutContainer">
                <h1>About Our Restaurant</h1>
                <p>Founded by pirates, this restaurant has been a pillar
                     of the island of Capri for over 200 years.
                     Locals have loved the views and food here for a long time.</p>
                <img src={require('../images/LL_LemonsPic1.jpg')} alt="Lemons Image1"/>
                <img src={require('../images/LL_LemonsPic2.jpg')} alt="Lemons Image2"/>
            </div>
        </section>
       </main>
    )
}

export default Home;