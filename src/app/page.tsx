import { About } from "@/widgets/about";
import { Advantages } from "@/widgets/advantages";
import { Directions } from "@/widgets/directions";
import { Feedback } from "@/widgets/feedback";
import { NowWork } from "@/widgets/nowWork";
import { StagesWork } from "@/widgets/stagesWork";

export default function Home() {
    return (
        <main>
            <Directions />
            <StagesWork />
            <About />
            <NowWork />
            <Advantages />
            <Feedback />
        </main>
    );
}
