import React, { Component } from 'react';
import Slider from 'react-slick';
import CardMedia from '@material-ui/core/CardMedia';

export default class Responsive extends Component {
    render(props) {
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            focusOnSelect: true,
            centerMode: true,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <CardMedia
                            component="img"
                            alt="Zion Vacation Rental"
                            className="card-media"
                            height="610"
                            image={require(`../../../media/jpg/${
                                this.props.photo1
                            }.jpg`)}
                            title="Zion Vacation Rental"
                        />
                    </div>
                    <div>
                        <CardMedia
                            component="img"
                            alt="Zion Vacation Rental"
                            className="card-media"
                            height="610"
                            image={require(`../../../media/jpg/${
                                this.props.photo2
                            }.jpg`)}
                            title="Zion Vacation Rental"
                        />
                    </div>
                    <div>
                        <CardMedia
                            component="img"
                            alt="Zion Vacation Rental"
                            className="card-media"
                            height="610"
                            image={require(`../../../media/jpg/${
                                this.props.photo3
                            }.jpg`)}
                            title="Zion Vacation Rental"
                        />
                    </div>
                    <div>
                        <CardMedia
                            component="img"
                            alt="Zion Vacation Rental"
                            className="card-media"
                            height="610"
                            image={require(`../../../media/jpg/${
                                this.props.photo1
                            }.jpg`)}
                            title="Zion Vacation Rental"
                        />
                    </div>
                    <div>
                        <CardMedia
                            component="img"
                            alt="Zion Vacation Rental"
                            className="card-media"
                            height="610"
                            image={require(`../../../media/jpg/${
                                this.props.photo2
                            }.jpg`)}
                            title="Zion Vacation Rental"
                        />
                    </div>
                    <div>
                        <CardMedia
                            component="img"
                            alt="Zion Vacation Rental"
                            className="card-media"
                            height="610"
                            image={require(`../../../media/jpg/${
                                this.props.photo3
                            }.jpg`)}
                            title="Zion Vacation Rental"
                        />
                    </div>
                </Slider>
            </div>
        );
    }
}
