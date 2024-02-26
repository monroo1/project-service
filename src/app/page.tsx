import { About } from "@/widgets/about";
import { Advantages } from "@/widgets/advantages";
import { Feedback } from "@/widgets/feedback";
import { NowWork } from "@/widgets/nowWork";
import { StagesWork } from "@/widgets/stagesWork";

export default function Home() {
    return (
        <main>
            <NowWork />
            <StagesWork />
            <About />
            <Advantages />
            <Feedback />
        </main>
    );
}
