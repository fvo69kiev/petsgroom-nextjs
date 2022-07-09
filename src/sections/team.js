/** @jsx jsx */
// import { jsx } from 'theme-ui';
import {jsx, Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import TeamCard from '../components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram, FaTelegramPlane } from 'react-icons/fa';

import Stephanie from '../assets/team/stephanie.jpg';
import Amanda from '../assets/team/amanda.jpg';
import Lindsey from '../assets/team/lindsey.jpg';
import Erica from '../assets/team/erica.jpg';
// import Member5 from 'assets/team/natalia.jpg';
import Ryann from '../assets/team/ryann.jpg';
// import Member7 from 'assets/team/karen.jpg';
import Marissa from '../assets/team/marissa.jpg';


const data = [
  {
    id: 1,
    imgSrc: Stephanie,
    altText: 'Стефанія - власниця салону',
    title: 'Стефанія',
    designation: 'Власниця салону / головний стиліст',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
      {
        id: 4,
        name: 'telegram',
        path: '#',
        icon: <FaTelegramPlane />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Amanda,
    altText: 'Аманда - провідний стиліст',
    title: 'Аманда',
    designation: 'Провідний стиліст',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
      {
        id: 4,
        name: 'telegram',
        path: '#',
        icon: <FaTelegramPlane />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Lindsey,
    altText: 'Ліндсі - провідний стиліст',
    title: 'Ліндсі',
    designation: 'Провідний стиліст',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
      {
        id: 4,
        name: 'telegram',
        path: '#',
        icon: <FaTelegramPlane />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Erica,
    altText: 'Еріка - професійний стиліст',
    title: 'Еріка',
    designation: 'Професійний стиліст',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
      {
        id: 4,
        name: 'telegram',
        path: '#',
        icon: <FaTelegramPlane />,
      },
    ],
  },
  // {
  //   id: 5,
  //   imgSrc: Member5,
  //   altText: 'Наталія - професійний стиліст',
  //   title: 'Наталія',
  //   designation: 'Професійний стиліст',
  //   socialProfile: [
  //     {
  //       id: 1,
  //       name: 'facebook',
  //       path: '#',
  //       icon: <FaFacebookF />,
  //     },
  //     {
  //       id: 2,
  //       name: 'twitter',
  //       path: '#',
  //       icon: <FaTwitter />,
  //     },
  //     {
  //       id: 3,
  //       name: 'instagram',
  //       path: '#',
  //       icon: <FaInstagram />,
  //     },
  //     {
  //       id: 4,
  //       name: 'telegram',
  //       path: '#',
  //       icon: <FaTelegramPlane />,
  //     },
  //   ],
  // },
  {
    id: 6,
    imgSrc: Ryann,
    altText: 'Райян - професійний стиліст',
    title: 'Райян',
    designation: 'Професійний стиліст',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
      {
        id: 4,
        name: 'telegram',
        path: '#',
        icon: <FaTelegramPlane />,
      },
    ],
  },
  // {
  //   id: 7,
  //   imgSrc: Member7,
  //   altText: 'Карен - професійний стиліст',
  //   title: 'Карен',
  //   designation: 'Професійний стиліст',
  //   socialProfile: [
  //     {
  //       id: 1,
  //       name: 'facebook',
  //       path: '#',
  //       icon: <FaFacebookF />,
  //     },
  //     {
  //       id: 2,
  //       name: 'twitter',
  //       path: '#',
  //       icon: <FaTwitter />,
  //     },
  //     {
  //       id: 3,
  //       name: 'instagram',
  //       path: '#',
  //       icon: <FaInstagram />,
  //     },
  //     {
  //       id: 4,
  //       name: 'telegram',
  //       path: '#',
  //       icon: <FaTelegramPlane />,
  //     },
  //   ],
  // },
  {
    id: 8,
    imgSrc: Marissa,
    altText: 'Марісса - професійний стиліст',
    title: 'Марісса',
    designation: 'Професійний стиліст',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
      {
        id: 4,
        name: 'telegram',
        path: '#',
        icon: <FaTelegramPlane />,
      },
    ],
  },
];

export default function Team() {
  return (
    <section id='team'>
      <Container>
        <SectionHeader
          slogan="наші майстри"
          title="Найбільш кваліфіковані та талановиті люди"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
