import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link href="/eu-circle.png" rel="icon" type="image/png" />
            </Head>
            <body className="w-full h-screen bg-zinc-900">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
