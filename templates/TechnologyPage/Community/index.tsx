import cn from "classnames";
import styles from "./Community.module.sass";
import Socials from "@/components/Socials";

import { socials } from "@/constants/socials";
import { useTranslation } from "react-i18next";

const community = [
    {
        value: "$110M",
        content:
            "Stay current on the latest DDDC project developments, news, and content, updated daily.",
    },
    {
        value: "90M+",
        content:
            "Stay current on the latest DDDC project developments, news, and content, updated daily. Stay current on the latest DDDC project developments, news, and content, updated daily.",
    },
    {
        value: "220K+",
        content:
            "Stay current on the latest DDDC project developments, news, and content, updated daily.",
    },
];

type CommunityProps = {};

const Community = ({}: CommunityProps) => {
    const {t} = useTranslation()
    return (
    <div className={cn("section", styles.section)}>
        <div className={cn("container-large", styles.container)}>
            <div className={styles.wrap}>
                <div className={styles.row}>
                    <div className={styles.details}>
                        <div className={cn("h2", styles.title)}>
                            {t('technology.community.title')}
                        </div>
                        <div className={styles.info}>
                        {t('technology.community.info')}
                        </div>
                    </div>
                    <Socials
                        className={styles.socials}
                        socialClassName={styles.social}
                        socials={socials}
                        dark
                        large
                    />
                </div>
            </div>
            <div className={styles.list}>
                
                    <div className={styles.item}>
                        <div className={cn("h2", styles.value)}>
                        $110M
                        </div>
                        <div className={styles.content}>{t('technology.community.item1')}</div>
                    </div>
                    <div className={styles.item}>
                        <div className={cn("h2", styles.value)}>
                        90M+
                        </div>
                        <div className={styles.content}>{t('technology.community.item2')}</div>
                    </div>
                    <div className={styles.item}>
                        <div className={cn("h2", styles.value)}>
                        220K+
                        </div>
                        <div className={styles.content}>{t('technology.community.item3')}</div>
                    </div>
               
            </div>
        </div>
    </div>
)};

export default Community;
