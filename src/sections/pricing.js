/** @jsx jsx */
import { jsx, Container, Box, Flex } from 'theme-ui';
import { keyframes } from '@emotion/core';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import PriceCard from '../components/price-card';
import ButtonGroup from '../components/button-group';
import SectionHeader from '../components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import {
  FaShower,
  FaCut,
  FaDog,
  FaSpa,
  FaCarAlt,
} from 'react-icons/fa';

const packages = {
  monthly: [
    {
      id: 1,
      header: 'Хіт',
      name: 'Купання',
      iconService: <FaShower />,
      description: 'Купати своїх улюбленців необхідно один раз на 2 тижні',
      priceWithUnit: '700-900',
      buttonText: 'Замовити послугу',
      anotherOption: 'Озонотерапія - як додаткова процедура',
      anotherUrl: '/ozon',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Вичісування',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Корекція кігтів',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Чистка вух',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Догляд за зубами',
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoIosCheckmarkCircle />,
          text: 'Купання з кондиціонером та сушка',
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      header: 'Хіт',
      name: 'Стрижка',
      iconService: <FaCut />,
      description: 'Гігієнічна стрижка необхідна один раз на 3 тижні',
      priceWithUnit: '890-1100',
      buttonText: 'Замовити послугу',
      anotherOption: 'Озонотерапія - як додаткова процедура',
      anotherUrl: '/ozon',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Вичісування',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Корекція кігтів",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Чистка вух',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Купання з кондиціонером та сушка',
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoIosCheckmarkCircle />,
          text: 'Стрижка гігієнічних зон',
          isAvailable: true,
        },
        {
          id: 6,
          icon: <IoIosCheckmarkCircle />,
          text: 'Окантовка ножицями лап та вух',
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      // header: 'Хіт',
      name: 'Стриппінг (триммінг)',
      iconService: <FaCut />,
      description: 'Ця послуга стосується певної категорії собак з жорсткою шерстю',
      priceWithUnit: '1000-1400',
      buttonText: 'Замовити послугу',
      // anotherOption: 'Or Start 14 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Вичісування',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Триммінг',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Корекція кігтів",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Чистка вух',
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoIosCheckmarkCircle />,
          text: 'Купання з кондиціонером та сушка',
          isAvailable: true,
        },
        {
          id: 6,
          icon: <IoIosCheckmarkCircle />,
          text: 'Стрижка гігієнічних зон',
          isAvailable: true,
        },
        {
          id: 7,
          icon: <IoIosCheckmarkCircle />,
          text: 'Окантовка ножицями лап та вух',
          isAvailable: true,
        },
        {
          id: 8,
          icon: <IoIosCheckmarkCircle />,
          text: 'Модельна стрижка',
          isAvailable: true,
        },
      ],
    },
    {
      id: 4,
      // header: 'Хіт',
      name: 'Виставковий грумінг',
      iconService: <FaDog />,
      description: 'Підготовка до Петсшоу відповідно до графіку проведення виставок',
      priceWithUnit: '1100-1300',
      buttonText: 'Замовити послугу',
      // anotherOption: 'Or Start 14 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Вичісування',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Корекція кігтів",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Чистка вух',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Купання з кондиціонером та сушка',
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoIosCheckmarkCircle />,
          text: 'Стрижка гігієнічних зон',
          isAvailable: true,
        },
        {
          id: 6,
          icon: <IoIosCheckmarkCircle />,
          text: 'Окантовка ножицями лап та вух',
          isAvailable: true,
        },
        {
          id: 7,
          icon: <IoIosCheckmarkCircle />,
          text: 'Виставкова стрижка',
          isAvailable: true,
        },
      ],
    },
    {
      id: 5,
      // header: 'Хіт',
      name: 'СПА-процедури',
      iconService: <FaSpa />,
      description: 'Процедури проводяться за необхідністі тим тваринам, які потребують цю послугу',
      priceWithUnit: '450-550',
      buttonText: 'Замовити послугу',
      // anotherOption: 'Or Start 14 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Це додаткова процедура, може йти у комплексі з купанням, гігієнічним доглядом, комплексною та виставковою стрижкою',
          isAvailable: true,
        },
      ],
    },
    {
      id: 6,
      // header: 'Хіт',
      name: 'Чистка зубів',
      description: 'Гігієнічна процедура проводиться за необхідністю та як профілактичний захід',
      priceWithUnit: '500-600',
      buttonText: 'Замовити послугу',
      // anotherOption: 'Or Start 14 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Механічна',
          isAvailable: true,
        },

      ],
    },
    {
      id: 7,
      // header: 'Хіт',
      name: 'Креативний грумінг',
      iconService: <FaDog />,
      description: 'Проводиться заради дітей та отримання позитивних ємоцій',
      priceWithUnit: '950-1200',
      buttonText: 'Замовити послугу',
      // anotherOption: 'Or Start 14 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Поклейка вух',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Поклейка страз',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Фактурне гоління",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Фарбування нестійкими фарбами',
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoIosCheckmarkCircle />,
          text: 'Фарбування стійкими фарбами',
          isAvailable: true,
        },
      ],
    },
    {
      id: 8,
      // header: 'Хіт',
      name: 'Мобільний грумінг',
      iconService: <FaCarAlt />,
      description: 'Послуги грумінгу надаються у Вас дома',
      priceWithUnit: 'від 1000',
      buttonText: 'Замовити послугу',
      // anotherOption: 'Or Start 14 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Це додаткова послуга, може йти у комплексі з будь-якою іншою послугою, що надає салон',
          isAvailable: true,
        },
      ],
    },
  ],
  annual: [
    {
      id: 1,
      header: 'Хіт',
      name: 'Купання',
      iconService: <FaShower />,
      description: 'Купати своїх улюбленців необхідно один раз на 2 тижні',
      priceWithUnit: '1400-2400',
      buttonText: 'Замовити послугу',
      anotherOption: 'Озонотерапія - як додаткова процедура',
      anotherUrl: '/ozon',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Вичісування',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Корекція кігтів',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Чистка вух',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Догляд за зубами',
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoIosCheckmarkCircle />,
          text: 'Купання з кондиціонером та сушка',
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      header: 'Хіт',
      name: 'Стрижка',
      iconService: <FaCut />,
      description: 'Гігієнічна стрижка необхідна один раз на 3 тижні',
      priceWithUnit: '1900-2600',
      buttonText: 'Замовити послугу',
      anotherOption: 'Озонотерапія - як додаткова процедура',
      anotherUrl: '/ozon',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Вичісування',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Корекція кігтів",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Чистка вух',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Купання з кондиціонером та сушка',
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoIosCheckmarkCircle />,
          text: 'Стрижка гігієнічних зон',
          isAvailable: true,
        },
        {
          id: 6,
          icon: <IoIosCheckmarkCircle />,
          text: 'Окантовка ножицями лап та вух',
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      // header: 'Хіт',
      name: 'Стриппінг (триммінг)',
      iconService: <FaCut />,
      description: 'Ця послуга стосується певної категорії собак з жорсткою шерстю',
      priceWithUnit: '2200-3000',
      buttonText: 'Замовити послугу',
      // anotherOption: 'Or Start 14 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Вичісування',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Триммінг',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Корекція кігтів",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Чистка вух',
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoIosCheckmarkCircle />,
          text: 'Купання з кондиціонером та сушка',
          isAvailable: true,
        },
        {
          id: 6,
          icon: <IoIosCheckmarkCircle />,
          text: 'Стрижка гігієнічних зон',
          isAvailable: true,
        },
        {
          id: 7,
          icon: <IoIosCheckmarkCircle />,
          text: 'Окантовка ножицями лап та вух',
          isAvailable: true,
        },
        {
          id: 8,
          icon: <IoIosCheckmarkCircle />,
          text: 'Модельна стрижка',
          isAvailable: true,
        },
      ],
    },
    {
      id: 4,
      // header: 'Хіт',
      name: 'Виставковий грумінг',
      iconService: <FaDog />,
      description: 'Підготовка до Петсшоу відповідно до графіку проведення виставок',
      priceWithUnit: '2400-3200',
      buttonText: 'Замовити послугу',
      // anotherOption: 'Or Start 14 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Вичісування',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Корекція кігтів",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Чистка вух',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Купання з кондиціонером та сушка',
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoIosCheckmarkCircle />,
          text: 'Стрижка гігієнічних зон',
          isAvailable: true,
        },
        {
          id: 6,
          icon: <IoIosCheckmarkCircle />,
          text: 'Окантовка ножицями лап та вух',
          isAvailable: true,
        },
        {
          id: 7,
          icon: <IoIosCheckmarkCircle />,
          text: 'Виставкова стрижка',
          isAvailable: true,
        },
      ],
    },
    {
      id: 5,
      // header: 'Хіт',
      name: 'СПА-процедури',
      iconService: <FaSpa />,
      description: 'Процедури проводяться за необхідністі тим тваринам, які потребують цю послугу',
      priceWithUnit: '550-1100',
      buttonText: 'Замовити послугу',
      // anotherOption: 'Or Start 14 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Це додаткова процедура, може йти у комплексі з купанням, гігієнічним доглядом, комплексною та виставковою стрижкою',
          isAvailable: true,
        },
      ],
    },
    {
      id: 6,
      // header: 'Хіт',
      name: 'Чистка зубів',
      description: 'Гігієнічна процедура проводиться за необхідністю та як профілактичний захід',
      priceWithUnit: '1000',
      buttonText: 'Замовити послугу',
      // anotherOption: 'Or Start 14 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Механічна',
          isAvailable: true,
        },

      ],
    },
    {
      id: 7,
      // header: 'Хіт',
      name: 'Креативний грумінг',
      iconService: <FaDog />,
      description: 'Проводиться заради дітей та отримання позитивних ємоцій',
      priceWithUnit: '1200-1500',
      buttonText: 'Замовити послугу',
      // anotherOption: 'Or Start 14 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Поклейка вух',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Поклейка страз',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Фактурне гоління",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Фарбування нестійкими фарбами',
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoIosCheckmarkCircle />,
          text: 'Фарбування стійкими фарбами',
          isAvailable: true,
        },
      ],
    },
    {
      id: 8,
      // header: 'Хіт',
      name: 'Мобільний грумінг',
      iconService: <FaCarAlt />,
      description: 'Послуги грумінгу надаються у Вас дома',
      priceWithUnit: 'від 1000',
      buttonText: 'Замовити послугу',
      // anotherOption: 'Or Start 14 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Це додаткова послуга, може йти у комплексі з будь-якою іншою послугою, що надає салон',
          isAvailable: true,
        },
      ],
    },
  ],
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

