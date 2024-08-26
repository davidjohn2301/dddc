import cn from "classnames";
import styles from "./Item.module.sass";
import Image from "@/components/Image";
import { useTranslation } from "react-i18next";

type ItemProps = {
  className?: string;
  itemWrapClass?: string;
};

const Item = ({ className, itemWrapClass }: ItemProps) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={cn(styles.item, className)}>
        <div className={cn(styles.wrap, itemWrapClass)}>
          <div className={cn("content", styles.content)}>
            <h2>{t("technology.item1.h2")}</h2>
            <p>{t("technology.item1.p1")}</p>
            <p>{t("technology.item1.p2")}</p>
          </div>

          <div className={styles.blockquote}>
            <div className={cn("h3", styles.comment)}>
              {t("technology.blockquote.content")}
            </div>
            <div className={styles.author}>
              <div className={styles.avatar}>
                <Image
                  src="/images/avatar-1.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="Avatar"
                />
              </div>
              <div className={styles.details}>
                <div className={styles.name}>Markus Freeman</div>
                <div className={styles.position}>
                  {t("technology.blockquote.position")}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.preview}>
          <div className={styles.inner}>
            <Image
              src="/images/technology-pic-1.png"
              width={497}
              height={854}
              alt="Technology"
            />
            <svg width="0" height="0" style={{ display: "block" }}>
              <clipPath id="polygonImage" clipPathUnits="objectBoundingBox">
                <path d="M0 0h.838c.017 0 .033.004.045.01l.05.028.047.026c.013.007.02.017.02.027V1H0V0z" />
              </clipPath>
            </svg>
          </div>
          <div
            className={styles.square}
            style={{ backgroundColor: "#E87A95" }}></div>
        </div>
      </div>
      <div className={cn(styles.item, className)}>
        <div className={cn(styles.wrap, itemWrapClass)}>
          <div className={cn("content", styles.content)}>
            <h2>{t("technology.item2.h2")}</h2>
            <p>{t("technology.item2.p1")}</p>
            <ul>
                    <li>{t("technology.item2.li1")}</li>
                    <li>{t("technology.item2.li2")}</li>
                    <li>{t("technology.item2.li3")}</li>
                </ul>
          </div>
        </div>
        <div className={styles.preview}>
          <div className={styles.inner}>
            <Image
              src="/images/technology-pic-2.png"
              width={497}
              height={854}
              alt="Technology"
            />
            <svg width="0" height="0" style={{ display: "block" }}>
              <clipPath id="polygonImage" clipPathUnits="objectBoundingBox">
                <path d="M0 0h.838c.017 0 .033.004.045.01l.05.028.047.026c.013.007.02.017.02.027V1H0V0z" />
              </clipPath>
            </svg>
          </div>
          <div
            className={styles.square}
            style={{ backgroundColor: "#E87A95" }}></div>
        </div>
      </div>
    </>
  );
};

export default Item;
