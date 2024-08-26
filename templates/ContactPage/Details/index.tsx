import { useState } from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./Details.module.sass";
import Form from "../Form";
import Socials from "@/components/Socials";

import { socials } from "@/constants/socials";
import { useTranslation } from "react-i18next";

type DetailsProps = {
    scrollToRef: any;
};

const Details = ({ scrollToRef }: DetailsProps) => {
    const {t} = useTranslation()
    return (
        <div className={cn("section", styles.section)}>
            <div
                className={cn("anchor", styles.anchor)}
                ref={scrollToRef}
            ></div>
            <div className={cn("container", styles.container)}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <Form />
                    </div>
                    <div className={styles.col}>
                        <div className={styles.item}>
                            <div className={styles.category}>{t('contact.form.support')}</div>
                            <Link href="mailto:support@dddc.io">
                                <a className={cn("h5", styles.content)}>
                                support@dddc.io
                                </a>
                            </Link>
                        </div>
                        <div className={styles.line}>
                            <div className={styles.item}>
                                <div className={styles.category}>{t('contact.form.address')}</div>
                                <div className={cn("h5", styles.content)}>
                                    <p>The Office 5, Level 3</p>
                                    <p>Office 303 One Central</p>
                                    <p>Dubai, UAE</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.category}>{t('contact.form.phone')}</div>
                            <Link href="tel:+44987456321">
                                <a className={cn("h5", styles.content)}>
                                +971 4 388 9925
                                </a>
                            </Link>
                        </div>
                        <Socials
                            socialClassName={styles.social}
                            socials={socials}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
