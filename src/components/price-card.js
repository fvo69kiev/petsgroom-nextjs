import { Box, Flex, Card, Text, Heading, Button } from 'theme-ui';
import React from 'react';
import List from './list';
import { Link } from 'react-scroll';

export default function PriceCard({
  data: {
    header,
    name,
    iconService,
    description,
    priceWithUnit,
    buttonText = 'Start Free Trial',
    anotherOption,
    anotherUrl,
    points,
  },
}) {
  return (
    <Card
      className={header ? 'package__card active' : 'package__card'}
      sx={styles.pricingBox}
    >
      {header && <Text sx={styles.header}>{header}</Text>}
      <Box>
        <Box className="package__header" sx={styles.pricingHeader}>
          <Flex>
            <Heading className="package__name" variant="title">
              {name}
            </Heading>
            {iconService && <Box as='span'>{iconService}</Box>}
          </Flex>
          <Text as="p">{description}</Text>
        </Box>
        <List items={points} childStyle={styles.listItem} />
        <Text className="package__price" sx={styles.price}>
          {priceWithUnit}
          &nbsp;<span style={{fontSize: 27}}>&#x20b4;</span>
        </Text>
        <Box sx={styles.buttonGroup}>
          <Link
              to='subscribe'
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
              sx={styles.logo}
          >
            <Button variant="primary" aria-label={buttonText}>
              {buttonText}
            </Button>
          </Link>
          {anotherOption && (
              <Link
                to={anotherUrl}
              >
                <Button
                    variant="textButton"
                    className="free__trail"
                    aria-label={anotherOption}
                >
                  {anotherOption}
                </Button>
              </Link>
          )}
        </Box>
      </Box>
    </Card>
  );
}

const styles = {
  pricingBox: {
    borderRadius: 20,
    position: 'relative',
    transition: 'all 0.3s',
    p: ['35px 25px', null, null, '40px'],
    width: ['100%', '75%', '100%'],
    mb: '40px',
    mt: '40px',
    mx: [0, 'auto', 0],
    '&:before': {
      position: 'absolute',
      content: "''",
      width: '100%',
      top: 0,
      left: 0,
      height: '100%',
      border: '1px solid rgba(38, 78, 118, 0.1)',
      borderRadius: 'inherit',
      transition: 'all 0.3s',
      zIndex: -1,
    },
    '&:hover': {
      boxShadow: '0px 4px 25px rgba(38, 78, 118, 0.25) !important',
      '&:before': {
        opacity: 0,
      },
    },
  },
  header: {
    height: ['28px', null, null, '32px'],
    backgroundColor: 'yellow',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: 1,
    lineHeight: 1.2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    position: 'absolute',
    top: '-17px',
    letterSpacing: '-.14px',
    px: '12px',
  },
  pricingHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: ['30px', null, null, null, '40px'],
    p: {
      fontSize: [1, 2],
      color: 'text',
      lineHeight: 'heading',
    },
    '.package__name': {
      mb: [1, null, 2],
      mr: [2, null, 4],
    },
  },
  price: {
    fontWeight: 500,
    fontSize: [4, null, 5, null, '30px'],
    lineHeight: 1,
    letterSpacing: '-0.55px',
    color: 'text',
    marginBottom: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pt: [4, 6],
    '> span': {
      position: 'relative',
      pl: '3px',
      display: 'inline-block',
      fontSize: [1, 2],
      fontWeight: 'normal',
    },
  },
  listItem: {
    // fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: [1, 2],
    lineHeight: [1.55, 1.5],
    mb: 3,
    alignItems: 'flex-start',
    color: 'text',
    '&.closed': {
      opacity: 0.55,
      button: {
        color: '#788FB5',
      },
    },
  },
  buttonGroup: {
    textAlign: 'center',
    mt: ['30px', null, null, null, '35px'],
    '.free__trail': {
      color: 'yellow',
      width: '100%',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: ['14px', 1],
      p: '20px 0 0',
    },
  },
};