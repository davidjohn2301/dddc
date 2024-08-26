import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";
import { useTranslation } from "react-i18next";

const images = [
    "/images/figures/figure-1.png",
    "/images/figures/figure-2.png",
    "/images/figures/figure-5.png",
];

type MainProps = {};

const Main = ({}: MainProps) => {
    const {t} = useTranslation()

    return(
    <div className={styles.section}>
        <div className={cn("container", styles.container)}>
            <div className={styles.wrap}>
                <div className={styles.stage}>{t('careers.main.stage')}</div>
                <div className={cn("h1", styles.title)}>{t('careers.main.title')}</div>
                <div className={styles.info}>
                {t('careers.main.info')}
                </div>
            </div>
            <div className={styles.images}>
                <div className={styles.image}>
                    <Image
                        src="/images/lines-4.svg"
                        width={1578}
                        height={1585}
                        alt="Lines"
                    />
                </div>
                {images.map((image, index) => (
                    <Parallax
                        className={styles.image}
                        speed={1}
                        easing="easeInQuad"
                        rotate={index === 2 ? [-2, 10] : [4, -15]}
                        key={index}
                    >
                        <Image src={image} layout="fill" alt="Figure" />
                    </Parallax>
                ))}
            </div>
        </div>
    </div>
)};

export default Main;
