import cn from "classnames";
import styles from "./Values.module.sass";
import Card from "@/components/Card";

import { hexToRgbA } from "@/utils/index";
import { useTranslation } from "react-i18next";

const list = [
    {
        title: "Everything DDDC weekly report",
        status: "TAG LINE",
        color: "#EB5BE5",
    },
    {
        title: "Everything DDDC weekly report",
        status: "TAG LINE",
        color: "#6F5BEB",
    },
    {
        title: "Everything DDDC weekly report",
        status: "TAG LINE",
        color: "#89EB5B",
    },
];

type ValuesProps = {};

const Values = ({}: ValuesProps) => {
    const {t} = useTranslation()
    return (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={cn("h3", styles.subtitle)}>{t('valueAbout.subtitle')}</div>
                    <div className={cn("h2", styles.title)}>
                    {t('valueAbout.title')}
                    </div>
                    <div className={styles.content}>
                    {t('valueAbout.content')}
                    </div>
                    <button className={cn("button", styles.button)}>
                        <span>{t('valueAbout.button')}</span>
                    </button>
                </div>
                <div className={styles.col}>
                    <div className={styles.list}>
                        
                            <Card
                                className={styles.card}
                                innerCardClass={styles.inner}
                                color="#EB5BE5"
                                animateIn="fadeInDown"
                                small
                            >
                                <div
                                    className={cn("status", styles.status)}
                                    style={{
                                        backgroundColor: hexToRgbA(
                                            "#EB5BE5",
                                            0.05
                                        ),
                                        color: "#EB5BE5",
                                    }}
                                >
                                    {t('valueAbout.status1')}
                                </div>
                                <div className={cn("h4", styles.info)}>
                                {t('valueAbout.list1')}
                                </div>
                            </Card>
                            <Card
                                className={styles.card}
                                innerCardClass={styles.inner}
                                color="#6F5BEB"
                                animateIn="fadeInDown"
                                small
                            >
                                <div
                                    className={cn("status", styles.status)}
                                    style={{
                                        backgroundColor: hexToRgbA(
                                            "#6F5BEB",
                                            0.05
                                        ),
                                        color: "#6F5BEB",
                                    }}
                                >
                                    {t('valueAbout.status2')}
                                </div>
                                <div className={cn("h4", styles.info)}>
                                {t('valueAbout.list2')}
                                </div>
                            </Card>
                            <Card
                                className={styles.card}
                                innerCardClass={styles.inner}
                                color="#89EB5B"
                                animateIn="fadeInDown"
                                small
                            >
                                <div
                                    className={cn("status", styles.status)}
                                    style={{
                                        backgroundColor: hexToRgbA(
                                            "#89EB5B",
                                            0.05
                                        ),
                                        color: "#89EB5B",
                                    }}
                                >
                                    {t('valueAbout.status3')}
                                </div>
                                <div className={cn("h4", styles.info)}>
                                {t('valueAbout.list3')}
                                </div>
                            </Card>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
)};

export default Values;
