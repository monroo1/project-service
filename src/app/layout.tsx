import type { Metadata } from "next";
import { FirstScreen } from "@/widgets/firstScreen";
import { Footer } from "@/widgets/footer";
import Providers from "./providers";
import "./styles/main.scss";

export const metadata: Metadata = {
    title: "Проект сервис | Кухни",
    description:
        "Проект сервис - кухни на заказ Ростов-на-Дону",
    viewport: { width: "device-width", initialScale: 1 },
    other: {
        ['yandex-verification']: 'f89d134a7e19168b',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <body>
                <FirstScreen />
                <Providers>{children}</Providers>
                <div id="modal-root"></div>
                <Footer />
            </body>
        </html>
    );
}
