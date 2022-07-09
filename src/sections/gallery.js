/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import SectionHeader from '../components/section-header';
import ImageGallery from 'react-image-gallery';

import Img1 from '../assets/gallery/dog-1.jpg'
import Img2 from '../assets/gallery/dog-2.jpg'
import Img3 from '../assets/gallery/dog-3.jpg'
import Img4 from '../assets/gallery/dog-4.jpg'
import Img5 from '../assets/gallery/dog-5.jpg'
import Img6 from '../assets/gallery/dog-6.jpg'
import Img7 from '../assets/gallery/dog-7.jpg'
import Img8 from '../assets/gallery/dog-8.jpg'
import Img9 from '../assets/gallery/dog-9.jpg'
import Img10 from '../assets/gallery/dog-10.jpg'
import Img11 from '../assets/gallery/dog-11.jpg'

import ImgSm1 from '../assets/gallery/dogSm-1.jpg'
import ImgSm2 from '../assets/gallery/dogSm-2.jpg'
import ImgSm3 from '../assets/gallery/dogSm-3.jpg'
import ImgSm4 from '../assets/gallery/dogSm-4.jpg'
import ImgSm5 from '../assets/gallery/dogSm-5.jpg'
import ImgSm6 from '../assets/gallery/dogSm-6.jpg'
import ImgSm7 from '../assets/gallery/dogSm-7.jpg'
import ImgSm8 from '../assets/gallery/dogSm-8.jpg'
import ImgSm9 from '../assets/gallery/dogSm-9.jpg'
import ImgSm10 from '../assets/gallery/dogSm-10.jpg'
import ImgSm11 from '../assets/gallery/dogSm-11.jpg'


const images = [
    {
        original: Img1,
        thumbnail: ImgSm1,
    },{
        original: Img2,
        thumbnail: ImgSm2,
    },{
        original: Img3,
        thumbnail: ImgSm3,
    },{
        original: Img4,
        thumbnail: ImgSm4,
    },{
        original: Img5,
        thumbnail: ImgSm5,
    },{
        original: Img6,
        thumbnail: ImgSm6,
    },{
        original: Img7,
        thumbnail: ImgSm7,
    },{
        original: Img8,
        thumbnail: ImgSm8,
    },{
        original: Img9,
        thumbnail: ImgSm9,
    },{
        original: Img10,
        thumbnail: ImgSm10,
    },{
        original: Img11,
        thumbnail: ImgSm11,
    },
];

export default function Gallery() {
    return (
        <section id="gallery" sx={{ variant: 'section.gallery' }}>
            <Container>
                <SectionHeader
                    slogan="фото наших улюбленців-клієнтів"
                    title="Фотогалерея"
                />
                <ImageGallery items={images} />
            </Container>
        </section>
    );
}
