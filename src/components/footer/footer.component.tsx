import React from "react";
import styles from "./footer.component.module.css";

const FooterComponent = () => {
    return (
        <>
            <style jsx>{`
                footer {
                    width: 100%;
                    height: 100px;
                    border-top: 1px solid #eaeaea;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                footer img {
                    margin-left: 0.5rem;
                }
                footer a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                a {
                    color: inherit;
                    text-decoration: none;
                }
            `}</style>
            <footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={"footer-a"}
                >
                    Powered by{' '}
                    <img data-testid={"footer-img"} src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
                </a>
            </footer>
        </>
    );
};

export default FooterComponent;