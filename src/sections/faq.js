import {jsx, Box, Container, Flex, Text, Heading, Button} from 'theme-ui';
import { Link } from 'react-scroll';
import Accordion from '../components/accordion/accordion';
import SectionHeader from "../components/section-header";


const accordionData = [
    {
        isExpanded: false,
        title: 'Якщо тварина не вакцинована, мене приймуть?',
        contents: (
            <div>
                Якщо у власника виникла гостра потреба покупати чи постригти улюбленця в салоні,
                а всі потрібні щеплення ще не зроблені, чи не завершився карантин, в такому разі
                ми приймаємо таку тваринку у відповідно відведений день, коли в салоні не буде
                інших клієнтів. Приміщення, стіл попередньо підготовлені, власник приносить улюбленця
                на руках, не дозволяє іти самостійно і т.д. Потрібно це вказати при уточненні замовлення.
            </div>
        ),
    },
    {
        isExpanded: true,
        title: 'Чи можна самому скористатись вашим приміщенням, інструментами та засобами?',
        contents: (
            <div>
                У найближчому майбутньому ми плануємо впровадити послугу самообслуговування, усі деталі згодом!
                Спостерігайте за змінами на цьому сайті. Послуга "Cамообслуговування" буде розміщуватись у
                розділі "Послуги".
            </div>
        ),
    },
    {
        isExpanded: false,
        title: 'Чи можу я бути присутнім при стрижці?',
        contents: (
            <div>
                Так, Ви можете бути присутніми, але якщо це комфортно Вам і вашому улюбленцю.
                Ми із задоволенням надаємо таку можливість своїм клієнтам.
            </div>
        ),
    },
    {
        isExpanded: false,
        title: 'Як я можу бути впевнений, що моєму улюбленцю надаватиметься найкращий сервіс?',
        contents: (
            <div>
                Під час офолрмлення Вашого замовлення ми будем ретельно обговорювати потреби Вашого
                вихованця з Вами, щоб переконатись , що обрані найбільш правильні та неохідні послуги.
            </div>
        ),
    },
    {
        isExpanded: false,
        title: 'Чи може вихованець мати блохи, чи варто мені це приховувати?',
        contents: (
            <div>
                Господар тварини повинен попередити грумінг салон, в інакшому
                випадку грумінг салон може відмовити Господареві тварини в наданні послуг.
            </div>
        ),
    },
];

const FAQ = () => {
    return (
        <section id='faq'>
            <Container>
                <SectionHeader
                    slogan="поширені питання"
                    title="Питання-відповіді"
                />
                <Flex sx={styles.flex}>
                    <Box sx={styles.faqWrapper}>
                        <Accordion items={accordionData} />
                    </Box>
                    <Box sx={styles.content}>
                        <Heading as="h4">
                            У вас є питання? Будь ласка, запитайте тут, ми готові надати відповідь
                        </Heading>
                        <Text as="p">
                            Якщо Вашого запитання немає тут, будь ласка, не вагаючись натисніть кнопку "Запитати"
                        </Text>
                        <Link
                            to='subscribe'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                            sx={styles.button}
                        >
                            <Button variant="primary" aria-label='Запитати'>
                                Запитати
                            </Button>
                        </Link>
                    </Box>
                </Flex>
            </Container>
        </section>
    );
};

export default FAQ;

const styles = {
    flex: {
        flexWrap: 'wrap',
        flexDirection: ['column', null, null, null, null, 'row-reverse'],
        pb: ['70px', null, null, null, '90px', null, '130px'],
    },
    content: {
        flex: ['0 0 100%', null, null, null, '0 0 33.333%'],
        maxWidth: ['100%', null, null, '450px', '100%'],
        mx: ['auto', null, null, null, '0'],
        mb: ['0px', null, null, null, '0'],
        textAlign: ['center', null, null, null, null, 'left'],
        mt: ['40px', null, null, null, null, '0'],
        h4: {
            fontSize: ['20px', null, null, null, '22px'],
            lineHeight: [1.5, null, null, null, 1.67],
            color: 'black',
            fontWeight: 500,
            letterSpacing: '-1.5px',
            mt: '-5px',
            pr: ['0', null, null, null, null, '30px'],
        },
        p: {
            fontSize: '16px',
            lineHeight: 1.87,
            color: '#343D48',
            opacity: 0.7,
            mt: '10px',
            mb: '20px',
            pr: ['0', null, null, null, null, '80px'],
        },
    },
    faqWrapper: {
        flex: ['0 0 100%', null, null, null, '0 0 66.666%'],
    },
};
