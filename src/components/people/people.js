import React from 'react'
import './people.scss'
import { peopleData } from './peopleData'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function People() {


    return (
        <div className="people_container">
            <h2><span>P</span>eople</h2>

            <div className="people_carousel">
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={true}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 3,
                            partialVisibilityGutter: 30
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                    {peopleData.map((el, index) => {
                        return <div className="card" key={index}>
                            <img draggable={false} src={el.image} alt={el.name} />
                            <div className="img_filter"></div>
                            <h3>{el.name}</h3>
                            <p>{el.desc}</p>
                        </div>
                    })}

                </Carousel>
            </div>

        </div>
    )
}
