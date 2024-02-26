import type { Metadata } from "next";
import { Header } from "@/widgets/header";
import { FirstScreen } from "@/widgets/firstScreen";
import { Footer } from "@/widgets/footer";
import Providers from "./providers";
import "./styles/main.scss";

export const metadata: Metadata = {
    title: "Главная",
    description:
        "Проект сервис, производство мебели на заказ в ростове на дону, главная страница сайта. Проект_сервис",
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
                <Header />
                <FirstScreen />
                <Providers>{children}</Providers>
                <Footer />
            </body>
        </html>
    );
}
