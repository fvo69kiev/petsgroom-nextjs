/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from 'theme-ui';
import SectionHeader from '../components/section-header';
import Rating from '../components/rating';
import ButtonGroup from '../components/button-group';
import Carousel from 'react-multi-carousel';

import Avatar1 from '../assets/reviews/client-1.png';
import Avatar2 from '../assets/reviews/client-2.png';
import Avatar3 from '../assets/reviews/client-3.png';
import Avatar4 from '../assets/reviews/client-4.png';
import Avatar5 from '../assets/reviews/client-5.png';
import Avatar6 from '../assets/reviews/client-6.png';
import Avatar7 from '../assets/reviews/client-7.png';
import Avatar8 from '../assets/reviews/client-8.png';

const data = [
  {
    id: 1,
    title: 'Модельна стрижка',
    description:
      'Нещодавно приводила свого песика на стрижку і залишилася дуже задоволена. Швидка та професійна робота, затишна атмосфера та привітний персонал. Грумер відповіла на всі мої питання і дала корисні поради щодо подальшого догляду за вихованцем.',
    avatar: Avatar1,
    name: 'Ірина Лобач',
    designation: '@Lobach-Iryna.groom',
    review: 4,
  },
  {
    id: 2,
    title: 'Виставковий грумінг',
    description:
      'Величезне спасибі за прекрасне, сумлінне та креативне обслуговування. Мій Боні та я дуже задоволені!',
    avatar: Avatar2,
    name: 'Таня Островська',
    designation: '@Tanja-Ostrovska.groom',
    review: 5,
  },
  {
    id: 3,
    title: 'Стриппінг (Триммінг)',
    description:
      'Дякуємо за Вашу працю, завдяки якій ми – клієнти, почуваємося більш впевнено, комфортно та щасливо. Дякуємо за ту атмосферу, яку Ви змогли створити у салоні, завдяки якій хочеться приходити до Вас ще.',
    avatar: Avatar3,
    name: 'Віка Ганзенко',
    designation: '@Vika-Ganzenko.groom',
    review: 5,
  },
  {
    id: 4,
    title: 'Модельна стрижка',
    description:
      'Приходила сьогодні стригти мою улюбленцю. Тепер вона так чудово виглядає!',
    avatar: Avatar4,
    name: 'Ксенія Кримова',
    designation: '@Ksenija-Krymova.groom',
    review: 4,
  },
  {
    id: 5,
    title: 'Купання',
    description:
        'Приємна домашня атмосфера, усміхнені співробітниці, обслуговування та спілкування з вихованцями на високому професійному рівні. Дуже дякую команді салону.',
    avatar: Avatar5,
    name: 'Люсі Лівсаєвич',
    designation: '@Lyusi-Livsaevych.groom',
    review: 5,
  },
  {
    id: 6,
    title: 'Модельна стрижка',
    description:
        'Доброго дня)\n' +
        'Грумінг салон знаю давно, скарг ніколи не викликав, Йоріка стрижуть завжди добре, не ранять і прислухатися до клієнта.',
    avatar: Avatar6,
    name: 'Мія Міович',
    designation: '@Mija-Miovych.groom',
    review: 5,
  },
  {
    id: 7,
    title: 'Купання та модельна стрижка',
    description:
        'Хочу подякувати за неймовірну роботу, терпіння та красу моєї собаки. Робота з тваринами неймовірно тяжка і вимагає великих зусиль та терпіння. Особлива подяка за неймовірно гарні зачіски мого Мелвіна.',
    avatar: Avatar7,
    name: 'Олена Дужа',
    designation: '@Olena-Duzha.groom',
    review: 4,
  },
  {
    id: 8,
    title: 'Стрижка та чистка зубыв',
    description:
        'Ми з моїм улюбленцем вже давно обслуговуємось у цьому салоні. Краще, ніж тут, просто не буває. Зустрічають тут лише з усмішкою. Пропонують філіжанку чаю або каву, печенюшку.',
    avatar: Avatar8,
    name: 'Лариса Гульдман',
    designation: '@Larysa-Guldman.groom',
    review: 5,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function TestimonialCard() {
  return (
    <section id="testimonial" sx={{ variant: 'section.testimonial' }}>
      <Container css={{ textAlign: 'center' }}>
        <SectionHeader
            slogan="що про нас говорять"
            title="Відгуки клієнтів"
        />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          // centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
          {data.map((item) => (
            <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
              <Rating rating={item.review} />
              <Heading as="h3" sx={styles.title}>
                {item.title}
              </Heading>
              <Text sx={styles.description}>{item.description}</Text>
              <div className="card-footer">
                <div className="image">
                  <Image src={item.avatar} alt="Client Image" />
                </div>
                <div className="reviewer-info">
                  <Heading as="h4" sx={styles.heading}>
                    {item.name}
                  </Heading>
                  <Text sx={styles.designation}>{item.designation}</Text>
                </div>
              </div>
            </Box>
          ))}
        </Carousel>
      </Box>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'primary',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4,
  },
};
