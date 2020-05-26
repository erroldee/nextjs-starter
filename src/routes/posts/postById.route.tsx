import React from "react";
import PostsLayout from "../../layouts/posts/posts.layout";
import Head from "next/head";
import Link from "next/link";

interface PostInterface {
    id: number,
    title: string,
    date: string
}

interface postByIdProps {
    post: PostInterface
}

export const PostByIdRoute: React.FC<postByIdProps> = ({ post }) => {
    const { id, title, date } = post;

    return (
        <PostsLayout>
            <Head>
                <title>{ title }</title>
            </Head>
            <h1>{`${ id } - ${ title }`}</h1>
            <h3>{date}</h3>
            <h2>
                <Link href={"/"}><a>Back to home</a></Link>
            </h2>
        </PostsLayout>
    )
};