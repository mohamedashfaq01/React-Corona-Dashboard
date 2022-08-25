import { Grid, CardContent, Box, Typography, Card, makeStyles } from '@material-ui/core';
import CountUp from 'react-countup';

const useStyle = makeStyles({
    header: {
        background: '#F5F5F5',
        padding: 10
    },
    Infected: {
        borderBottom: "10px solid rgba(0, 0, 255, 0.5)"
    },
    Recovered: {
        borderBottom: "10px solid rgba(0, 255, 0, 0.5)"
    },
    Deaths: {
        borderBottom: "10px solid rgba(255, 0, 0, 0.5)"
    }
})

const CardComponent = ({ cardTitle, value, desc, lastUpdate }) => {
    const classes = useStyle();

    const getCardTitleCss = (cardTitle) => {
        return cardTitle === 'Infected' ? classes.Infected : cardTitle === 'Recovered' ? classes.Recovered : classes.Deaths;
    }

    return (
        <Grid component={Card} style={{ margin: 20 }} className={getCardTitleCss(cardTitle)}>
            <Box className={classes.header}>
                <Typography variant="h5" color="textSecondary">{cardTitle}</Typography>
            </Box>
            <CardContent>
                <Typography variant="h5">
                    <CountUp start={0} end={value} duration={3} seperator="," />
                </Typography>
                <Typography color="textSecondary">{desc}</Typography>
                <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            </CardContent>
        </Grid>
    );
}

export default CardComponent;