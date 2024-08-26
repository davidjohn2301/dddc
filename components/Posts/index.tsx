import { Parallax } from "react-scroll-parallax";
import Link from "next/link";
import cn from "classnames";
import styles from "./Posts.module.sass";
import Card from "@/components/Card";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import { useTranslation } from "react-i18next";

type PostsType = {
    title: string;
    date: string;
    image: string;
    status?: string;
    color?: string;
    url: string;
};

type PostsProps = {
    className?: string;
    title: string;
    info: string;
    posts: PostsType[];
    background?: boolean;
};

const Posts = ({ className, title, info, posts, background }: PostsProps) => {
    const {t} = useTranslation()

    return (
    <div
        className={cn(
            className,
            { [styles.background]: background },
            styles.section
        )}
    >
        <div className={cn("container", styles.container)}>
            <div className={styles.row}>
                <div className={styles.wrap}>
                    <div className={cn("h2", styles.title)}>{title}</div>
                    <div className={styles.info}>{info}</div>
                    <Link href="/blog">
                        <a className={cn("button", styles.button)}>
                            <span>{t('post.viewall')}</span>
                        </a>
                    </Link>
                </div>
                <div className={styles.list}>
                        <Card
                            className={styles.card}
                            cornerCardClass={styles.corner}
                            backgroundCardClass={styles.backgroundCard}
                            squareCardClass={styles.square}
                            innerCardClass={styles.inner}
                            color="#EB5BE5"
                            url="/blog/article"
                            animateIn="fadeInDown"
                            small
                        >
                            <div className={styles.preview}>
                                <Image
                                    src="/images/post-pic-1.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                    alt="Post"
                                />
                            </div>
                            <div className={styles.details}>
                                <div
                                    className={cn("status", styles.status)}
                                    style={{ color: "#EB5BE5" }}
                                >
                                    UPDATES
                                </div>
                                <div className={cn("h4", styles.subtitle)}>
                                    {t('posts.title1')}
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.date}>
                                        {t('posts.date')}
                                    </div>
                                    <Icon
                                        className={styles.arrow}
                                        name="arrow-right"
                                        size="26"
                                    />
                                </div>
                            </div>
                        </Card>
                        <Card
                            className={styles.card}
                            cornerCardClass={styles.corner}
                            backgroundCardClass={styles.backgroundCard}
                            squareCardClass={styles.square}
                            innerCardClass={styles.inner}
                            color="#89EB5B"
                            url="/blog/article"
                            animateIn="fadeInDown"
                            small
                        >
                            <div className={styles.preview}>
                                <Image
                                    src="/images/post-pic-2.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                    alt="Post"
                                />
                            </div>
                            <div className={styles.details}>
                                <div
                                    className={cn("status", styles.status)}
                                    style={{ color: "#89EB5B" }}
                                >
                                    UPDATES
                                </div>
                                <div className={cn("h4", styles.subtitle)}>
                                    {t('posts.title2')}
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.date}>
                                        {t('posts.date')}
                                    </div>
                                    <Icon
                                        className={styles.arrow}
                                        name="arrow-right"
                                        size="26"
                                    />
                                </div>
                            </div>
                        </Card>
                        <Card
                            className={styles.card}
                            cornerCardClass={styles.corner}
                            backgroundCardClass={styles.backgroundCard}
                            squareCardClass={styles.square}
                            innerCardClass={styles.inner}
                            color="#EBB15B"
                            url="/blog/article"
                            animateIn="fadeInDown"
                            small
                        >
                            <div className={styles.preview}>
                                <Image
                                    src="/images/post-pic-3.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                    alt="Post"
                                />
                            </div>
                            <div className={styles.details}>
                                <div
                                    className={cn("status", styles.status)}
                                    style={{ color: "#EBB15B" }}
                                >
                                    UPDATES
                                </div>
                                <div className={cn("h4", styles.subtitle)}>
                                    {t('posts.title3')}
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.date}>
                                        {t('posts.date')}
                                    </div>
                                    <Icon
                                        className={styles.arrow}
                                        name="arrow-right"
                                        size="26"
                                    />
                                </div>
                            </div>
                        </Card>
                   
                </div>
            </div>
            <Parallax
                className={styles.image}
                speed={1}
                easing="easeInQuad"
                rotate={[2, -10]}
            >
                <Image
                    src="/images/figures/figure-10.png"
                    width={696}
                    height={696}
                    alt="Spike"
                />
            </Parallax>
        </div>
    </div>
)};

export default Posts;
