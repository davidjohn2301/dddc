import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Main.module.sass";
import Scroll from "@/components/Scroll";
import Image from "@/components/Image";
import { useTranslation } from "react-i18next";

type MainProps = {
    scrollToRef: any;
};

const Main = ({ scrollToRef }: MainProps) => {
    const {t} = useTranslation()
    return (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.wrap}>
                <div className={styles.stage}>{t('mainAbout.stage')}</div>
                <div className={cn("h1", styles.title)}>{t('mainAbout.title')}</div>
                <div className={styles.info}>
                {t('mainAbout.info')}
                </div>
                <Scroll
                    className={styles.scroll}
                    title="SCROLL TO EXPLORE"
                    onScroll={() =>
                        scrollToRef.current.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                    row
                />
            </div>
        </div>
        <div className={styles.images}>
            <div className={styles.image}>
                <Image src="/images/lines-1.svg" layout="fill" alt="Lines" />
            </div>
            <Parallax
                className={styles.image}
                speed={1}
                easing="easeInQuad"
                rotate={[2, -10]}
            >
                <Image
                    src="/images/figures/figure-3.png"
                    layout="fill"
                    alt="Figure"
                />
            </Parallax>
        </div>
    </div>
)};

export default Main;
