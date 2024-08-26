import Link from "next/link";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";
import Socials from "@/components/Socials";

import { footerNavigation, documents } from "@/constants/navigation";
import { socials } from "@/constants/socials";
import { useTranslation } from "react-i18next";

type FooterProps = {};

const Footer = ({}: FooterProps) => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={cn("container-wide", styles.container)}>
        <div className={styles.row}>
          <Logo className={styles.logo} />
          <div className={styles.menu}>
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
              href="/">
              {t("footer.home")}
            </NavLink>
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
              href="https://t.me/dddc_offical">
              {t("footer.community")}
            </NavLink>
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
              href="/technology">
              {t("footer.technology")}
            </NavLink>
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
              href="/blog">
              {t("footer.blog")}
            </NavLink>
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
              href="/about-us">
              {t("footer.aboutUs")}
            </NavLink>
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
              href="/careers">
              {t("footer.careers")}
            </NavLink>
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
              href="/contact">
              {t("footer.contact")}
            </NavLink>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.copyright}>
            © 2024 DDDC Systems. All rights reserved.
          </div>
          <div className={styles.documents}>
            
              <Link href="/">
                <a className={styles.document}>{t('documents.privacy')}</a>
              </Link>
              <Link href="/">
                <a className={styles.document}>{t('documents.terms')}</a>
              </Link>
            
          </div>
          <Socials className={styles.socials} socials={socials} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
