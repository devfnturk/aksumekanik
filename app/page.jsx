import CorporateText from "@/components/CorporateText";
import OurServices from "@/components/OurServices";
import HomePageSlider from "@/components/Sliders/HomePageSlider";
import ReferancesSlider from "@/components/Sliders/ReferancesSlider";
import UsWithNumbers from "@/components/UsWithNumbers";

export default function Home() {
    return (
        <main className="overflow-hidden">
            {/* Home PageSlider */}
            <section className="slider relative">
                <HomePageSlider />
                <UsWithNumbers />
            </section>
            {/* <div className="shape1 hidden lg:block">
            </div> */}
            <CorporateText />
            <ReferancesSlider />
            <OurServices />
        </main>
    );
}
