import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    card: {
        maxWidth: '205px',
        height: '220px',
        cursor: 'pointer',
        backgroundColor: '#FFF1D5',
        position: 'relative',
        top: '230px',
        marginLeft: '50px',
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
        fontSize: '15px',
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
});


export default function SmallCard(props) {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.card}>
                <div>
                    <CardMedia
                        component="img"
                        alt="Zion Vacation Rental"
                        className="card-media"
                        height="160"
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
                            <Grid container direction="row" alignItems="center">
                            <Grid align="center" item md>                                
                                <h4 className={classes.cardPrice}>
                                    {props.price}
                                </h4>
                            </Grid>
                            <Grid item md>
                                <Button
                                    align="center"
                                    variant="contained"
                                    size="small"
                                    className={classes.button}
                                >
                                    Book
                                </Button>
                            </Grid>
                        </Grid>
                        </Grid>
                    </CardContent>
                </div>
            </Card>
        </div>
    );
}