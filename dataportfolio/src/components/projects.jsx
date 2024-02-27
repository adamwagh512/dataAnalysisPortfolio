import React from "react";
import Image from "next/image";
import Bike from "../../public/assets/bike.png";
import Link from "next/link";
import ProjectItem from "../components/projectItem";
import Insurance from '../../public/assets/insurance.png'
import Airbnb from '../../public/assets/airbnb.png'
import Tesla from '../../public/assets/tesla.png'
import Superstore from '../../public/assets/superstore.png'
import exceldashboard from '../../public/assets/exceldashboard.png'

const projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] py-0 mx-auto ">
        <div className="grid md:grid-cols-2 gap-3">
          <ProjectItem 
          title="Cyclistic Rideshare Analysis" 
          backgroundImg={Bike} 
          projectInfo='An in-depth examination to identify critical distinctions between casual riders and Members. This project seeks to uncover actionable insights aimed at enhancing membership conversion among casual riders'
          projectURL='/bike' />

          <ProjectItem 
          title="Medical Insurance Database Analysis" 
          backgroundImg={Insurance} 
          projectInfo='An analysis was conducted on health insurance costs considering various factors, providing insights into how these variables impact insurance premiums, aiding in informed decision-making for individuals and insurers alike'
          projectURL="/Insurance" />

          <ProjectItem 
          title="NYC Airbnb Analysis" 
          backgroundImg={Airbnb}
          projectInfo='An analysis was conducted on Airbnb data from New York City listings, resulting in a Tableau dashboard where users can filter by room type, zip code, reviews, and cost, facilitating a tailored exploration of accommodation options.' 
          projectURL="/Airbnb" />

          <ProjectItem 
          title="Tesla Stock Candlestick Chart" 
          backgroundImg={Tesla}
          projectInfo='Drawing from Tesla stock data, a candlestick chart was crafted to comprehensively analyze the stock price fluctuations, trends, and the prevailing market sentiment surrounding its stock over an extended period' 
          projectURL="/Tesla" />

          <ProjectItem 
          title="Superstore Dashboard" 
          backgroundImg={Superstore}
          projectInfo='Analyzed furniture superstore sales data highlights trends and customer preferences, supporting the case for a new distribution center with data-driven insights.' 
          projectURL="/Superstore" />

          <ProjectItem 
          title="Excel dashboard" 
          backgroundImg={exceldashboard}
          projectInfo='Excel dashboard data from a multinational clothing retailer offers insights into sales trends, customer behavior, and product performance globally, guiding strategic decisions for business growth' 
          projectURL="/Excel" />
        </div>
      </div>
    </div>
  );
};

export default projects;
