import { ServicesArea } from "@/components/ServicesArea";

const ActivityAreasByBrandPage = ({ params }) => {
    return (
        <main>
            <ServicesArea type="brandsByActivityArea" activityArea={params.activityArea} brand={params.activityArea} />
        </main>
    );
}

export default ActivityAreasByBrandPage;