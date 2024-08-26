import Link from "next/link";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";
import { useTranslation } from "react-i18next";

type MainProps = {};

const Main = ({}: MainProps) => {
    const {t} =useTranslation()
    return (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.preview}>
                <Image
                    src="/images/blog-photo.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="Blog"
                />
            </div>
            <div className={styles.wrap}>
                <div className={styles.stage}>{t('blog.main.stage')}</div>
                <div className={cn("h1", styles.title)}>
                {t('blog.main.title')}
                </div>
                <div className={styles.content}>
                {t('blog.main.content')}
                </div>
                <Link href="/blog/article">
                    <a className={cn("button", styles.button)}>
                        <span>{t('blog.main.button')}</span>
                    </a>
                </Link>
            </div>
        </div>
        <div className={styles.lines}>
            <Image
                src="/images/lines-1.svg"
                width={2100}
                height={1950}
                alt="Lines"
            />
        </div>
    </div>
)};

export default Main;
