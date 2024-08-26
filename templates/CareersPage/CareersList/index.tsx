import cn from "classnames";
import styles from "./CareersList.module.sass";
import Icon from "@/components/Icon";
import Image from "@/components/Image";

import { careers } from "@/mocks/careers";
import { useTranslation } from "react-i18next";

type CareersListProps = {};

const CareersList = ({}: CareersListProps) => {
  const { t } = useTranslation();
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.item}>
          <div className={styles.details}>
            <div className={styles.line}>
              <div
                className={cn({
                  "status-pink": styles.status,
                })}>
                REMOTE
              </div>
              <div
                className={cn({
                  "status-green": styles.status,
                })}>
                FULL-TIME
              </div>
            </div>
            <div className={cn("h3", styles.title)}>
              {t("careers.item1.title")}
            </div>
            <div className={styles.content}>{t("careers.item1.content")}</div>
            <a
              className={styles.apply}
              href="/"
              target="_blank"
              rel="noreferrer">
              {t("careers.apply")} <Icon name="arrow-right" size="26" />
            </a>
          </div>
          <div className={styles.preview}>
            <Image
              src="/images/blog/photo-1.png"
              layout="fill"
              objectFit="cover"
              alt="Careers"
            />
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.details}>
            <div className={styles.line}>
              <div
                className={cn({
                  "status-green": styles.status,
                })}>
                FULL-TIME
              </div>
            </div>
            <div className={cn("h3", styles.title)}>
              {t("careers.item2.title")}
            </div>
            <div className={styles.content}>{t("careers.item2.content")}</div>
            <a
              className={styles.apply}
              href="/"
              target="_blank"
              rel="noreferrer">
              {t("careers.apply")} <Icon name="arrow-right" size="26" />
            </a>
          </div>
          <div className={styles.preview}>
            <Image
              src="/images/blog/photo-2.png"
              layout="fill"
              objectFit="cover"
              alt="Careers"
            />
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.details}>
            <div className={styles.line}>
              <div
                className={cn({
                  "status-green": styles.status,
                })}>
                FULL-TIME
              </div>
              <div
                className={cn({
                  "status-pink": styles.status,
                })}>
                REMOTE
              </div>
            </div>
            <div className={cn("h3", styles.title)}>
              {t("careers.item3.title")}
            </div>
            <div className={styles.content}>{t("careers.item3.content")}</div>
            <a
              className={styles.apply}
              href="/"
              target="_blank"
              rel="noreferrer">
              {t("careers.apply")} <Icon name="arrow-right" size="26" />
            </a>
          </div>
          <div className={styles.preview}>
            <Image
              src="/images/blog/photo-3.png"
              layout="fill"
              objectFit="cover"
              alt="Careers"
            />
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.details}>
            <div className={styles.line}>
              <div
                className={cn({
                  "status-green": styles.status,
                })}>
                FULL-TIME
              </div>
              <div
                className={cn({
                  "status-pink": styles.status,
                })}>
                REMOTE
              </div>
            </div>
            <div className={cn("h3", styles.title)}>
              {t("careers.item4.title")}
            </div>
            <div className={styles.content}>{t("careers.item4.content")}</div>
            <a
              className={styles.apply}
              href="/"
              target="_blank"
              rel="noreferrer">
              {t("careers.apply")} <Icon name="arrow-right" size="26" />
            </a>
          </div>
          <div className={styles.preview}>
            <Image
              src="/images/blog/photo-4.png"
              layout="fill"
              objectFit="cover"
              alt="Careers"
            />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.details}>
            <div className={styles.line}>
              <div
                className={cn({
                  "status-green": styles.status,
                })}>
                FULL-TIME
              </div>
              <div
                className={cn({
                  "status-pink": styles.status,
                })}>
                REMOTE
              </div>
            </div>
            <div className={cn("h3", styles.title)}>
              {t("careers.item5.title")}
            </div>
            <div className={styles.content}>{t("careers.item5.content")}</div>
            <a
              className={styles.apply}
              href="/"
              target="_blank"
              rel="noreferrer">
              {t("careers.apply")} <Icon name="arrow-right" size="26" />
            </a>
          </div>
          <div className={styles.preview}>
            <Image
              src="/images/blog/photo-1.png"
              layout="fill"
              objectFit="cover"
              alt="Careers"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default CareersList;
