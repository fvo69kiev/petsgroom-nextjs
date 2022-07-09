/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCard from '../components/feature-card.js';

import AdvantageTeam from '../assets/advantage/advantage-team.svg';
import AdvantagePrice from '../assets/advantage/advantage-price.svg';
import AdvantageSoft from '../assets/advantage/advantage-soft.svg';
import AdvantageCustomer from '../assets/advantage/advantage-customer.svg';

const data = [
  {
    id: 1,
    imgSrc: AdvantageTeam,
    altText: 'Молода досвідчена команда',
    title: 'Молода досвідчена команда',
    text:
      'Регулярно підвищуємо рівень кваліфікаціїї. Ніколи не зупиняємось.',
  },
  {
    id: 2,
    imgSrc: AdvantagePrice,
    altText: 'Бюджетні ціни на послуги',
    title: 'Бюджетні ціни на послуги',
    text:
      'Ціни на послуги в салоні встановлюємо бюджетні. Постійно діють бонусні програми та акції.',
  },
  {
    id: 3,
    imgSrc: AdvantageSoft,
    altText: 'Якісне обладнання та матеріали',
    title: 'Якісне обладнання та матеріали',
    text:
      'Для надання послуг використовуємо виключно професійне, якісне обладнання та матеріали відомих світових брендів.',
  },
  {
    id: 4,
    imgSrc: AdvantageCustomer,
    altText: 'Індивідуальний підхід до кожного клієнта',
    title: 'Індивідуальний підхід до кожного клієнта',
    text:
      'Для кожного клієнта підбираємо потрібний саме йому (індивідуальний) комплекс процедур, контролюємо якісне виконання роботи та підбираємо засоби повсякденного догляду за Вашим улюбленцем.',
  },
];

export default function Advantage() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="наші переваги"
          title="Чому обирають наш салон"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
