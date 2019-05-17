import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import StarRate from '@material-ui/icons/StarRate';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        backgroundColor: '#FFF1D5',
    },
    cardText: {
        position: 'relative',
        fontFamily: 'Cinzel-Bold, serif',
        fontSize: '10px',
        lineHeight: '18px',
        paddingLeft: '12px',
        margin: '1px',
    },
    cardPrice: {
        fontSize: '22px',
    },
    cardLink: {
        textDecoration: 'underline',
        color: '#E1702B',
        fontSize: '14px',
        paddingLeft: '12px',
        margin: '0px',
        marginTop: '3px',
    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
    button: {
        fontSize: '12px',
        paddingBottom: '3px',
        backgroundColor: '#E1702B',
        color: '#FFFAEF',
    },
    gridContainer: {
        padding: '1px',
    },
    textPadding: {
        padding: '1px',
        margin: '1px',
    },
    starContainer: {
        paddingRight: '15px',
    },
    starRate: {
        color: '#E1702B',
    },
});

export default function BookCard(props) {
    const classes = useStyles();
    return (
        <div>
            <Card className="booking-card">
                <div>
                    <CardMedia
                        component="img"
                        alt="Zion Vacation Rental"
                        className="card-media"
                        height="310"
                        image= {require(`../../../media/png/${props.photo}.jpg`)}
                        title="Zion Vacation Rental"
                    />
                    <CardContent className="grid-container">
                        <Grid
                            container
                            direction="row"
                            spacing={16}
                            alignItems="center"
                        >
                            <Grid align="center" item md>
                                <h1 className="card-price">
                                    {props.price}
                                </h1>
                            </Grid>
                            <Grid item md>
                                <Button
                                    align="center"
                                    variant="contained"
                                    size="large"
                                    className={classes.button}
                                >
                                    Book
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" align="left">
                            <h6 className="card-text">
                                {props.description}
                            </h6>
                        </Grid>
                        <Grid container direction="row" alignItems="center">
                            <Grid align="left" item md>
                                <h6 className="card-link">More Info</h6>
                            </Grid>
                            <Grid className="star-container" item md>
                                <StarRate className="star-rate" />
                                <StarRate className="star-rate" />
                                <StarRate className="star-rate" />
                                <StarRate className="star-rate" />
                                <StarRate className="star-rate" />
                            </Grid>
                        </Grid>
                    </CardContent>
                </div>
            </Card>
        </div>
    );
}