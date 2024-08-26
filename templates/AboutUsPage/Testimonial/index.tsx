import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Testimonial.module.sass";
import Image from "@/components/Image";

import { description, images } from "@/constants/testimonial";
import { useTranslation } from "react-i18next";

type TestimonialProps = {};

const Testimonial = ({}: TestimonialProps) => {
const {t} =useTranslation()
return (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.list}>
                    <div className={styles.item}>
                        <div className={cn("h3", styles.subtitle)}>
                            {t('testimonialAbout.title1')}
                        </div>
                        <div className={styles.content}>{t('testimonialAbout.content1')}</div>
                    </div>
                    <div className={styles.item}>
                        <div className={cn("h3", styles.subtitle)}>
                            {t('testimonialAbout.title2')}
                        </div>
                        <div className={styles.content}>{t('testimonialAbout.content2')}</div>
                    </div>
                    <div className={styles.item}>
                        <div className={cn("h3", styles.subtitle)}>
                            {t('testimonialAbout.title3')}
                        </div>
                        <div className={styles.content}>{t('testimonialAbout.content3')}</div>
                    </div>
            </div>
            <div className={styles.comment}>
                <div className={styles.details}>
                    <div className={cn("h2", styles.title)}>
                        “{t('testimonialAbout.comment')}”
                    </div>
                    <div className={styles.avatar}>
                        <Image
                            src="/images/avatar-2.jpg"
                            layout="fill"
                            objectFit="cover"
                            alt="Avatar"
                        />
                    </div>
                    <div className={styles.author}>Becky Stal</div>
                    <div className={styles.position}>
                        Sr. Engineer - FauxChain
                    </div>
                </div>
                <div className={styles.images}>
                    <div className={styles.image}>
                        <Image
                            src="/images/lines-2.svg"
                            layout="fill"
                            alt="Lines"
                        />
                    </div>
                    {images.map((image, index) => (
                        <Parallax
                            className={styles.image}
                            speed={1}
                            easing="easeInQuad"
                            rotate={[-4, 9]}
                            key={index}
                        >
                            <Image src={image} layout="fill" alt="Figure" />
                        </Parallax>
                    ))}
                </div>
            </div>
        </div>
    </div>
)};

export default Testimonial;
