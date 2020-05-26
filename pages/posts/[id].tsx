import React from "react";
import {GetStaticPaths, GetStaticProps} from "next";
import {StaticService} from "../../src/services/static.service";

import {PostByIdRoute} from "../../src/routes/posts";

const StaticPostPage = ({ post }) => {
    return (
        <PostByIdRoute
            post={post}
        />
    )
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = await StaticService.getSampleInfo(Number(params?.id));

    return {
        props: {
            post
        }
    }
};

export const getStaticPaths: GetStaticPaths = async () => {
    const ids = await StaticService.getSampleIds();

    const paths = ids.map(id => {
        return {
            params: {
                id: String(id)
            }
        }
    });

    return {
        paths,
        fallback: false
    }
};

export default StaticPostPage;