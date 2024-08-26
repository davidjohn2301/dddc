import cn from "classnames";
import styles from "./BlogList.module.sass";
import Card from "@/components/Card";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { blog } from "@/mocks/blog";
import { useTranslation } from "react-i18next";

type BlogListProps = {};

const BlogList = ({}: BlogListProps) => {
    const {t} = useTranslation()
    return (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.list}>
                
                    <Card
                        className={styles.card}
                        url="/blog/article"
                        color="#6F5BEB"
                        animateIn="fadeInDown"
                    >
                        <div className={cn("h3", styles.subtitle)}>
                            {t('blog.bloglist1.title')}
                        </div>
                        <div className={styles.content}>{t('blog.bloglist1.content')}</div>
                        <div className={styles.preview}>
                            <Image
                                src= "/images/blog/photo-1.png"
                                layout="fill"
                                objectFit="cover"
                                alt="Figure"
                            />
                        </div>
                        <div className={styles.foot}>
                            <div
                                className={styles.more}
                                style={{ color: "#6F5BEB" }}
                            >
                                {t('blog.readMore')}
                            </div>
                            <Icon
                                className={styles.arrow}
                                name="arrow-right"
                                size="26"
                            />
                        </div>
                    </Card>
                    <Card
                        className={styles.card}
                        url="/blog/article"
                        color="#EBB15B"
                        animateIn="fadeInDown"
                    >
                        <div className={cn("h3", styles.subtitle)}>
                            {t('blog.bloglist2.title')}
                        </div>
                        <div className={styles.content}>{t('blog.bloglist2.content')}</div>
                        <div className={styles.preview}>
                            <Image
                                src= "/images/blog/photo-2.png"
                                layout="fill"
                                objectFit="cover"
                                alt="Figure"
                            />
                        </div>
                        <div className={styles.foot}>
                            <div
                                className={styles.more}
                                style={{ color: "#EBB15B" }}
                            >
                               {t('blog.readMore')}
                            </div>
                            <Icon
                                className={styles.arrow}
                                name="arrow-right"
                                size="26"
                            />
                        </div>
                    </Card>
                    <Card
                        className={styles.card}
                        url="/blog/article"
                        color="#89EB5B"
                        animateIn="fadeInDown"
                    >
                        <div className={cn("h3", styles.subtitle)}>
                            {t('blog.bloglist3.title')}
                        </div>
                        <div className={styles.content}>{t('blog.bloglist3.content')}</div>
                        <div className={styles.preview}>
                            <Image
                                src= "/images/blog/photo-3.png"
                                layout="fill"
                                objectFit="cover"
                                alt="Figure"
                            />
                        </div>
                        <div className={styles.foot}>
                            <div
                                className={styles.more}
                                style={{ color: "#89EB5B" }}
                            >
                               {t('blog.readMore')}
                            </div>
                            <Icon
                                className={styles.arrow}
                                name="arrow-right"
                                size="26"
                            />
                        </div>
                    </Card>
                    <Card
                        className={styles.card}
                        url="/blog/article"
                        color="#6F5BEB"
                        animateIn="fadeInDown"
                    >
                        <div className={cn("h3", styles.subtitle)}>
                            {t('blog.bloglist4.title')}
                        </div>
                        <div className={styles.content}>{t('blog.bloglist4.content')}</div>
                        <div className={styles.preview}>
                            <Image
                                src= "/images/blog/photo-4.png"
                                layout="fill"
                                objectFit="cover"
                                alt="Figure"
                            />
                        </div>
                        <div className={styles.foot}>
                            <div
                                className={styles.more}
                                style={{ color: "#89EB5B" }}
                            >
                               {t('blog.readMore')}
                            </div>
                            <Icon
                                className={styles.arrow}
                                name="arrow-right"
                                size="26"
                            />
                        </div>
                    </Card>
                
            </div>
            <div className={styles.btns}>
                <button className="button">
                    <span>{t('blog.loadMore')}</span>
                </button>
            </div>
        </div>
    </div>
)};

export default BlogList;
