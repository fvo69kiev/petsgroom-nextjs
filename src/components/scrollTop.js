/** @jsx jsx */
import { jsx, Image } from 'theme-ui'
import {useState} from "react"
import ArrowTop from '../assets/arrowTop.svg';


export default function ScrollTop() {
    const [visible, setVisible] = useState(false)

    const onVisbile = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 400) setVisible(true)
        else if (scrolled <= 400) setVisible(false)
    }

    const onScroll = () => {
        if (typeof window === 'object') window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    if (typeof window === 'object') window.addEventListener('scroll', onVisbile)

    return (
        <div sx={styles.scrollToTop}>
            <button
                sx={styles.button}
                onClick={onScroll}
                style={{ display: visible ? 'inline-block' : 'none', }}
            >
                <Image src={ArrowTop} sx={styles.image} alt='Кнопка вверх' />
            </button>
        </div>
    )
}

const styles = {
    scrollToTop: {
        position: 'fixed',
        bottom: 30,
        right: 30,
        zIndex: 1000,
    },
    button: {
        border: '1px solid #C1304F',
        padding: 2,
        borderRadius: 50,
        backgroundColor: 'white',
        transition: 'all, .8s',
        cursor: 'pointer',
        '&:hover': {
            background: '#FEE2E3',
        },
    },
    image: {
        width: 35,
        height: 30,
    },
}