import cn from "classnames";
import styles from "./Content.module.sass";
import Image from "@/components/Image";
import Card from "@/components/Card";
import { useTranslation } from "react-i18next";

type ContentProps = {};

const Content = ({}: ContentProps) => {
    const {t} = useTranslation()
    return (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <Card
                className={styles.card}
                backgroundCardClass={styles.background}
                cornerCardClass={styles.corner}
                squareCardClass={styles.square}
            >
                <div className={styles.caption}>
                    {t('articlePage.main.title')}
                </div>
                <div className={styles.video}>
                    <video
                        className={styles.confetti}
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/videos/video.mp4" type="video/mp4" />
                    </video>
                </div>
            </Card>
            <div className={cn("content", styles.content)}>
                <section>
                    <h2>{t('articlePage.content.c1.h2')}</h2>
                    <h3>{t('articlePage.content.c1.h3')}</h3>
                    <p>
                    {t('articlePage.content.c1.p1')}
                    </p>
                    <p>
                    {t('articlePage.content.c1.p2')}
                    </p>
                    <figure>
                        <Image
                            src="/images/content-pic-1.jpg"
                            width={996}
                            height={640}
                            alt="Article"
                        />
                    </figure>
                </section>
                <section>
                    <h2>{t('articlePage.content.c2.h2')}</h2>
                    <h3>{t('articlePage.content.c2.h3')}</h3>
                    <p>
                    {t('articlePage.content.c2.p1')}
                    </p>
                    <p>
                    {t('articlePage.content.c2.p2')}
                    </p>
                    <figure>
                        <Image
                            src="/images/content-pic-2.jpg"
                            width={996}
                            height={640}
                            alt="Article"
                        />
                    </figure>
                    <ul>
                        <li>{t('articlePage.content.c2.li1')}</li>
                        <li>{t('articlePage.content.c2.li2')}</li>
                        <li>{t('articlePage.content.c2.li3')}</li>
                    </ul>
                    <figure>
                        <Image
                            src="/images/content-pic-3.jpg"
                            width={996}
                            height={640}
                            alt="Article"
                        />
                    </figure>
                </section>
            </div>
        </div>
    </div>
)};

export default Content;
