import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from '../theme';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Banner from '../sections/banner';
import Services from '../sections/services';
import ServiceBest from '../sections/service-best';
import Advantage from '../sections/advantage';
import ChoiceService from '../sections/choice-service';
import WorkFlow from '../sections/workflow';
import Pricing from '../sections/pricing';
import Statistic from '../sections/statistic';
import Team from '../sections/team';
import Gallery from '../sections/gallery';
import Reviews from '../sections/reviews';
import Blog from '../sections/blog';
import Faq from '../sections/faq';
import Order from '../sections/order';
import Contacts from '../sections/contacts';
import ScrollTop from '../components/scrollTop';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Послуги по догляду за домашніми тваринами | салон грумінгу в Києві" />
          <Banner />
          <Services />
          <ServiceBest />
          <Advantage />
          <ChoiceService />
          <WorkFlow />
          <Pricing />
          <Statistic />
          <Team />
          <Gallery />
          <Reviews />
          <Blog />
          <Faq />
          <Order />
          <Contacts />
          <ScrollTop />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
