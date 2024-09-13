
//<<<<-------------------------Home.js---------------------------------------->>>>

import featuredOrganizers from "../TopTierEventOrganizers/dataTopTier";
import DataVenuesEvents from "../UncoverVenues/Uncover VenuesData";
import TopTierEventOrganizer from "../TopTierEventOrganizers";
import { Organizersettings } from "./MuiData/Organizersettings";
import CategoryData from "../categoryCaoursel/categoryData";
import events from "../EventsWorldwideCard/dataWorldwide";
import CountryData from "../CountryEvents/dataEvent";
import { responsive } from "./MuiData/dataCoursel";
import featured from "../FeaturedEvents/dataFeatured";
import { Venuesettings } from "./MuiData/VenueSlider";
import CategoryCard from "../categoryCaoursel";
import CountryByEvents from "../CountryEvents";
import citesData from "../CityEvents/cityData";
import FeaturedItem from "../FeaturedEvents";
import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./MuiData/dataSlider";
import EventCard from "../EventsWorldwideCard";
import EventVenueCard from "../UncoverVenues";
import Carousel from "react-multi-carousel";
import CityByEvent from "../CityEvents";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Header from "../Header";
import Footer from "../Footer";
import React from "react";
import "./index.css";

const Home = () => {
  return (
    <div className="home-cnt">
      <Header />
      <div className="content-cnt">
        <h1 className="home-heading">
          Launch Your Next <span className="span-head">Success!</span>
        </h1>
        <ul className="list-content-cnt">
          <li className="list-item-name">All Events</li>
          <li className="list-item-name">Today's Highlights</li>
          <li className="list-item-name">Live Stream</li>
          <li className="list-item-name">Hot Picks</li>
          <li className="list-item-name">Community</li>
        </ul>
      </div>
      <div>
        <h2 className="category-heading">Explore Categories</h2>
        <div className="Carousel-card">
          <Carousel responsive={responsive} swipeable={true} draggable={true}>
            {CategoryData.map((cat) => (
              <CategoryCard
                key={cat.id}
                name={cat.name}
                events={cat.events}
                icon={cat.icon}
              />
            ))}
          </Carousel>
        </div>
      </div>
      <div className="featured-cnt">
        <h2 className="featured-heading">Top Events</h2>

        <Slider {...settings}>
          {featured.map((each) => (
            <FeaturedItem
              key={each.id}
              date={each.date}
              image={each.image}
              name={each.name}
              events={each.events}
            />
          ))}
        </Slider>
      </div>
      <div className="EventBycity">
        <h2 className="EventBycity-heading">Search Events by City</h2>
        <div className="CityByEvent-Card">
          {citesData.map((city) => (
            <CityByEvent
              key={city.id}
              image={city.image}
              name={city.name}
              events={city.events}
            />
          ))}
        </div>
      </div>
      <div className="EventByCountry">
        <h2 className="EventByCountry-heading">Search Events by Country</h2>
        <div className="EventByCountry-card">
          {CountryData.map((country, i) => (
            <CountryByEvents
              key={i}
              image={country.image}
              country={country.country}
              numberOfEvents={country.numberOfEvents}
            />
          ))}
        </div>
      </div>

      <div class="parent-container">
        <div class="Events-worldwide">
          <div class="Events-worldwide-1">
            <div class="Events-worldwide-2">
              <div class="Events-worldwide-cnt">
                <p class="main-text">
                  Join the largest community of event enthusiasts worldwide!
                </p>
                <p class="second-text">
                  <span style={{ fontWeight: "600", color: "black" }}>570</span>{" "}
                  individuals are finding new event opportunities every single
                  minute.
                </p>
              </div>
              <div class="Events-worldwide-button">
                <p>
                  8 Million+ <span style={{ fontWeight: 600 }}>Members</span>
                </p>
                <button id="joinNow">Join Now</button>
              </div>
            </div>
            <div class="Events-worldwide-card">
              <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
              >
                {events.map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className="Event-venue">
        <h2 className="Event-venue-heading">Uncover Venues</h2>

        <Slider {...Venuesettings}>
          {DataVenuesEvents.map((venue, i) => (
            <EventVenueCard key={i} venue={venue} />
          ))}
        </Slider>
      </div>
      <div className="Top-Orgainzer">
        <h2 className="Top-Orgainzer-heading">Top-Tier Event Organizers</h2>
        <h4 className="Top-Orgainzer-sub-heading">
          Top-Rated Event Management Professionals
        </h4>
        <Slider {...Organizersettings}>
          {featuredOrganizers.map((org, i) => (
            <TopTierEventOrganizer key={i} img={org} />
          ))}
        </Slider>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
