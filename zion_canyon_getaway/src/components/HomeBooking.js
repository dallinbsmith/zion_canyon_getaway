import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import BookingCard from './BookingCard';

const styles = (theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
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
        color: '150E0E',
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

function Blog(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.layout}>
                <main>
                    {/* Main featured post */}
                    <Paper className={classes.mainFeaturedPost}>
                        <Grid container spacing={40}>
                            <Grid align = "center" item md>
                                <h1>blah</h1>
                                <h1>blah</h1>
                            </Grid>
                            <Grid align = "center" item md>
                                <BookingCard/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={24}>
                            <Grid direction="row" align="center" md={12}>
                                <Grid md={6}>
                                    <Typography variant="h5" color="inherit" paragraph>
                                        Multiple lines of text that form the
                                        lede, informing new readers quickly and
                                        Multiple lines of text that form the
                                        lede, informing new readers quickly and
                                        efficiently about what&apos;s most
                                        interesting in this post&apos;s
                                        contents… Multiple lines of text that
                                        form the lede, informing new readers
                                        quickly and efficiently about
                                        what&apos;s most interesting in this
                                        post&apos;s contents… efficiently about
                                        what&apos;s most interesting in this
                                        post&apos;s contents…
                                    </Typography>
                                </Grid>
                                    <Grid container className={classes.cardGrid}>
                                        <Grid md={12}>
                                            <Card className={classes.card}>
                                                <div
                                                    className={
                                                        classes.cardDetails
                                                    }
                                                >
                                                    <CardContent>
                                                        <Typography
                                                            component="h2"
                                                            variant="h5"
                                                        >
                                                            Something
                                                        </Typography>
                                                        <Typography
                                                            variant="subtitle1"
                                                            color="textSecondary"
                                                        >
                                                            Something
                                                        </Typography>
                                                        <Typography
                                                            variant="subtitle1"
                                                            paragraph
                                                        >
                                                            Something
                                                        </Typography>
                                                        <Typography
                                                            variant="subtitle1"
                                                            color="primary"
                                                        >
                                                            Continue reading...
                                                        </Typography>
                                                    </CardContent>
                                                </div>
                                                <Hidden xsDown>
                                                    <CardMedia
                                                        className={
                                                            classes.cardMedia
                                                        }
                                                        image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                                                        title="Image title"
                                                    />
                                                </Hidden>
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
                                <Typography variant="h6" gutterBottom>
                                    About
                                </Typography>
                                <Typography>
                                    Etiam porta sem malesuada magna mollis
                                    euismod. Cras mattis consectetur purus sit
                                    amet fermentum. Aenean lacinia bibendum
                                    nulla sed consectetur.
                                </Typography>
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

Blog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);