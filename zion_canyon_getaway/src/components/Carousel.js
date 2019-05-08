import React, { Component } from "react";
import Slider from "react-slick";
import BookCard from "./BookCard";

import BookingCard from "./BookingCard";

export default class FocusOnSelect extends Component {
    constructor() {
        super()
        this.state = {
            index: 0,
          };
        this.afterChangeHandler = this.afterChangeHandler.bind(this)
        }
    afterChangeHandler(currentSlide) {
        this.setState({
            index: currentSlide,
        })
}
    render() {
    const settings = {
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
    };
    const BookingCards = [
        {price: "$799",
        description: "Minutes away from breathtaking sights and activities and can sleep up to 16 people.",
        photo: 'BookingImg1'
    },
        {price: "$700",
        description: "somethin",
        photo: 'BookingImg1'
    },
        {price: "$1100",
        description: "whatever",
        photo: 'BookingImg1'
    },
        {price: "$700",
        description: "garbage",
        photo: 'BookingImg1'
    },
    ]
    return (
      <div>
          <Slider {...settings} afterChange={this.afterChangeHandler}>
        {/* <Slider {...settings afterChange={this.afterChangeHandler}}> */}
        {BookingCards.map((card, i) =>
        i === this.state.index ?     
            <BookCard key={i}
            price={card.price} 
            description = {card.description}
            photo = {card.photo}
            /> 
            
            : 
            
            <h1>{i}</h1>
      )}
        </Slider>
      </div>
    );
  }
}