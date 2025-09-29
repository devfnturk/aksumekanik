import ProjectDetailPage from "@/components/ProjectDetailPage";

const ProjectDetails = ({params}) => {
    return (
        <main>
            <ProjectDetailPage projectId={params.projects} />
        </main>
    );
}

export default ProjectDetails;