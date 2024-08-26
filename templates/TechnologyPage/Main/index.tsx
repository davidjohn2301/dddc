import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";
import Scroll from "@/components/Scroll";
import { useTranslation } from "react-i18next";

const images = [
    "/images/figures/figure-11.png",
    "/images/figures/figure-12.png",
    "/images/figures/figure-13.png",
    "/images/figures/figure-14.png",
];

type MainProps = {
    scrollToRef: any;
};

const Main = ({ scrollToRef }: MainProps) => {
    const {t} = useTranslation()
    return (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.wrap}>
                <div className={styles.stage}>{t('technology.main.stage')}</div>
                <div className={cn("h1", styles.title)}>
                {t('technology.main.title')}
                </div>
                <div className={styles.info}>
                {t('technology.main.info')}
                </div>
            </div>
            <div className={styles.images}>
                <div className={styles.image}>
                    <Image
                        src="/images/lines-3.svg"
                        width={1600}
                        height={1500}
                        alt="Lines"
                    />
                </div>
                {images.map((image, index) => (
                    <Parallax
                        className={styles.image}
                        speed={1}
                        easing="easeInQuad"
                        rotate={[-4, 15]}
                        key={index}
                    >
                        <Image src={image} layout="fill" alt="Figure" />
                    </Parallax>
                ))}
            </div>
            <Scroll
                className={styles.scroll}
                title={t('technology.main.scroll')}
                onScroll={() =>
                    scrollToRef.current.scrollIntoView({
                        behavior: "smooth",
                    })
                }
            />
        </div>
    </div>
)};

export default Main;
