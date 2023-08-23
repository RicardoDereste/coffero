import React from 'react'
import aboutImg from "../../assets/img/about-img.jpg"
import {FiCheck} from "react-icons/fi"
import "./about.css"

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="about__grid container grid">
                <div className="about__img-wrapper">
                    <img src={aboutImg} alt="" className="about__img" />
                </div>
                <div className="about__content">
                    <h2 className="section__title title-left" data-title='About Us'>Fresh Quality And Organic Tasty Coffee House For You</h2>
                    <p className="about__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget mi laoreet, malesuada velit eu, aliquam purus. Fusce a pretium sapien, a feugiat turpis. Suspendisse elementum odio a metus condimentum dignissim. Sed eget ipsum dolor. Vestibulum consectetur eget erat rutrum elementum.
                    </p>

                    <div className="about__details grid">
                        <p className="about__details-description">
                            <FiCheck />
                            At vero eos et accusamus et iusto odio
                        </p>

                        <p className="about__details-description">
                            <FiCheck />
                            Established fact that a reader will be distracted
                        </p>

                        <p className="about__details-description">
                            <FiCheck />
                            Sed ut perspiciatios unde omnis iste natus sit
                        </p>
                    </div>

                    <a href="#team" className="btn">
                        Our Experts
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About