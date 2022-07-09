/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import SectionHeader from '../components/section-header';
import PostCard from '../components/post-card.js';
import ButtonGroup from '../components/button-group';
import Carousel from 'react-multi-carousel';
import PostThumb1 from '../assets/blog/bathing-combing.jpg';
import PostThumb2 from '../assets/blog/bathing-ear-cleaning.jpg';
import PostThumb3 from '../assets/blog/haircut-pets.jpg';
import PostThumb4 from '../assets/blog/haircut-pads.jpg';
import PostThumb5 from '../assets/blog/spa-hydration-nourishment.jpg';
import PostThumb6 from '../assets/blog/brushing-teeth.jpg';

const data = [
  {
    id: 1,
    imgSrc: PostThumb1,
    altText: 'Купання і розчісування',
    postLink: 'https://md-blog-nextjs.vercel.app/blog/bathing-combing',
    title: 'Купання і розчісування',
    authorName: 'Сем Сміт',
    date: 'Травень 03, 2022',
  },
  {
    id: 2,
    imgSrc: PostThumb2,
    altText: 'Купання та чищення вух',
    postLink: 'https://md-blog-nextjs.vercel.app/blog/bathing-ear-cleaning',
    title: 'Купання та чищення вух',
    authorName: 'Сем Сміт',
    date: 'Травень 03, 2022',
  },
  {
    id: 3,
    imgSrc: PostThumb3,
    altText: 'Стрижка домашніх тварин',
    postLink: 'https://md-blog-nextjs.vercel.app/blog/haircut-pets',
    title: 'Стрижка домашніх тварин',
    authorName: 'Джон Доу',
    date: 'Травень 10, 2022',
  },
  {
    id: 4,
    imgSrc: PostThumb4,
    altText: 'Стрижка навколо подушечок лап',
    postLink: 'https://md-blog-nextjs.vercel.app/blog/haircut-pads',
    title: 'Стрижка навколо подушечок лап',
    authorName: 'Сем Сміт',
    date: 'Травень 10, 2022',
  },
  {
    id: 5,
    imgSrc: PostThumb5,
    altText: 'SPA зволоження та живлення',
    postLink: 'https://md-blog-nextjs.vercel.app/blog/spa-hydration-nourishment',
    title: 'SPA зволоження та живлення',
    authorName: 'Джейн Доу',
    date: 'Травень 12, 2022',
  },
  {
    id: 6,
    imgSrc: PostThumb6,
    altText: 'Чистка зубів',
    postLink: 'https://md-blog-nextjs.vercel.app/blog/brushing-teeth',
    title: 'Чистка зубів',
    authorName: 'Джейн Доу',
    date: 'Травень 12, 2022',
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1310 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1310, min: 1024 },
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

export default function Blog() {
  return (
    <section sx={{ variant: 'section.news' }}>
      <Container>
        <SectionHeader
          slogan="наш блог"
          title="Ознайомтесь з нашими публікаціями"
        />

        <Box sx={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            customButtonGroup={<ButtonGroup />}
            dotListClass="test"
            draggable={true}
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
              <PostCard
                key={item.id}
                src={item.imgSrc}
                alt={item.altText}
                postLink={item.postLink}
                title={item.title}
                authorName={item.authorName}
                date={item.date}
              />
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    '.carousel-container': {
      mx: -3,
    },
  },
};
