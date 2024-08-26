import Layout from "@/components/Layout";
import Main from "./Main";
import CareersList from "./CareersList";
import Reviews from "@/components/Reviews";
import JoinCommunity from "@/components/JoinCommunity";

import { reviews } from "@/mocks/reviews";
import { useTranslation } from "react-i18next";

const HomePage = () => {
    const {t} = useTranslation()
    return (
        <Layout>
            <Main />
            <CareersList />
            <Reviews reviews={reviews} />
            <JoinCommunity title={t('joinCommunity.title')} />
        </Layout>
    );
};

export default HomePage;
