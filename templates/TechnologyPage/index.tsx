import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Details from "./Details";
import Development from "./Development";
import Community from "./Community";
import AboutUs from "./AboutUs";
import Posts from "./Posts";
import Faq from "./Faq";
import Reviews from "@/components/Reviews";
import JoinCommunity from "@/components/JoinCommunity";

import { reviews } from "@/mocks/reviews";
import { useTranslation } from "react-i18next";

const TechnologyPage = () => {
    const scrollToRef = useRef(null);
    const {t} = useTranslation()

    return (
        <Layout>
            <Main scrollToRef={scrollToRef} />
            <Details scrollToRef={scrollToRef} />
            <Development />
            <Community />
            <AboutUs />
            {/* <Faq /> */}
            <Reviews reviews={reviews} />
            <JoinCommunity title={t('joinCommunity.title2')} />
        </Layout>
    );
};

export default TechnologyPage;
