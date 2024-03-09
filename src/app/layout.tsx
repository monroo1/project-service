import type { Metadata } from "next";
import { Header } from "@/widgets/header";
import { FirstScreen } from "@/widgets/firstScreen";
import { Footer } from "@/widgets/footer";
import Providers from "./providers";
import "./styles/main.scss";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Главная",
    description:
        "Проект сервис, производство мебели на заказ в ростове на дону, главная страница сайта, страница каталога, страница портфолио. Проект_сервис",
    viewport: { width: "device-width", initialScale: 1 },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <body>
                {/* <Header /> */}
                <FirstScreen />
                <Providers>{children}</Providers>
                <Script id="yandex-metrika" strategy="afterInteractive">
                    {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                        m[i].l=1*new Date();
                        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                        ym(96671347, "init", {
                                clickmap:true,
                                trackLinks:true,
                                accurateTrackBounce:true,
                                webvisor:true
                        });
                    `}
                </Script>
                <Footer />
            </body>
        </html>
    );
}
