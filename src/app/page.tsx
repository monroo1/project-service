import { About } from "@/widgets/about";
import { Advantages } from "@/widgets/advantages";
import { Catalog } from "@/widgets/catalog";
import { Feedback } from "@/widgets/feedback";
import { StagesWork } from "@/widgets/stagesWork";

export default function Home() {
    return (
        <main>
            <Catalog />
            <Feedback />
            <Advantages />
            <StagesWork />
            <About />
        </main>
    );
}
