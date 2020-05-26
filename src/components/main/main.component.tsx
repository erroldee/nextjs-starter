import React from "react";
import styles from "./main.component.module.css";
import Link from "next/link";

const MainComponent = ({ posts }) => {
    return (
        <>
            <style jsx>{`
                main {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                a {
                    color: inherit;
                    text-decoration: none;
                }
                code {
                    background: #fafafa;
                    border-radius: 5px;
                    padding: 0.75rem;
                    font-size: 1.1rem;
                    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
                }
            `}</style>
            <main>
                <h1 className={styles.title} data-testid={"h1-title"}>
                    Read{' '}
                    <Link href={`/sample/first-post`}>
                        <a>this page!</a>
                    </Link>
                </h1>

                <p className={styles.description} data-testid={"p-get-started"}>
                    Get started by editing <code>pages/index.tsx</code>
                </p>

                <div className={styles.grid} data-testid={"div-post-item"}>
                    {
                        posts.map(({ id, date, title }, key) => (
                            <Link href="/posts/[id]" as={`/posts/${id}`}  key={`card-${key}`} data-testid={"div-post-link"}>
                                <a className={styles.card}>
                                    <span data-testid={"div-post-id"}>{ id }</span>
                                    <br/>
                                    <span data-testid={"div-post-date"}>{ date }</span>
                                    <br/>
                                    <span data-testid={"div-post-title"}>{ title }</span>
                                </a>
                            </Link>
                        ))
                    }
                </div>
            </main>
        </>
    );
};

export default MainComponent;