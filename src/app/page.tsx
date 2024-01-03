import { About } from "@/widgets/about";
import { Advantages } from "@/widgets/advantages";
import { Directions } from "@/widgets/directions";
import { FirstScreen } from "@/widgets/firstScreen";
import { StagesWork } from "@/widgets/stagesWork";

export default function Home() {
    return (
        <main>
            <FirstScreen />
            <Directions />
            <StagesWork />
            <About />
            <Advantages />
        </main>
    );
}
