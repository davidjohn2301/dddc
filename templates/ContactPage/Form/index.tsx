import { useState } from "react";
import cn from "classnames";
import styles from "./Form.module.sass";
import Field from "@/components/Field";
import { useTranslation } from "react-i18next";

type FormProps = {};

const Form = ({}: FormProps) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const {t} = useTranslation()
    return (
        <form
            className={styles.form}
            action=""
            onSubmit={() => console.log("Submit")}
        >
            <div className={cn("h3", styles.title)}>{t('contact.form.title')}</div>
            <div className={styles.fieldset}>
                <Field
                    className={styles.field}
                    placeholder={t('contact.form.name')}
                    value={name}
                    onChange={(e: any) => setName(e.target.value)}
                    required
                />
                <Field
                    className={styles.field}
                    placeholder={t('contact.form.email')}
                    type="email"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                    required
                />
                <Field
                    className={styles.field}
                    placeholder={t('contact.form.tell')}
                    value={message}
                    onChange={(e: any) => setMessage(e.target.value)}
                    textarea
                    required
                />
            </div>
            <button className="button">
                <span>{t('contact.form.contact')}</span>
            </button>
        </form>
    );
};

export default Form;
