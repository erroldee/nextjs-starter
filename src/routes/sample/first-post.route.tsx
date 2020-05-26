import React from "react";
import PostsLayout from "../../layouts/posts/posts.layout";
import Head from "next/head";
import styles from "./first-post.module.css";
import Link from "next/link";
import cn from "classnames";

export const FirstPostRoute: React.FC = () => {
    const activeTest: boolean = true;

    return (
        <PostsLayout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1 className={cn({
                [styles.activeTrue]: activeTest,
                [styles.activeFalse]: !activeTest
            })}>First Post</h1>
            <h2>
                <Link href={"/"}><a>Back to home</a></Link>
            </h2>
        </PostsLayout>
    )
};