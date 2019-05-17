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
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

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
    title: {
        color: '#E1702B',
    },
});

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

class BookingForm extends React.Component {
    state = {
        dropdown: 'dunno',
        dropdown2: 'alsodunno',
    };

    handleChange = (name) => (event) => {
        this.setState({
            [name]: event.target.value,
        });
    };
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                <Grid container direction="row">
                    <Grid container item md={5}>
                        <h1 className={classes.title}>Washington, UT</h1>
                        <hr />
                    </Grid>
                    <Grid container item md={7} />
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        className={classes.textField}
                        onChange={this.handleChange('currency')}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        helperText="Please select your currency"
                        margin="normal"
                        variant="outlined"
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </React.Fragment>
        );
    }
}

BookingForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookingForm);

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
                                <Grid item md={5} />
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
                                                    <BookingForm />
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
                            />
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
