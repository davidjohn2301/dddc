import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Details from "./Details";
import Testimonial from "./Testimonial";
import Team from "./Team";
import Values from "./Values";
import Reviews from "@/components/Reviews";
import JoinCommunity from "@/components/JoinCommunity";

import { reviews } from "@/mocks/reviews";
import { useTranslation } from "react-i18next";

const AboutUsPage = () => {
    const scrollToRef = useRef(null);
    const {t} = useTranslation()
    return (
        <Layout>
            <Main scrollToRef={scrollToRef} />
            <Details scrollToRef={scrollToRef} />
            <Testimonial />
            <Team />
            <Values />
            <Reviews reviews={reviews} />
            <JoinCommunity title={t('joinCommunity.title2')} />
        </Layout>
    );
};

export default AboutUsPage;
