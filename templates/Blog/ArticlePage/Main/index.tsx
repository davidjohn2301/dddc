import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";
import Card from "@/components/Card";
import { useTranslation } from "react-i18next";

type MainProps = {};

const Main = ({}: MainProps) => {
  const { t } = useTranslation();
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={styles.line}>
            <div className={cn("status-green", styles.status)}>{t('articlePage.main.status')}</div>
            <div className={cn("status-dark", styles.date)}>{t('articlePage.main.date')}</div>
          </div>
          <h1 className={cn("h1", styles.title)}>
          {t('articlePage.main.title')}
          </h1>
          <div className={cn("h4", styles.info)}>
          {t('articlePage.main.info')}
          </div>
          <div className={styles.avatar}>
            <Image
              src="/images/avatar-2.jpg"
              layout="fill"
              objectFit="cover"
              alt="Avatar"
            />
          </div>
          <div className={styles.author}>{t('articlePage.main.author')}</div>
          <div className={styles.position}>{t('articlePage.main.position')}</div>
        </div>
      </div>
      <div className={styles.lines}>
        <Image
          src="/images/lines-1.svg"
          width={2000}
          height={1900}
          alt="Lines"
        />
      </div>
    </div>
  );
};

export default Main;
