import React from "react";
import Head from "next/head";
import MainComponent from "../../components/main/main.component";
import FooterComponent from "../../components/footer/footer.component";
import MainLayout from "../../layouts/main/main.layout";

interface PostInterface {
    id: number,
    title: string,
    date: string
}

interface MainProps {
    posts: PostInterface[]
}

export const MainRoute: React.FC<MainProps> = ({ posts }) => {
    return (
        <MainLayout>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainComponent
                posts={posts}
            />
            <FooterComponent/>
        </MainLayout>
    )
};