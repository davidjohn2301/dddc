import { AnimationOnScroll } from "react-animation-on-scroll";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";
import styles from "./Reviews.module.sass";
import Image from "@/components/Image";
import { useTranslation } from "react-i18next";

type ReviewsType = {
    author: string;
    position: string;
    avatar: string;
    content: string;
    delay?: number;
};

type ReviewsProps = {
    reviews: ReviewsType[];
};

const Reviews = ({ reviews }: ReviewsProps) => {
    const isMobile = useMediaQuery({
        query: "(max-width: 767px)",
    });
    const {t} = useTranslation()
    return (
        <div className={styles.section}>
            <div className={cn("container", styles.container)}>
                <div className={styles.list}>
                    
                        <AnimationOnScroll
                            className={styles.item}
                            animateIn="fadeInDown"
                            delay={isMobile ? 0 : 0}
                            animateOnce
                        >
                            <div className={styles.content}>
                                “{t('reviews.content1')}”
                            </div>
                            <div className={styles.line}>
                                <div className={styles.avatar}>
                                    <Image
                                        src="/images/avatar-1.jpg"
                                        layout="fill"
                                        objectFit="cover"
                                        alt="Avatar"
                                    />
                                </div>
                                <div className={styles.details}>
                                    <div className={styles.author}>
                                    Markus Freeman
                                    </div>
                                    <div className={styles.position}>
                                    Dev Ops - Azious
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll
                            className={styles.item}
                            animateIn="fadeInDown"
                            delay={isMobile ? 0 : 200}
                            animateOnce
                        >
                            <div className={styles.content}>
                                “{t('reviews.content2')}”
                            </div>
                            <div className={styles.line}>
                                <div className={styles.avatar}>
                                    <Image
                                        src="/images/avatar-2.jpg"
                                        layout="fill"
                                        objectFit="cover"
                                        alt="Avatar"
                                    />
                                </div>
                                <div className={styles.details}>
                                    <div className={styles.author}>
                                    Becky Stal
                                    </div>
                                    <div className={styles.position}>
                                    Sr. Engineer - FauxChain
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll
                            className={styles.item}
                            animateIn="fadeInDown"
                            delay={isMobile ? 0 : 400}
                            animateOnce
                        >
                            <div className={styles.content}>
                                “{t('reviews.content3')}”
                            </div>
                            <div className={styles.line}>
                                <div className={styles.avatar}>
                                    <Image
                                        src="/images/avatar-3.jpg"
                                        layout="fill"
                                        objectFit="cover"
                                        alt="Avatar"
                                    />
                                </div>
                                <div className={styles.details}>
                                    <div className={styles.author}>
                                    Ethan Jordan
                                    </div>
                                    <div className={styles.position}>
                                    Blockchain Analyst - Enzotech
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    
                </div>
            </div>
        </div>
    );
};

export default Reviews;
