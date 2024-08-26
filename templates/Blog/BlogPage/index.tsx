import Layout from "@/components/Layout";
import Main from "./Main";
import BlogList from "./BlogList";
import Reviews from "@/components/Reviews";
import JoinCommunity from "@/components/JoinCommunity";

import { reviews } from "@/mocks/reviews";
import { useTranslation } from "react-i18next";

const BlogPage = () => {
    const {t} = useTranslation()
    return (
        <Layout>
            <Main />
            <BlogList />
            <Reviews reviews={reviews} />
            <JoinCommunity title={t('joinCommunity.title')} />
        </Layout>
    );
};

export default BlogPage;
