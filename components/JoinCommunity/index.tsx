import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./JoinCommunity.module.sass";
import Image from "@/components/Image";
import { useTranslation } from "react-i18next";

const images = [
    "/images/figures/figure-1.png",
    "/images/figures/figure-2.png",
    "/images/join/image-3.svg",
    "/images/figures/figure-5.png",
    "/images/figures/figure-6.png",
];

type JoinCommunityProps = {
    title: string;
};

const JoinCommunity = ({title}: JoinCommunityProps) => {
    const {t} = useTranslation()
    return (
    <div className={styles.section}>
        <div className={cn("container", styles.container)}>
            <div className={styles.wrap}>
                <div className={cn("h2", styles.title)}>{title}</div>
                <div className={styles.info}>
                    {t('joinCommunity.info1')}{" "}
                    <a
                        className={styles.social}
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {t('joinCommunity.info2')}
                    </a>
                    .
                </div>
                <a
                    className={cn("button", styles.button)}
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>{t('joinCommunity.buttonJoin')}</span>
                </a>
            </div>
        </div>
        <div className={styles.images}>
            <div className={styles.image}>
                <Image
                    src="/images/join/lines.svg"
                    width={1744}
                    height={700}
                    alt="Figure"
                />
            </div>
            {images.map((image, index) => (
                <Parallax
                    className={styles.image}
                    speed={1}
                    easing="easeInQuad"
                    rotate={index === 2 ? [2, -20] : [-4, 15]}
                    key={index}
                >
                    <Image src={image} layout="fill" alt="Figure" />
                </Parallax>
            ))}
        </div>
    </div>
)};

export default JoinCommunity;
