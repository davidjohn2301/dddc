import { Parallax } from "react-scroll-parallax";
import Link from "next/link";
import cn from "classnames";
import styles from "./Details.module.sass";
import Image from "@/components/Image";
import { useTranslation } from "react-i18next";

type DetailsProps = {
  scrollToRef: any;
};

const Details = ({ scrollToRef }: DetailsProps) => {
  const { t } = useTranslation();
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("anchor", styles.anchor)} ref={scrollToRef}></div>
      <div className={cn("container", styles.container)}>
        <div className={styles.details}>
          <div className={styles.counter}>1M</div>
          <div className={cn("h4", styles.info)}>{t("mainDetails.info")}</div>
        </div>
        <div className={styles.wrap}>
          <div className={cn("content", styles.content)}>
            <h2>{t("mainDetails.h2")}</h2>
            <h3>{t("mainDetails.h3")}</h3>
            <p>
            {t("mainDetails.p1")}
            </p>
            <p>
            {t("mainDetails.p2")}
            </p>
          </div>
          <Link href="/contact">
            <a className={cn("button", styles.button)}>
              <span>{t("mainDetails.contact")}</span>
            </a>
          </Link>
        </div>
        <Parallax
          className={styles.image}
          speed={1}
          easing="easeInQuad"
          rotate={[2, -15]}>
          <Image
            src="/images/figures/figure-7.png"
            layout="fill"
            alt="Figure"
          />
        </Parallax>
      </div>
    </div>
  );
};

export default Details;
