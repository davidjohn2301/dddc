import { useRef } from "react";
// import SimpleBar from "simplebar-react";
import { useDraggable } from "react-use-draggable-scroll";
import cn from "classnames";
import styles from "./Development.module.sass";
import Card from "@/components/Card";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { development } from "@/mocks/development";
import { useTranslation } from "react-i18next";

type DevelopmentProps = {
  scrollToRef: any;
};

const Development = ({ scrollToRef }: DevelopmentProps) => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  const { t } = useTranslation();
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("anchor", styles.anchor)} ref={scrollToRef}></div>
      <div className={cn("container-wide", styles.container)}>
        <h2 className={cn("h2", styles.title)}>{t("home.devTitle")}</h2>
        <div className={styles.list} {...events} ref={ref}>
          <Card
            className={styles.card}
            url="/technology"
            color="#6F5BEB"
            animateIn="fadeInDown"
            delay={0}>
            <div className={styles.preview}>
              <Image
                src="/images/development-pic-1.png"
                layout="fill"
                alt="Figure"
              />
            </div>
            <div className={cn("h3", styles.subtitle)}>
              {t('develop.title1')}
            </div>
            <div className={styles.content}>
            {t('develop.content1')}
            </div>
            <div className={styles.foot}>
              <div className={styles.more} style={{ color: "#6F5BEB" }}>
                {t("home.devLearnMore")}
              </div>
              <Icon className={styles.arrow} name="arrow-right" size="26" />
            </div>
          </Card>

          <Card
            className={styles.card}
            url="/technology"
            color="#EBB15B"
            animateIn="fadeInDown"
            delay={150}>
            <div className={styles.preview}>
              <Image
                src="/images/development-pic-2.png"
                layout="fill"
                alt="Figure"
              />
            </div>
            <div className={cn("h3", styles.subtitle)}>
            {t('develop.title2')}
            </div>
            <div className={styles.content}>
            {t('develop.content2')}
            </div>
            <div className={styles.foot}>
              <div className={styles.more} style={{ color: "#EBB15B" }}>
                {t("home.devLearnMore")}
              </div>
              <Icon className={styles.arrow} name="arrow-right" size="26" />
            </div>
          </Card>

          <Card
            className={styles.card}
            url="/technology"
            color="#89EB5B"
            animateIn="fadeInDown"
            delay={300}>
            <div className={styles.preview}>
              <Image
                src="/images/development-pic-3.png"
                layout="fill"
                alt="Figure"
              />
            </div>
            <div className={cn("h3", styles.subtitle)}>
            {t('develop.title3')}
            </div>
            <div className={styles.content}>
            {t('develop.content3')}
            </div>
            <div className={styles.foot}>
              <div className={styles.more} style={{ color: "#89EB5B" }}>
                {t("home.devLearnMore")}
              </div>
              <Icon className={styles.arrow} name="arrow-right" size="26" />
            </div>
          </Card>

          <Card
            className={styles.card}
            url="/technology"
            color="#89EB5B"
            animateIn="fadeInDown"
            delay={450}>
            <div className={styles.preview}>
              <Image
                src="/images/development-pic-1.png"
                layout="fill"
                alt="Figure"
              />
            </div>
            <div className={cn("h3", styles.subtitle)}>
            {t('develop.title4')}
            </div>
            <div className={styles.content}>
            {t('develop.content4')}
            </div>
            <div className={styles.foot}>
              <div className={styles.more} style={{ color: "#6F5BEB" }}>
                {t("home.devLearnMore")}
              </div>
              <Icon className={styles.arrow} name="arrow-right" size="26" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Development;
