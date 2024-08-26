import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Development.module.sass";
import Card from "@/components/Card";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { developmentTechnology } from "@/mocks/development";
import { useTranslation } from "react-i18next";

const images = [
    "/images/figures/figure-7.png",
    "/images/figures/figure-9.png",
    "/images/figures/figure-1.png",
];

type DevelopmentProps = {};

const Development = ({}: DevelopmentProps) => {
    const {t} =useTranslation()
    return (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.head}>
                <h2 className={cn("h2", styles.title)}>
                {t('technology.development.title')}
                </h2>
                <div className={styles.info}>
                {t('technology.development.info')}
                </div>
            </div>
            <div className={styles.list}>
                
                    <Card
                        className={styles.card}
                        url="/technology"
                        color="#6F5BEB"
                        animateIn="fadeInDown"
                    >
                        <div className={cn("h3", styles.subtitle)}>
                            {t('technology.development.card1.title')}
                        </div>
                        <div className={styles.content}>{t('technology.development.card1.content')}</div>
                        <div className={styles.preview}>
                            <div className={styles.inner}>
                                <Image
                                    src="/images/development-pic-3.png"
                                    layout="fill"
                                    alt="Figure"
                                />
                            </div>
                        </div>
                        <div className={styles.foot}>
                            <div
                                className={styles.more}
                                style={{ color: "#6F5BEB" }}
                            >
                                {t('technology.development.learnMore')}
                            </div>
                            <Icon
                                className={styles.arrow}
                                name="arrow-right"
                                size="26"
                            />
                        </div>
                    </Card>
                    <Card
                        className={styles.card}
                        url="/technology"
                        color="#89EB5B"
                        animateIn="fadeInDown"
                    >
                        <div className={cn("h3", styles.subtitle)}>
                            {t('technology.development.card2.title')}
                        </div>
                        <div className={styles.content}>{t('technology.development.card2.content')}</div>
                        <div className={styles.preview}>
                            <div className={styles.inner}>
                                <Image
                                    src="/images/development-pic-2.png"
                                    layout="fill"
                                    alt="Figure"
                                />
                            </div>
                        </div>
                        <div className={styles.foot}>
                            <div
                                className={styles.more}
                                style={{ color: "#89EB5B" }}
                            >
                                {t('technology.development.learnMore')}
                            </div>
                            <Icon
                                className={styles.arrow}
                                name="arrow-right"
                                size="26"
                            />
                        </div>
                    </Card>
                    <Card
                        className={styles.card}
                        url="/technology"
                        color="#E87A95"
                        animateIn="fadeInDown"
                    >
                        <div className={cn("h3", styles.subtitle)}>
                            {t('technology.development.card3.title')}
                        </div>
                        <div className={styles.content}>{t('technology.development.card3.content')}</div>
                        <div className={styles.preview}>
                            <div className={styles.inner}>
                                <Image
                                    src="/images/development-pic-5.png"
                                    layout="fill"
                                    alt="Figure"
                                />
                            </div>
                        </div>
                        <div className={styles.foot}>
                            <div
                                className={styles.more}
                                style={{ color: "#E87A95" }}
                            >
                                {t('technology.development.learnMore')}
                            </div>
                            <Icon
                                className={styles.arrow}
                                name="arrow-right"
                                size="26"
                            />
                        </div>
                    </Card>
                    <Card
                        className={styles.card}
                        url="/technology"
                        color="#EBB15B"
                        animateIn="fadeInDown"
                    >
                        <div className={cn("h3", styles.subtitle)}>
                            {t('technology.development.card4.title')}
                        </div>
                        <div className={styles.content}>{t('technology.development.card4.content')}</div>
                        <div className={styles.preview}>
                            <div className={styles.inner}>
                                <Image
                                    src="/images/development-pic-1.png"
                                    layout="fill"
                                    alt="Figure"
                                />
                            </div>
                        </div>
                        <div className={styles.foot}>
                            <div
                                className={styles.more}
                                style={{ color: "#EBB15B" }}
                            >
                               {t('technology.development.learnMore')}
                            </div>
                            <Icon
                                className={styles.arrow}
                                name="arrow-right"
                                size="26"
                            />
                        </div>
                    </Card>
                
            </div>
        </div>
        <div className={styles.images}>
            {images.map((image, index) => (
                <Parallax
                    className={styles.image}
                    speed={4}
                    easing="easeInQuad"
                    key={index}
                >
                    <Image src={image} layout="fill" alt="Figure" />
                </Parallax>
            ))}
        </div>
    </div>
)};

export default Development;
