import cn from "classnames";
import styles from "./Statistics.module.sass";

import { statistics } from "@/mocks/statistics";
import { useTranslation } from "react-i18next";

type StatisticsProps = {};

const Statistics = ({}: StatisticsProps) => {
    const {t} = useTranslation();
    return (
    <div className={cn("section", styles.section)}>
        <div className={cn("container-large", styles.container)}>
            <div className={styles.wrapper}>
                <div className={styles.list}>
                    
                        <div className={styles.item} >
                            <div className={cn("h3", styles.value)}>
                                {t('statistic.value1')}
                            </div>
                            <div className={styles.title}>{t('statistic.title1')}</div>
                        </div>
                        <div className={styles.item} >
                            <div className={cn("h3", styles.value)}>
                                {t('statistic.value2')}
                            </div>
                            <div className={styles.title}>{t('statistic.title2')}</div>
                        </div>
                        <div className={styles.item} >
                            <div className={cn("h3", styles.value)}>
                                {t('statistic.value3')}
                            </div>
                            <div className={styles.title}>{t('statistic.title3')}</div>
                        </div>
                        <div className={styles.item} >
                            <div className={cn("h3", styles.value)}>
                                {t('statistic.value4')}
                            </div>
                            <div className={styles.title}>{t('statistic.title4')}</div>
                        </div>
                        <div className={styles.item} >
                            <div className={cn("h3", styles.value)}>
                                {t('statistic.value5')}
                            </div>
                            <div className={styles.title}>{t('statistic.title5')}</div>
                        </div>
                        <div className={styles.item} >
                            <div className={cn("h3", styles.value)}>
                                {t('statistic.value6')}
                            </div>
                            <div className={styles.title}>{t('statistic.title6')}</div>
                        </div>
                </div>
            </div>
        </div>
    </div>
)};

export default Statistics;
