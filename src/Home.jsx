import AreaChart from "./charts/AreaChart";
import BarGraph from "./charts/BarGraph";
import Header from "./Header";
import Typing from "./Typing";

export default function Home() {
    return (
        <div className="pt-24">
            <div className="flex items-center justify-center gap-[2em] lg:gap-[8rem] pt-32 px-32 flex-wrap">
                <div className="flex-1">
                    <Typing />
                </div>
                <div className="flex-1">
                    <img src="/ai.png" className="min-w-64"/>
                </div>
            </div>
        </div>
    );
}
