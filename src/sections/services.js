/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from '../components/feature-card-column.js';

import Bathing from '../assets/services/bathing.svg';
import Scissors from '../assets/services/scissors.svg';
import ScissorsBig from '../assets/services/scissors-big.svg';
import ExhibitionGroom from '../assets/services/exhibition-groom.svg';
import Spa from '../assets/services/spa.svg';
import BrushingTeeth from '../assets/services/brushing-teeth.svg';
import CreativeGroom from '../assets/services/creative-groom.svg';
import MobileGroom from '../assets/services/mobile-groom.svg';

const data = [
  {
    id: 1,
    imgSrc: Bathing,
    altText: 'Купання',
    title: 'Купання',
    text:
      'До цієї послуги входить корекція кігтів, чистка вух, вичісування, купання та сушка тварини.',
  },
  {
    id: 2,
    imgSrc: Scissors,
    altText: 'Стрижка',
    title: 'Стрижка',
    text:
      'Окрім загальної стрижки до цієї послуги входить підстригання шерсті на подушечках лап, на гігієнічних зонах під хвостом, на вухах та біля очей.',
  },
  {
    id: 3,
    imgSrc: ScissorsBig,
    altText: 'Стриппінг (Триммінг)',
    title: 'Стриппінг (Триммінг)',
    text:
      'Ця послуга надається певній категорії собак, які мають жорстку шерсть.',
  },
  {
    id: 4,
    imgSrc: ExhibitionGroom,
    altText: 'Виставковий грумінг',
    title: 'Виставковий грумінг',
    text:
      'Якщо Ви захотіли взяти участь у виставках Петсшоу, тоді ця послуга для Вашого улюбленця.',
  },
  {
    id: 5,
    imgSrc: Spa,
    altText: 'СПА-процедури',
    title: 'СПА-процедури',
    text:
        'Процедури необхідні тим тваринам, у яких є проблеми з сухістю шкіри та шерсті, ломкістю волосся, частими ковтунами, алопецією у шпіців та ін.',
  },
  {
    id: 6,
    imgSrc: BrushingTeeth,
    altText: 'Чистка зубів',
    title: 'Чистка зубів',
    text:
        'Гігієнічна процедура, яка необхідна для підтримання здорової зубної системи та як наслідок – здоров\'я вцілому.',
  },
  {
    id: 7,
    imgSrc: CreativeGroom,
    altText: 'Креативний грумінг',
    title: 'Креативний грумінг',
    text:
        'Безмежність креативу включає - фарбування шерсті, вистригання оригінальних візерунків та інш.',
  },
  {
    id: 8,
    imgSrc: MobileGroom,
    altText: 'Мобільний грумінг',
    title: 'Мобільний грумінг',
    text:
        'Надання послуг грумінгу на виїзді, тобто у Вас дома.',
  },
];

export default function Services() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Які послуги надає салон"
          title="Послуги грумінгу"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
