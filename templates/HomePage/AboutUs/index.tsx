import cn from "classnames";
import styles from "./AboutUs.module.sass";
import Image from "@/components/Image";

import { details } from "@/constants/detailsAbout";
import { useTranslation } from "react-i18next";

type AboutUsProps = {};

const AboutUs = ({}: AboutUsProps) => {
  const {t} =useTranslation()
  return (
  <div className={cn("section", styles.section)}>
    <div className={cn("container", styles.container)}>
      <div className={styles.item}>
        <div className={styles.wrap}>
          <div className={cn("content", styles.content)}>
            <h2>{t('home.about.content1.h2')}</h2>
            <p>
            {t('home.about.content1.p')}
            </p>
            <ul>
              <li>{t('home.about.content1.li1')}</li>
              <li>{t('home.about.content1.li2')}</li>
              <li>{t('home.about.content1.li3')}</li>
            </ul>
          </div>
          <div className={styles.line}>
                <a
                className={cn("button", styles.button)}
                href="/"
                target="_blank"
                rel="noopener noreferrer">
                <span>{t('home.about.content1.launch')}</span>
              </a>
            <button className={styles.document}>
            {t('home.about.content1.read')}
                    </button>
          </div>
        </div>
        <div className={styles.preview}>
          <Image
            src="/images/about-pic-1.png"
            width={712}
            height={712}
            alt="Figure"
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.wrap}>
          <div className={cn("content", styles.content)}>
            <h2>{t('home.about.content2.h2')}</h2>
            <p>
            {t('home.about.content2.p1')}
            </p>
            <p>
            {t('home.about.content2.p2')}
            </p>
          </div>
          <div className={styles.line}>
              <a
                className={cn("button", styles.button)}
                href="/"
                target="_blank"
                rel="noopener noreferrer">
                <span>{t('home.about.content2.launch')}</span>
              </a>
            <button className={styles.document}>{t('home.about.content2.read')}</button>
          </div>
        </div>
        <div className={styles.preview}>
          <Image
            src="/images/about-pic-1.png"
            width={712}
            height={712}
            alt="Figure"
          />
        </div>
      </div>
    </div>
  </div>
)};

export default AboutUs;
