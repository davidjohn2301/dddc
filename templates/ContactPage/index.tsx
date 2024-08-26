import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Details from "./Details";
import Reviews from "@/components/Reviews";
import JoinCommunity from "@/components/JoinCommunity";

import { reviews } from "@/mocks/reviews";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
    const scrollToRef = useRef(null);
    const {t} = useTranslation()

    return (
        <Layout>
            <Main scrollToRef={scrollToRef} />
            <Details scrollToRef={scrollToRef} />
            <Reviews reviews={reviews} />
            <JoinCommunity title={t('joinCommunity.title')} />
        </Layout>
    );
};

export default ContactPage;
