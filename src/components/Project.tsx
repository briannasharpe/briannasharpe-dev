import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

interface ProjectProps {
  projectTitle: string
  projectDescription: string
  projectTech: string[]
  projectLink: string
}

export function Project({projectTitle, projectDescription, projectTech, projectLink} : ProjectProps) {

  return (
    <div className="pb-4">
      <Card>
        <CardHeader>
          <CardTitle>{projectTitle}</CardTitle>
          <CardDescription className="flex">
            {projectTech?.map((tech, index) => (
              <div key={index} className="pr-2">
                <Badge>{tech}</Badge>
              </div>
            ))}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{projectDescription}</p>
        </CardContent>
        <CardFooter>
          <div className="pr-2">
            <Button asChild>
              <a href={projectLink} target="_blank">
                <FontAwesomeIcon icon={faGithub} />Source
              </a>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
