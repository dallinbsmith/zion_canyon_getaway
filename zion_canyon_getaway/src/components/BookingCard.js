import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 245,
    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
};

function ImgMediaCard(props) {
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Zion Vacation Rental"
                    className={classes.media}
                    height="140"
                    image= "/test1.jpg"
                    title="Zion Vacation Rental"
                />
                <CardContent>
                    <Grid container spacing={40}>
                        <Grid align = "center" item md>
                            <h1>$455/Night</h1>
                        </Grid>
                        <Grid item md>
                            <Button size="large" color="primary">
                                Book
                            </Button>
                        </Grid>
                    </Grid>
                    <Typography component="p">
                        Townhome within 45 min Drive of Zion National Park
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions />
        </Card>
    );
}

ImgMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);
