import cn from "classnames";
import styles from "./Faq.module.sass";
import Item from "./Item";

import { faqs } from "@/constants/faqs";

type FaqProps = {};

const Faq = ({}: FaqProps) => (
    <div className={cn("section", styles.faq)}>
        <div className={cn("container", styles.container)}>
            <div className={cn("h2", styles.title)}>
                Your questions, answered
            </div>
            <div className={styles.list}>
                
                    <Item className={styles.item} />
                    <Item className={styles.item} />

                
            </div>
        </div>
    </div>
);

export default Faq;
