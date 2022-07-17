import { IProject } from "../../interfaces/project";
import { truncate } from "../../lib/utils";
import Arrow from "../arrow/Arrow";
import ReadMore from "../read-more/ReadMore";

const Project:React.FC<{project: IProject}> = ({project}) => {
    return (
        <div>
            <div className="aspect-w-6 aspect-h-5">
                <img className="object-cover object-center" src={project.image}/>
            </div>
            <div>
                <p className="text-base md:text-lg font-medium my-10 md:my-25">{project.title}</p>
                <p>{truncate(project.content, 100)}</p>
                <div className="mt-10 md:mt-25">
                    <ReadMore text="Discover" href={`/projects/${project.id}`}/>
                </div>
                
            </div>
        </div>
    )
}

export default Project;