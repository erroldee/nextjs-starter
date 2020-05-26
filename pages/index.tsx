import React from "react";
import {GetStaticProps} from "next";

import {StaticService} from "../src/services/static.service";
import {MainRoute} from "../src/routes/main";

const IndexPage = ({ posts }) => {
    return (
        <MainRoute
            posts={posts}
        />
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const posts = await StaticService.getSamples();

    return {
        props: {
            posts
        }
    }
};

export default IndexPage;