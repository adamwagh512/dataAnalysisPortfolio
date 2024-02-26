"use client"
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import data_cert from '../../public/assets/data_cert.png'
import concordia from '../../public/assets/concordia.png'
import Texas from '../../public/assets/University_texas.png'
import codecademy from '../../public/assets/codecademy.png'
import duke from '../../public/assets/duke.png'
export default class NextJsCarousel extends Component {
    render() {
        return (
            <div className="carousel-container py-10">
                
                <Carousel>
                    <div>
                        <Image src={data_cert} alt="google" />
                        
                    </div>
                    <div>
                        <Image src={codecademy} />
                        
                    </div>
                    <div>
                        <Image src={duke}/>
                    </div>
                    <div>
                        <Image src={Texas} />
                        
                    </div>
                    <div>
                        <Image src={concordia} alt="image2" />
                    </div>
                </Carousel>
            </div>
        );
    }
};