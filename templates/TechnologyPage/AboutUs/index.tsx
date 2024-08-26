import cn from "classnames";
import styles from "./AboutUs.module.sass";
import Image from "@/components/Image";
import { useTranslation } from "react-i18next";


type AboutUsProps = {};

const AboutUs = ({}: AboutUsProps) => {
    const {t} = useTranslation()
    return (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.row}>
                <div className={styles.wrap}>
                    <div className={cn("h2", styles.title)}>
                        {t('technology.about.title')}
                    </div>
                    <div className={styles.info}>
                    {t('technology.about.info')}
                    </div>
                    <div className={styles.list}>
                        
                            <div className={styles.item} >
                                <div className={cn("h3", styles.number)}>
                                    1
                                </div>
                                <div className={styles.content}>{t('technology.about.item1')}</div>
                            </div>
                            <div className={styles.item} >
                                <div className={cn("h3", styles.number)}>
                                    2
                                </div>
                                <div className={styles.content}>{t('technology.about.item2')}</div>
                            </div>
                        
                    </div>
                    <div className={styles.line}>
                        <button className={cn("button", styles.button)}>
                            <span>{t('technology.about.launchApp')}</span>
                        </button>
                        <button className={styles.document}>
                        {t('technology.about.read')}
                        </button>
                    </div>
                </div>
                <div className={styles.preview}>
                    <Image
                        src="/images/about-pic-2.png"
                        width={712}
                        height={682}
                        alt="Figure"
                    />
                </div>
            </div>
        </div>
    </div>
)};

export default AboutUs;
