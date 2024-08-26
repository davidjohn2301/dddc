import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";
import styles from "./Solutions.module.sass";
import Card from "@/components/Card";
import Image from "@/components/Image";

import { solutions, images } from "@/constants/solutions";
import { useTranslation } from "react-i18next";

type SolutionsProps = {};

const Solutions = ({}: SolutionsProps) => {
    const isMobile = useMediaQuery({
        query: "(max-width: 767px)",
    });
    const {t} = useTranslation();
    return (
        <div className={cn("section", styles.section)}>
            <div className={cn("container-small", styles.container)}>
                <div className={styles.head}>
                    <div className={cn("h2", styles.title)}>
                        {t('solution.title')}
                    </div>
                    <div className={styles.info}>
                        DDDC&apos;s {t('solution.info')}
                    </div>
                </div>
                <div className={styles.list}>
                    
                        <Card
                            className={styles.card}
                            innerCardClass={styles.inner}
                            color="#89EB5B"
                            animateIn="fadeInDown"
                            delay={isMobile ? 0 : 0}
                            small
                        >
                            <div className={styles.icon}>
                                <Image
                                    src='/images/icon-1.svg'
                                    width={32}
                                    height={32}
                                    alt="Figure"
                                />
                            </div>
                            <div className={cn("h3", styles.subtitle)}>
                                {t('cardSolution.title1')}
                            </div>
                            <div className={styles.content}>{t('cardSolution.content1')}</div>
                            <div
                                className={cn("status", styles.status)}
                                style={{ color: "#89EB5B" }}
                            >
                                ONLINE
                            </div>
                        </Card>
                        <Card
                            className={styles.card}
                            innerCardClass={styles.inner}
                            color="#89EB5B"
                            animateIn="fadeInDown"
                            delay={isMobile ? 0 : 200}
                            small
                        >
                            <div className={styles.icon}>
                                <Image
                                    src='/images/icon-2.svg'
                                    width={32}
                                    height={32}
                                    alt="Figure"
                                />
                            </div>
                            <div className={cn("h3", styles.subtitle)}>
                                {t('cardSolution.title2')}
                            </div>
                            <div className={styles.content}>{t('cardSolution.content2')}</div>
                            <div
                                className={cn("status", styles.status)}
                                style={{ color: "#89EB5B" }}
                            >
                                ONLINE
                            </div>
                        </Card>
                        <Card
                            className={styles.card}
                            innerCardClass={styles.inner}
                            color="#89EB5B"
                            animateIn="fadeInDown"
                            delay={isMobile ? 0 : 400}
                            small
                        >
                            <div className={styles.icon}>
                                <Image
                                    src='/images/icon-3.svg'
                                    width={32}
                                    height={32}
                                    alt="Figure"
                                />
                            </div>
                            <div className={cn("h3", styles.subtitle)}>
                                {t('cardSolution.title3')}
                            </div>
                            <div className={styles.content}>{t('cardSolution.content3')}</div>
                            <div
                                className={cn("status", styles.status)}
                                style={{ color: "#89EB5B" }}
                            >
                                ONLINE
                            </div>
                        </Card>
                        <Card
                            className={styles.card}
                            innerCardClass={styles.inner}
                            color="#EBB15B"
                            animateIn="fadeInDown"
                            delay={isMobile ? 0 : 0}
                            small
                        >
                            <div className={styles.icon}>
                                <Image
                                    src='/images/icon-4.svg'
                                    width={32}
                                    height={32}
                                    alt="Figure"
                                />
                            </div>
                            <div className={cn("h3", styles.subtitle)}>
                                {t('cardSolution.title4')}
                            </div>
                            <div className={styles.content}>{t('cardSolution.content4')}</div>
                            <div
                                className={cn("status", styles.status)}
                                style={{ color: "#EBB15B" }}
                            >
                                DEVELOPMENT
                            </div>
                        </Card>
                        <Card
                            className={styles.card}
                            innerCardClass={styles.inner}
                            color="#EBB15B"
                            animateIn="fadeInDown"
                            delay={isMobile ? 0 : 200}
                            small
                        >
                            <div className={styles.icon}>
                                <Image
                                    src='/images/icon-5.svg'
                                    width={32}
                                    height={32}
                                    alt="Figure"
                                />
                            </div>
                            <div className={cn("h3", styles.subtitle)}>
                                {t('cardSolution.title5')}
                            </div>
                            <div className={styles.content}>{t('cardSolution.content5')}</div>
                            <div
                                className={cn("status", styles.status)}
                                style={{ color: "#EBB15B" }}
                            >
                                DEVELOPMENT
                            </div>
                        </Card>
                        <Card
                            className={styles.card}
                            innerCardClass={styles.inner}
                            color="#6F5BEB"
                            animateIn="fadeInDown"
                            delay={isMobile ? 0 : 400}
                            small
                        >
                            <div className={styles.icon}>
                                <Image
                                    src='/images/icon-6.svg'
                                    width={32}
                                    height={32}
                                    alt="Figure"
                                />
                            </div>
                            <div className={cn("h3", styles.subtitle)}>
                                {t('cardSolution.title6')}
                            </div>
                            <div className={styles.content}>{t('cardSolution.content6')}</div>
                            <div
                                className={cn("status", styles.status)}
                                style={{ color: "#6F5BEB" }}
                            >
                                VOTING
                            </div>
                        </Card>
                    
                </div>
                <div className={styles.images}>
                    {images.map((image, index) => (
                        <Parallax
                            className={styles.image}
                            speed={1}
                            easing="easeInQuad"
                            rotate={index === 1 ? [2, -6] : [-4, 15]}
                            key={index}
                        >
                            <Image
                                src={image.src}
                                width={image.width}
                                height={image.height}
                                alt={image.alt}
                            />
                        </Parallax>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Solutions;
