import { Catalog } from "@/widgets/catalog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Портфолио",
    description:
        "Проект сервис, производство мебели на заказ в ростове на дону, страница каталога, страница портфолио. Проект_сервис",
    viewport: { width: "device-width", initialScale: 1 },
};

export default function Page() {
    return (
        <main>
            <Catalog />
        </main>
    );
}
