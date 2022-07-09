/** @jsx jsx */
import { jsx, Container, Grid } from 'theme-ui';
import TrackVisibility from 'react-on-screen';
import SectionHeader from '../components/section-header';
import StatItem from '../components/stat-item';

const servicesNumber = (value) => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() +1;
    // const date = new Date().getDate();

    const digital = (year * month) / value;

    return digital;
}


const data = {
    stats: [
        {
            id: 1,
            value: servicesNumber(70),
            suffix: '+',
            title: 'Купання',
        },
        {
            id: 2,
            value: servicesNumber(110),
            suffix: '+',
            title: 'Стрижка',
        },
        {
            id: 3,
            value: servicesNumber(160),
            suffix: '',
            title: 'Стриппінг',
        },
        {
            id: 4,
            value: servicesNumber(600),
            suffix: '',
            title: 'Виставковий',
        },
        {
            id: 5,
            value: servicesNumber(200),
            suffix: '',
            title: 'СПА',
        },
        {
            id: 6,
            value: servicesNumber(300),
            suffix: '',
            title: 'Креативний',
        },
    ],
};

export default function Statistic () {
    return (
        <section id='statistic' sx={{ variant: 'section.statistic' }}>
            <Container>
                <SectionHeader
                    slogan="скільки улюбленців ми обслужили у поточному році"
                    title="Кількість наданих послуг"
                />
                <Grid sx={styles.statsGrid}>
                    {data.stats.map((stat) => (
                        <TrackVisibility key={stat.id} once>
                            <StatItem stat={stat} />
                        </TrackVisibility>
                    ))}
                </Grid>
            </Container>
        </section>
    );
};


const styles = {
    statsGrid: {
        justifyContent: 'space-between',
        gridTemplateColumns: [
            'repeat(2, 120px)',
            'repeat(3, 125px)',
            'repeat(3, 130px)',
            'repeat(5, 140px)',
            'repeat(6, 150px)',
        ],
    },
};
