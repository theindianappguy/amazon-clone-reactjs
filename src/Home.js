import React from "react";
import "./Home.css";
import Product from "./Product";
import ProductH from "./ProductH";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/PostLaunch/Uber/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launchtall-hero_1500x600_1._CB405488972_.jpg"
          alt=""
        />

        <div className="home__row">
          <ProductH
            title="Do It Today: Overcome Procrastination, Improve Productivity, and Achieve More Meaningful Things Kindle Edition"
            price={"150.00"}
            image="https://m.media-amazon.com/images/I/41-G7AIOZyL.jpg"
            rating={4}
            desc="Are you also tired of putting off your dreams until “tomorrow?” Guess what! Tomorrow never comes. Am I right? 

I’ve procrastinated and putt off my desire to write a book for a decade. I always came up with excuses like, “it’s not the right time.” Or, “I need to do more research.” 

But in 2015 I got tired of this endless procrastination, and finally took action. Six months later, my first book was published....."
            noOfPeopleRated={244}
          />
          <ProductH
            title="Warren Buffett: 9 Daily Habits of Warren Buffett [Entrepreneur, Highly Effective, Motivation, Rich, Success]"
            price={"99.00"}
            image="https://m.media-amazon.com/images/I/51Xa962v-sL.jpg"
            rating={5}
            desc="Just another day? Don't sleep walk your life! Become Invincible: Quickly Master the 9 Daily Secret Habits of the Billionaire
These 9 habits led Warren Buffett to build over $83 billion in wealth. Traditional, effective and fast to implement, these 9 habits change the way you live instantly."
            noOfPeopleRated={554}
          />
        </div>

        <div className="home__row">
          <Product
            title="Think Like a Monk: The secret of how to harness the power of positivity and be happy now Kindle Edition"
            price={250.34}
            image="https://m.media-amazon.com/images/I/41mXQJF3aEL.jpg"
            rating={3}
            noOfPeopleRated={554}
          />
          <Product
            title="Attitude Is Everything: Change Your Attitude ... Change Your Life!"
            price={9.0}
            image="https://m.media-amazon.com/images/I/41SbRjQ+gCL._SY346_.jpg"
            rating={5}
            noOfPeopleRated={26}
          />
          <Product
            title="Chacha Chaudhary and Temple Theif"
            price={227.74}
            image="https://m.media-amazon.com/images/I/618x7Q-qHZL._SY346_.jpg"
            rating={3}
            noOfPeopleRated={344}
          />
        </div>

        <div className="home__row">
          <Product
            title="Zebronics 27.0 inch (68.5cm) LED Monitor"
            price={"23,299"}
            image="https://images-na.ssl-images-amazon.com/images/I/71T4NM5MO7L._SL1500_.jpg"
            rating={4}
            noOfPeopleRated={554}
          />
          <Product
            title="LG 27 inch 4K-UHD (3840 x 2160) HDR 10 Monitor (Gaming & Design) with IPS Panel, HDMI x 2, Display Port, AMD Freesync, Height Adjust & Pivot  - 27UK650 (White)"
            price={"34,500"}
            image="https://images-na.ssl-images-amazon.com/images/I/81%2BhBkbPZEL._SL1500_.jpg"
            rating={4}
            noOfPeopleRated={681}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
