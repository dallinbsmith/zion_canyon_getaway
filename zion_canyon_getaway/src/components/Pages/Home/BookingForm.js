import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import { DateRangePicker } from 'react-dates';

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
    button: {
        fontSize: '12px',
        paddingBottom: '3px',
        backgroundColor: '#E1702B',
        color: '#FFFAEF',
    },
    bookingForm: {
        height: '450px',
        backgroundColor: '#FFF1D5',
        position: 'relative',
        top: '-300px',
        display: 'flex',
        flex: 1,
    },
    bookingFormTest: {
        height: '80px',
        backgroundColor: '#FFF1D5',
        position: 'relative',
        top: '-300px',
        display: 'flex',
        flex: 1,
    },
});

const currencies = [
    {
        value: 'USD',
        label: '1-2',
    },
    {
        value: 'EUR',
        label: '3-4',
    },
    {
        value: 'BTC',
        label: '5-8',
    },
    {
        value: 'JPY',
        label: '9-12',
    },
    {
        value: 'JPY',
        label: '13-16',
    },
    {
        value: 'JPY',
        label: '16+',
    },
];

class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: null,
        };
    }

    handleChange = (name) => (event) => {
        this.setState({
            [name]: event.target.value,
        });
    };
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Card className={this.state.focusedInput? classes.bookingForm : classes.bookingFormTest}>
                    <CardContent>
                        <CssBaseline />
                        <Grid container direction="row">
                            <Grid item md={10}>
                                <DateRangePicker
                                    startDateId="startDate"
                                    endDateId="endDate"
                                    startDate={this.state.startDate}
                                    endDate={this.state.endDate}
                                    onDatesChange={({ startDate, endDate }) => {
                                        this.setState({ startDate, endDate });
                                    }}
                                    focusedInput={this.state.focusedInput}
                                    onFocusChange={(focusedInput) => {
                                        this.setState({ focusedInput });
                                    }}
                                />
                            </Grid>
                            <Grid item md={2}>
                                <Button
                                    align="center"
                                    variant="contained"
                                    size="large"
                                    className={classes.button}
                                >
                                    Search
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </React.Fragment>
        );
    }
}

BookingForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookingForm);



























// function HomeBooking(props) {
//     const { classes } = props;
//     return (
//         <React.Fragment>
//             <CssBaseline />
//             <div className={classes.layout}>
//                 <main>
//                     {/* Main featured post */}
//                     <Paper className={classes.mainFeaturedPost}>
//                         <Grid container direction="column" spacing={0}>
//                             <Grid container direction="row" item>
//                                 <Grid item md={5} />
//                                 <Grid container item md={6}>
//                                     <Grid align="center" item md>
//                                         <Grid
//                                             className={
//                                                 classes.bookingCardContainer
//                                             }
//                                             align="center"
//                                         >
//                                             <h1 className={classes.title}>
//                                                 Booking
//                                             </h1>
//                                             <DiamondHr />
//                                             <Grid>
//                                                 <h4 className={classes.title}>
//                                                     Adventure and relaxation
//                                                     combined into one vacation
//                                                     rental.
//                                                 </h4>
//                                             </Grid>
//                                         </Grid>
//                                     </Grid>
//                                 </Grid>
//                             </Grid>
//                         </Grid>
//                         <Grid container direction="column" spacing={0}>
//                             <Grid align="center" item md={12}>
//                                 <Grid>
//                                     <Carousel />
//                                 </Grid>
//                             </Grid>
//                         </Grid>
//                         <Grid container direction="row">
//                             <Grid align="center" item md={12}>
//                                 <Grid container className={classes.cardGrid}>
//                                     <Grid item md={12}>
//                                         <Card className={classes.card}>
//                                             <div
//                                                 className={classes.cardDetails}
//                                             >
//                                                 <CardContent>
//                                                     <BookingForm />
//                                                 </CardContent>
//                                             </div>
//                                         </Card>
//                                     </Grid>
//                                 </Grid>
//                             </Grid>
//                         </Grid>
//                     </Paper>
//                     {/* End main featured post */}
//                     {/* Sub featured posts */}
//                     {/* End sub featured posts */}
//                     <Grid container spacing={40} className={classes.mainGrid}>
//                         {/* Main content */}
//                         <Grid item xs={12} md={8}>
//                             <Typography variant="h6" gutterBottom>
//                                 From the Firehose
//                             </Typography>
//                             <Divider />
//                         </Grid>
//                         {/* End main content */}
//                         {/* Sidebar */}
//                         <Grid item xs={12} md={4}>
//                             <Paper
//                                 elevation={0}
//                                 className={classes.sidebarAboutBox}
//                             />
//                         </Grid>
//                         {/* End sidebar */}
//                     </Grid>
//                 </main>
//             </div>
//             {/* Footer */}
//             <footer className={classes.footer}>
//                 <Typography variant="h6" align="center" gutterBottom>
//                     Footer
//                 </Typography>
//                 <Typography
//                     variant="subtitle1"
//                     align="center"
//                     color="textSecondary"
//                     component="p"
//                 >
//                     Something here to give the footer a purpose!
//                 </Typography>
//             </footer>
//             {/* End footer */}
//         </React.Fragment>
//     );
// }
