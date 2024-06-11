import React from 'react';
import './about.css';
import about from './about.svg'
import aboutheading from './aboutheading.svg';
import car from './car.svg';

function HomePage() {
  return (
    <div className="aboutclass">
      <div className='aboutheadingclass'>       <img src={aboutheading} alt="aboutheading" className="aboutheading" />
      </div>
        <div class="about-us">
            <div class="container">
                <div class="spannerA"></div>
                <img src={car} alt="Car" className="car-animation" />
                <div class="spanner"></div>

                <p class="responsive-paragraph">

Mr. Bean Token is a unique cryptocurrency created for fans and enthusiasts of the iconic character, Mr. Bean. This token celebrates the whimsical and humorous world of Mr. Bean, providing a platform for fans to connect, share, and enjoy exclusive content and experiences. Whether you're a lifelong fan or new to the antics of Mr. Bean, this token is your gateway to a community that appreciates the charm and hilarity of one of television's most beloved characters.

Features:
Exclusive Content: Access to rare and behind-the-scenes Mr. Bean content.
Community Engagement: Participate in fan forums, events, and discussions.
Merchandise and Collectibles: Exclusive Mr. Bean-themed merchandise and digital collectibles.
Fan Gallery: Showcase fan art and creations inspired by Mr. Bean.

Join the Mr. Bean Token community and become a part of the cult following that has cherished Mr. Bean's unique humor and timeless appeal!</p>
               
            </div>
        </div>
    </div>
  );
}

export default HomePage;