export default function Pricing() {
  const { monthly, annual } = packages;
  const [state, setState] = useState({
    active: 'monthly',
    pricingPlan: monthly,
  });

  const handlePricingPlan = (plan) => {
    if (plan === 'annual') {
      setState({
        ...state,
        active: 'annual',
        pricingPlan: annual,
      });
    } else {
      setState({
        ...state,
        active: 'monthly',
        pricingPlan: monthly,
      });
    }
  };

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: true,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    customButtonGroup: <ButtonGroup />,
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: true,
    sliderClass: '',
  };

  return (
    <section id="pricing" sx={{ variant: 'section.pricing' }}>
      <Container>
        <SectionHeader
          slogan="які ціни на процедури"
          title="Ціни на послуги"
        />
        <Flex sx={styles.buttonGroup}>
          <Box sx={styles.buttonGroupInner}>
            <button
              className={state.active === 'monthly' ? 'active' : ''}
              type="button"
              aria-label="Monthly"
              onClick={() => handlePricingPlan('monthly')}
              title='Зріст до 45 см в холці, та вага до 20 кг'
            >
              Улюбленці вагою до 20 кг
              {/*/зріст до 45 см в холці та вага до 20 кг/*/}
            </button>
            <button
              className={state.active === 'annual' ? 'active' : ''}
              type="button"
              aria-label="Annual"
              onClick={() => handlePricingPlan('annual')}
              title='Зріст від 45 см до 81 см в холці, та вага від 20 кг до 80 кг'
            >
              Улюбленці вагою понад 20 кг
              {/*зріст до 81 см в холці та вага до 80 кг*/}
            </button>
          </Box>
        </Flex>
        <Box sx={styles.pricingWrapper} className="pricing__wrapper">
          <Carousel {...sliderParams}>
            {state.pricingPlan.map((packageData) => (
              <Box
                sx={styles.pricingItem}
                key={`${state.active}-card--key${packageData.id}`}
              >
                <PriceCard data={packageData} />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  pricingWrapper: {
    mb: '-40px',
    mt: '-40px',
    mx: -3,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '&.pricing__wrapper .package__card': {
      '.package__header': {
        animation: `${fadeIn} 0.8s ease-in`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s ease-in`,
      },
      '.package__price': {
        animation: `${fadeIn2} 0.9s ease-in`,
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`,
      },
    },
    '.carousel-container': {
      width: '100%',
      '> ul > li ': {
        display: 'flex',
      },
    },
    '.button__group': {
      display: ['flex', null, null, null, 'none'],
      mb: [4, null, null, null, 0],
    },
  },
  pricingItem: {
    mx: 3,
    display: 'flex',
    flexShrink: 0,
    flex: '1 1 auto',
  },
  buttonGroup: {
    justifyContent: 'center',
    mb: '7',
    mt: ['-15px', '-35px'],
    position: 'relative',
    zIndex: 2,
  },
  buttonGroupInner: {
    display: 'flex',
    padding: '10px',
    margin: '0 auto',
    borderRadius: '5px',
    backgroundColor: '#F7F8FB',
    button: {
      border: 0,
      padding: ['15px 20px', '15px 27px'],
      borderRadius: '5px',
      color: 'text',
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'body',
      letterSpacing: '-0.24px',
      transition: 'all 0.3s',
      '&.active': {
        color: 'primary',
        backgroundColor: '#ffffff',
        boxShadow: '0 3px 4px rgba(38, 78, 118, 0.3)',
      },
      '&:hover': {
        color: '#0f2137',
        boxShadow: '0 3px 4px rgba(38, 78, 118, 0.3)',
      },
      '&:focus': {
        color: 'primary',
        outline: 0,
      },
    },
  },
};
