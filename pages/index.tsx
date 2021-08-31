import React from "react";
import Head from "next/head";
import { StartPage } from "../components/StartPage";



export default function Front() {
    

    return (
        <>
            <Head>
                <title>Front Page</title>
            </Head>
            <main>
                <StartPage />
            </main>
        </>
    );
}