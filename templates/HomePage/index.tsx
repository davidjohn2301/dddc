import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Development from "./Development";
import AboutUs from "./AboutUs";
import Statistics from "./Statistics";
import Solutions from "./Solutions";
import Posts from "@/components/Posts";
import Reviews from "@/components/Reviews";
import JoinCommunity from "@/components/JoinCommunity";

import { posts } from "@/mocks/posts";
import { reviews } from "@/mocks/reviews";
import { useTranslation } from "react-i18next";

const HomePage = () => {
    const scrollToRef = useRef(null);
    const {t} = useTranslation();

    return (
        <Layout>
            <Main scrollToRef={scrollToRef} />
            <Development scrollToRef={scrollToRef} />
            <AboutUs />
            <Statistics />
            <Solutions />
            <Posts
                className="section"
                title={t('post.title')}
                info={t('post.info')}
                posts={posts}
            />
            <Reviews reviews={reviews} />
            <JoinCommunity title = {t('joinCommunity.title')} />
        </Layout>
    );
};

export default HomePage;
