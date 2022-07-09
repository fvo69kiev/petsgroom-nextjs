/** @jsx jsx */
import {jsx, Container, Box, Text, Grid, Link } from 'theme-ui';
import TextFeature from '../components/text-feature';

import {
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaPhoneAlt,
    FaCommentDots,
    FaEnvelope,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaTelegramPlane,
} from "react-icons/fa";




const data = {
    subTitle: "наші координати",
    title: 'Контакти',
    features: [
        {
            id: 1,
            icon: <FaMapMarkerAlt />,
            title: 'м. Київ, вул. Генерала Наумова, 23',
            path: '/',
        },
        {
            id: 2,
            icon: <FaCalendarAlt />,
            title: 'Відчинені щодня з 09:00 до 20:00',
            path: '/',
        },
        {
            id: 3,
            icon: <FaPhoneAlt />,
            title: '+38(067)246-25-12',
            path: '/',
        },
        {
            id: 4,
            icon: <FaCommentDots />,
            title: 'Онлайн-чат',
            path: '/',
        },
        {
            id: 5,
            icon: <FaEnvelope />,
            title: 'grooming-salon@gmail.com',
            path: '/',
        },

    ],
    social: [
        {
            path: '/',
            icon: <FaFacebookF />,
        },
        {
            path: '/',
            icon: <FaTwitter />,
        },
        {
            path: '/',
            icon: <FaInstagram />,
        },
        {
            path: '/',
            icon: <FaTelegramPlane />,
        },
    ],
};


export default function Contacts() {
    return (
        <section id='contacts' sx={{ variant: 'section.contacts' }}>
            <Container sx={styles.containerBox}>
                <Box sx={styles.contentBox}>
                    <TextFeature subTitle={data.subTitle} title={data.title} />
                    <Grid sx={styles.grid}>
                        {data.features.map(({path, icon, title}, i) => (
                            <Box sx={styles.card} key={i}>
                                <Box as="span" sx={styles.social.icon}>
                                    <Link to={path}>{icon}</Link>
                                </Box>
                                <Text>{title}</Text>
                            </Box>
                        ))}
                    </Grid>
                    <Box sx={styles.social}>
                        {data.social.map(({ path, icon }, i) => (
                            <Box as="span" key={i} sx={styles.social.icon}>
                                <Link to={path}>{icon}</Link>
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box sx={styles.map}>
                    <iframe width='100%' height='500px' style={{border: 'none'}}
                            src="https://api.mapbox.com/styles/v1/landpage/cl4yaqb53001f14rx8893klbg.html?title=false&access_token=pk.eyJ1IjoibGFuZHBhZ2UiLCJhIjoiY2w0eWFrOXBlMXh0ODNkbWxpMjI4aTY2YyJ9.ig3n56tIZPe3sgnzkAy3Rw&zoomwheel=false#15.28/50.471604/30.335688">
                    </iframe>
                </Box>
            </Container>
        </section>
    );
}

const styles = {
    containerBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: ['wrap', null, null, 'nowrap'],
        pb: [0, 3, 0, null, 3],
    },
    contentBox: {
        flexShrink: 0,
        px: [0, null, '30px', 0],
        textAlign: ['center', null, null, 'left'],
        width: ['100%', '80%', null, 340, 400, 430, null, 485],
        pb: ['50px', '60px', null, 0],
        mx: ['auto', null, null, 0],
        '.description': {
            pr: [0, null, 6, 7, 6],
        },
    },
    grid: {
        pr: [2, 0, null, null, 6, '50px'],
        pl: [2, 0],
        pt: [2, null, null, null, 2],
        // mx: 'auto',
        width: ['100%', 370, 420, '100%'],
        gridGap: ['10px 0', null, null, null, '20px 0'],
        gridTemplateColumns: ['repeat(1,1fr)'],
    },
    card: {
        display: 'flex',
        alignItems: 'flex-start',
        transition: 'all 0.3s',
    },
    map: {
        display: 'inline-flex',
        position: 'relative',
        width: '100%',
        height: '100%',
        ml: ['auto', null, null, null, 5],
    },

    social: {
        width: '100%',
        display: 'flex',
        mt: [3, null, null, null, 5],
        // alignItems: 'left',
        // justifyContent: 'center',

        icon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'text',
            fontSize: 18,
            mr: '25px',
            transition: 'all 0.25s',
            cursor: 'pointer',
            ':last-child': {
                mr: '0',
            },
            '&:hover': {
                color: 'primary',
            },
        },
    },
};
