/** @jsx jsx */
import React, {useState} from 'react'
import {jsx, Container, Flex, Box, Heading, Text, Button, Input, Textarea } from 'theme-ui'
import { ThreeDots } from 'react-loader-spinner'
import InputMask from 'react-input-mask';

export default function Order() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [status, setStatus] = useState('')

    const clear = () => {
        setSubmitted(false)
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
        setTimeout(() => {
            setStatus((prev) => !prev);
        }, 5000);
    }

    async function handleSubmit (e) {
        e.preventDefault()

        const formData = {
            name,
            email,
            phone,
            message,
        }

        setSubmitted(true)
        // console.log(formData)

        await fetch('/api/order', {
            method: 'post',
            body: JSON.stringify(formData)
        }).then((res) => {
            if (res.status === 200) {
                setStatus('success')
                clear()
            }
            else {
                setStatus('error')
                clear()
            }
        })
    }

    return (
            <section id='subscribe'>
                <Container>
                    <Box sx={styles.contentBox}>
                        <Box sx={styles.contentBoxInner}>
                            <Heading as="h2" sx={styles.title}>
                                Замовлення
                            </Heading>
                            <Text as="p" sx={styles.description}>
                                Заповніть поля та натисніть кнопку "Надіслати"
                            </Text>
                            <form  onSubmit={handleSubmit}>
                                <Flex sx={styles.subscribeForm}>
                                    <Input
                                        id="name"
                                        sx={styles.subscribeForm[".subscribe__input"]}
                                        type="text"
                                        value={name}
                                        onChange={(e) => { setName(e.target.value) }}
                                        placeholder="Ім'я"
                                        required
                                    />
                                </Flex>
                                <Flex sx={styles.subscribeForm}>
                                    <Input
                                        id="email"
                                        sx={styles.subscribeForm[".subscribe__input"]}
                                        type="email"
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        placeholder='Email'
                                        required
                                    />
                                </Flex>
                                <Flex sx={styles.subscribeForm}>
                                    <InputMask
                                        id="phone"
                                        style={{width: '100%', outline: 'none',}}
                                        sx={styles.subscribeForm[".subscribe__input"]}
                                        type="tel"
                                        mask="+38(999)999-99-99"
                                        value={phone}
                                        onChange={(e) => {setPhone(e.target.value)}}
                                        placeholder="Телефон"
                                        required
                                    />
                                </Flex>
                                <Flex sx={styles.subscribeForm}>
                                    <Textarea
                                        id="text"
                                        sx={styles.subscribeForm[".subscribe__input"]}
                                        value={message}
                                        onChange={(e) => { setMessage(e.target.value) }}
                                        rows="3"
                                        placeholder='Повідомлення'
                                    />
                                </Flex>
                                <Button
                                    type='submit'
                                    isLoading={submitted}
                                    arial-label='Надіслати'
                                    sx={styles.subscribeForm[".subscribe__btn"]}
                                >
                                    {submitted ? 'Надсилається ...' : 'Надіслати'}
                                </Button>

                                <Box sx={styles.info}>
                                    { submitted ?
                                        <Box style={{paddingLeft: '42%'}}>
                                            <ThreeDots
                                                color="white"
                                                height={80}
                                                width={80}
                                                ariaLabel="three-dots-running"
                                            />
                                        </Box>
                                        : status === "success" ?
                                        <Box sx={styles.success} status="success">
                                            <Heading variant='title' style={{color: 'background'}}>Успішно!</Heading>
                                            <Text>Ваша заявка надіслана. Мы Вам зателефонуємо найближчим часом</Text>
                                        </Box>
                                        : status === "error" ?
                                            <Box sx={styles.error} status="error" >
                                                <Heading variant='title' style={{color: 'background'}}>Помилка!</Heading>
                                                <Text>Ваша заявка не надіслана. Спробуйте ще раз</Text>
                                            </Box>
                                            : null
                                    }
                                </Box>
                            </form>
                        </Box>
                    </Box>
                </Container>
            </section>
    )
}

const styles = {
    contentBox: {
        backgroundColor: 'primary',
        textAlign: 'center',
        borderRadius: 10,
        py: ['60px', null, 8],
    },
    contentBoxInner: {
        width: ['100%', null, '540px', '600px'],
        mx: 'auto',
        mt: -1,
        px: [3, 5],
    },
    title: {
        fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
        color: 'white',
        lineHeight: [1.3, null, null, 1.25],
        fontWeight: '700',
        letterSpacing: ['-.5px', null, '-1.5px'],
        mb: [2, 3],
    },
    description: {
        fontSize: ['15px', 2, null, null, null, '17px', null, 3],
        color: 'white',
        lineHeight: [1.85, null, null, 2],
        px: [0, null, 5],
        mb: [3, null, 5],
    },
    subscribeForm: {
        mb: [3, null, null, 3],
        backgroundColor: ['transparent', 'white'],
        borderRadius: [0, 50],
        overflow: 'hidden',
        p: [0, 1],
        flexDirection: ['column', 'row'],
        '.subscribe__input': {
            border: 0,
            borderRadius: 50,
            fontFamily: 'body',
            fontSize: ['14px', null, 2],
            fontWeight: 500,
            color: 'heading',
            py: 1,
            px: [4, null, 6],
            backgroundColor: ['white', 'transparent'],
            textAlign: ['center', 'left'],
            '&:focus': {
                boxShadow: '0 0 0 0px',
            },
            '::placeholder': {
                color: 'primary',
                opacity: 1,
            },
        },
        'input': {
            height: ['45px', null, '55px'],
        },
        '.subscribe__btn': {
            width: '50%',
            border: '2px solid background',
            backgroundColor: ['text', 'primary'],
            mt: [2, 0],
            transition: 'all .45s',
            '&:hover': {
                color: 'primary',
                backgroundColor: 'background',
            },
        },
    },
    info: {
        marginTop: '20px',
    },
    success: {
        padding: '5px 10px',
        color: 'background',
        border: '2px solid background',
        backgroundColor: '#C7002B',
    },
    error: {
        padding: '5px 10px',
        color: 'background',
        border: '2px solid background',
        backgroundColor: 'text',
    },
};
