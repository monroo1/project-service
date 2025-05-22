import { About } from "@/widgets/about";
import { Advantages } from "@/widgets/advantages";
import { Catalog } from "@/widgets/catalog";
import { StagesWork } from "@/widgets/stagesWork";

export default function Home() {
    return (
        <main>
            <Catalog />
            <Advantages />
            <StagesWork />
            <About />
        </main>
    );
}
