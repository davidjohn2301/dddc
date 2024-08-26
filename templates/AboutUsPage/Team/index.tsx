import { AnimationOnScroll } from "react-animation-on-scroll";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";
import styles from "./Team.module.sass";
import Image from "@/components/Image";

import { team } from "@/constants/team";
import { useTranslation } from "react-i18next";

type TeamProps = {};

const Team = ({}: TeamProps) => {
    const isMobile = useMediaQuery({
        query: "(max-width: 767px)",
    });
    const {t} = useTranslation()

    return (
        <div className={cn("section", styles.section)}>
            <div className={cn("container", styles.container)}>
                <div className={styles.head}>
                    <div className={cn("h3", styles.subtitle)}>
                        {t('teamAbout.subtitle')}
                    </div>
                    <div className={cn("h2", styles.title)}>
                        {t('teamAbout.title')}
                    </div>
                </div>
                <div className={styles.list}>
                    
                        <AnimationOnScroll
                            className={styles.item}
                            animateIn="fadeInDown"
                            delay={isMobile ? 0 : 0}
                            animateOnce
                        >
                            <div
                                className={styles.square}
                                style={{
                                    backgroundColor: "#89EB5B",
                                }}
                            ></div>
                            <div className={styles.photo}>
                                <div className={styles.inner}>
                                    <Image
                                        src="/images/team/photo-1.png"
                                        layout="fill"
                                        objectFit="cover"
                                        alt="Avatar"
                                    />
                                </div>
                                <svg
                                    width="0"
                                    height="0"
                                    style={{ display: "block" }}
                                >
                                    <clipPath
                                        id="polygonPhoto"
                                        clipPathUnits="objectBoundingBox"
                                    >
                                        <path d="M1 1V.215C1 .196.993.177.98.162L.851.023C.838.008.819 0 .8 0H0v1" />
                                    </clipPath>
                                </svg>
                            </div>
                            <div className={styles.details}>
                                <div className={cn("h4", styles.name)}>
                                    {t('teamAbout.name1')}
                                </div>
                                <div className={styles.position}>
                                Co-Founder
                                </div>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll
                            className={styles.item}
                            animateIn="fadeInDown"
                            delay={isMobile ? 0 : 200}
                            animateOnce
                        >
                            <div
                                className={styles.square}
                                style={{
                                    backgroundColor: "#89EB5B",
                                }}
                            ></div>
                            <div className={styles.photo}>
                                <div className={styles.inner}>
                                    <Image
                                        src="/images/team/photo-2.png"
                                        layout="fill"
                                        objectFit="cover"
                                        alt="Avatar"
                                    />
                                </div>
                                <svg
                                    width="0"
                                    height="0"
                                    style={{ display: "block" }}
                                >
                                    <clipPath
                                        id="polygonPhoto"
                                        clipPathUnits="objectBoundingBox"
                                    >
                                        <path d="M1 1V.215C1 .196.993.177.98.162L.851.023C.838.008.819 0 .8 0H0v1" />
                                    </clipPath>
                                </svg>
                            </div>
                            <div className={styles.details}>
                                <div className={cn("h4", styles.name)}>
                                    {t('teamAbout.name2')}
                                </div>
                                <div className={styles.position}>
                                Co-Founder
                                </div>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll
                            className={styles.item}
                            animateIn="fadeInDown"
                            delay={isMobile ? 0 : 400}
                            animateOnce
                        >
                            <div
                                className={styles.square}
                                style={{
                                    backgroundColor: "#89EB5B",
                                }}
                            ></div>
                            <div className={styles.photo}>
                                <div className={styles.inner}>
                                    <Image
                                        src="/images/team/photo-3.png"
                                        layout="fill"
                                        objectFit="cover"
                                        alt="Avatar"
                                    />
                                </div>
                                <svg
                                    width="0"
                                    height="0"
                                    style={{ display: "block" }}
                                >
                                    <clipPath
                                        id="polygonPhoto"
                                        clipPathUnits="objectBoundingBox"
                                    >
                                        <path d="M1 1V.215C1 .196.993.177.98.162L.851.023C.838.008.819 0 .8 0H0v1" />
                                    </clipPath>
                                </svg>
                            </div>
                            <div className={styles.details}>
                                <div className={cn("h4", styles.name)}>
                                    {t('teamAbout.name3')}
                                </div>
                                <div className={styles.position}>
                                Co-Founder
                                </div>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll
                            className={styles.item}
                            animateIn="fadeInDown"
                            delay={isMobile ? 0 : 0}
                            animateOnce
                        >
                            <div
                                className={styles.square}
                                style={{
                                    backgroundColor: "#89EB5B",
                                }}
                            ></div>
                            <div className={styles.photo}>
                                <div className={styles.inner}>
                                    <Image
                                        src="/images/team/photo-4.png"
                                        layout="fill"
                                        objectFit="cover"
                                        alt="Avatar"
                                    />
                                </div>
                                <svg
                                    width="0"
                                    height="0"
                                    style={{ display: "block" }}
                                >
                                    <clipPath
                                        id="polygonPhoto"
                                        clipPathUnits="objectBoundingBox"
                                    >
                                        <path d="M1 1V.215C1 .196.993.177.98.162L.851.023C.838.008.819 0 .8 0H0v1" />
                                    </clipPath>
                                </svg>
                            </div>
                            <div className={styles.details}>
                                <div className={cn("h4", styles.name)}>
                                    {t('teamAbout.name4')}
                                </div>
                                <div className={styles.position}>
                                Sr. Engineer
                                </div>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll
                            className={styles.item}
                            animateIn="fadeInDown"
                            delay={isMobile ? 0 : 200}
                            animateOnce
                        >
                            <div
                                className={styles.square}
                                style={{
                                    backgroundColor: "#89EB5B",
                                }}
                            ></div>
                            <div className={styles.photo}>
                                <div className={styles.inner}>
                                    <Image
                                        src="/images/team/photo-5.png"
                                        layout="fill"
                                        objectFit="cover"
                                        alt="Avatar"
                                    />
                                </div>
                                <svg
                                    width="0"
                                    height="0"
                                    style={{ display: "block" }}
                                >
                                    <clipPath
                                        id="polygonPhoto"
                                        clipPathUnits="objectBoundingBox"
                                    >
                                        <path d="M1 1V.215C1 .196.993.177.98.162L.851.023C.838.008.819 0 .8 0H0v1" />
                                    </clipPath>
                                </svg>
                            </div>
                            <div className={styles.details}>
                                <div className={cn("h4", styles.name)}>
                                    {t('teamAbout.name5')}
                                </div>
                                <div className={styles.position}>
                                Sr. Engineer
                                </div>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll
                            className={styles.item}
                            animateIn="fadeInDown"
                            delay={isMobile ? 0 : 400}
                            animateOnce
                        >
                            <div
                                className={styles.square}
                                style={{
                                    backgroundColor: "#89EB5B",
                                }}
                            ></div>
                            <div className={styles.photo}>
                                <div className={styles.inner}>
                                    <Image
                                        src="/images/team/photo-6.png"
                                        layout="fill"
                                        objectFit="cover"
                                        alt="Avatar"
                                    />
                                </div>
                                <svg
                                    width="0"
                                    height="0"
                                    style={{ display: "block" }}
                                >
                                    <clipPath
                                        id="polygonPhoto"
                                        clipPathUnits="objectBoundingBox"
                                    >
                                        <path d="M1 1V.215C1 .196.993.177.98.162L.851.023C.838.008.819 0 .8 0H0v1" />
                                    </clipPath>
                                </svg>
                            </div>
                            <div className={styles.details}>
                                <div className={cn("h4", styles.name)}>
                                    {t('teamAbout.name6')}
                                </div>
                                <div className={styles.position}>
                                Sr. Engineer
                                </div>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll
                            className={styles.item}
                            animateIn="fadeInDown"
                            delay={isMobile ? 0 : 0}
                            animateOnce
                        >
                            <div
                                className={styles.square}
                                style={{
                                    backgroundColor: "#89EB5B",
                                }}
                            ></div>
                            <div className={styles.photo}>
                                <div className={styles.inner}>
                                    <Image
                                        src="/images/team/photo-7.png"
                                        layout="fill"
                                        objectFit="cover"
                                        alt="Avatar"
                                    />
                                </div>
                                <svg
                                    width="0"
                                    height="0"
                                    style={{ display: "block" }}
                                >
                                    <clipPath
                                        id="polygonPhoto"
                                        clipPathUnits="objectBoundingBox"
                                    >
                                        <path d="M1 1V.215C1 .196.993.177.98.162L.851.023C.838.008.819 0 .8 0H0v1" />
                                    </clipPath>
                                </svg>
                            </div>
                            <div className={styles.details}>
                                <div className={cn("h4", styles.name)}>
                                    {t('teamAbout.name7')}
                                </div>
                                <div className={styles.position}>
                                Sr. Engineer
                                </div>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll
                            className={styles.item}
                            animateIn="fadeInDown"
                            delay={isMobile ? 0 : 200}
                            animateOnce
                        >
                            <div
                                className={styles.square}
                                style={{
                                    backgroundColor: "#89EB5B",
                                }}
                            ></div>
                            <div className={styles.photo}>
                                <div className={styles.inner}>
                                    <Image
                                        src="/images/team/photo-8.png"
                                        layout="fill"
                                        objectFit="cover"
                                        alt="Avatar"
                                    />
                                </div>
                                <svg
                                    width="0"
                                    height="0"
                                    style={{ display: "block" }}
                                >
                                    <clipPath
                                        id="polygonPhoto"
                                        clipPathUnits="objectBoundingBox"
                                    >
                                        <path d="M1 1V.215C1 .196.993.177.98.162L.851.023C.838.008.819 0 .8 0H0v1" />
                                    </clipPath>
                                </svg>
                            </div>
                            <div className={styles.details}>
                                <div className={cn("h4", styles.name)}>
                                    {t('teamAbout.name8')}
                                </div>
                                <div className={styles.position}>
                                Sr. Engineer
                                </div>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll
                            className={styles.item}
                            animateIn="fadeInDown"
                            delay={isMobile ? 0 : 400}
                            animateOnce
                        >
                            <div
                                className={styles.square}
                                style={{
                                    backgroundColor: "#89EB5B",
                                }}
                            ></div>
                            <div className={styles.photo}>
                                <div className={styles.inner}>
                                    <Image
                                        src="/images/team/photo-9.png"
                                        layout="fill"
                                        objectFit="cover"
                                        alt="Avatar"
                                    />
                                </div>
                                <svg
                                    width="0"
                                    height="0"
                                    style={{ display: "block" }}
                                >
                                    <clipPath
                                        id="polygonPhoto"
                                        clipPathUnits="objectBoundingBox"
                                    >
                                        <path d="M1 1V.215C1 .196.993.177.98.162L.851.023C.838.008.819 0 .8 0H0v1" />
                                    </clipPath>
                                </svg>
                            </div>
                            <div className={styles.details}>
                                <div className={cn("h4", styles.name)}>
                                    {t('teamAbout.name9')}
                                </div>
                                <div className={styles.position}>
                                Sr. Engineer
                                </div>
                            </div>
                        </AnimationOnScroll>
                </div>
            </div>
        </div>
    );
};

export default Team;
