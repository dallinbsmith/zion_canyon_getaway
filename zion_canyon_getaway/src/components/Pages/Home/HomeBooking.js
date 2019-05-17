import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Carousel from './Carousel';
import DiamondHr from '../../../media/svg/DiamondHr';
import BookingForm from './BookingForm';

// import SmallCard from './SmallCard';

const styles = (theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1050 + theme.spacing.unit * 3 * 2)]: {
            width: 1050,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
    },
    mainFeaturedPost: {
        backgroundColor: '#FFFAEF',
        color: '#150E0E',
        marginBottom: theme.spacing.unit * 4,
    },
    mainFeaturedPostContent: {
        padding: `${theme.spacing.unit * 6}px`,
        [theme.breakpoints.up('md')]: {
            paddingRight: 0,
        },
    },
    mainGrid: {
        marginTop: theme.spacing.unit * 3,
    },
    card: {
        display: 'flex',
    },
    bookingCardContainer: {
        position: 'relative',
        top: '-180px',
    },
    title: {
        color: '#E1702B',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    markdown: {
        padding: `${theme.spacing.unit * 3}px 0`,
    },
    sidebarAboutBox: {
        padding: theme.spacing.unit * 2,
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing.unit * 3,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing.unit * 8,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
});

function HomeBooking(props) {
    const { classes } = props;
    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.layout}>
                <main>
                    {/* Main featured post */}
                    <Paper className={classes.mainFeaturedPost}>
                        <Grid container direction="column" spacing={0}>
                            <Grid container direction="row" item>
                                <Grid item md={5}/>
                                <Grid container item md={6}>
                                    <Grid align="center" item md>
                                        <Grid
                                            className={
                                                classes.bookingCardContainer
                                            }
                                            align="center"
                                        >
                                            <h1 className={classes.title}>
                                                Booking
                                            </h1>
                                            <DiamondHr />
                                        <Grid>
                                            <h4 className={classes.title}>
                                                Adventure and relaxation
                                                combined into one vacation
                                                rental.
                                            </h4>
                                        </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" spacing={0}>
                            <Grid align="center" item md={12}>
                                <Grid>
                                    <Carousel />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container direction="row">
                            <Grid align="center" item md={12}>
                                <Grid container className={classes.cardGrid}>
                                    <Grid item md={12}>
                                        <Card className={classes.card}>
                                            <div
                                                className={classes.cardDetails}
                                            >
                                                <CardContent>
                                                    <BookingForm/>
                                                </CardContent>
                                            </div>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                    {/* End main featured post */}
                    {/* Sub featured posts */}
                    {/* End sub featured posts */}
                    <Grid container spacing={40} className={classes.mainGrid}>
                        {/* Main content */}
                        <Grid item xs={12} md={8}>
                            <Typography variant="h6" gutterBottom>
                                From the Firehose
                            </Typography>
                            <Divider />
                        </Grid>
                        {/* End main content */}
                        {/* Sidebar */}
                        <Grid item xs={12} md={4}>
                            <Paper
                                elevation={0}
                                className={classes.sidebarAboutBox}
                            >
                            </Paper>
                        </Grid>
                        {/* End sidebar */}
                    </Grid>
                </main>
            </div>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="textSecondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}

HomeBooking.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeBooking);
