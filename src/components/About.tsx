import { DateTime } from '@/components/DateTime.tsx'

import { Button } from './ui/button';
import { Badge } from './ui/badge';
// import { Separator } from './ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { toast } from "sonner"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDownload,
  // faArrowUpRightFromSquare,
  faEnvelope,
  // faLocationDot,
  // faClock,
  // faLink,
  // faBars,
  // faXmark,
  // faCircleArrowUp,
  // faPaperPlane,
  // faUserPen,
  // faCode,
  // faMoon,
  // faSun,
  // faWrench,
  // faGraduationCap,
  // faThumbtack,
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub,
  faLinkedin,
  // faHtml5,
  // faCss3Alt,
  // faSass,
  // faSquareJs,
  // faReact,
  // faGitAlt,
  // faWindows,
  // faLinux,
  // faUbuntu,
  // faBootstrap,
  // faDocker,
} from '@fortawesome/free-brands-svg-icons';

export function About() {
  const copyEmail = () => {
    navigator.clipboard.writeText("hello@briannasharpe.dev"),
    toast("Copied email to clipboard", {
      // description: "",
      // action: {
        // label: "",
        // label: (<FontAwesomeIcon icon={faXmark} />),
        // onClick: () => console.log(""),
      // },
    })
  }

  return (
    <section>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center pb-4 ">
        <div className="pr-4">
          {/* ---------------------------------- info ---------------------------------- */}
          <div className="text-center md:text-left">
            {/* <div>
              <p>hello 👋 i'm</p>
            </div> */}
            <div className="text-7xl font-bold pb-4">
              <h1>brianna sharpe</h1>
            </div>
            {/* <div className="py-2">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac posuere dui, mollis ullamcorper ex. </p>
            </div> */}
          </div>

          {/* --------------------------------- badges --------------------------------- */}
          <div className="flex flex justify-center md:justify-start">
            <div className="pr-2">
            <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span><Badge>Data Analyst</Badge></span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>previously <b>Software Developer</b></span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="pr-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span><Badge>Los Angeles, California</Badge></span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <DateTime />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* ---------------------------------- links --------------------------------- */}
          {/* <div className="flex flex-wrap justify-center md:justify-start pt-4">
            <div className="pr-2 pb-2">
              <Button asChild variant="ghost">
                <a href="https://github.com/briannasharpe" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />Github
                </a>
              </Button>
            </div>
            <div className="pr-2 pb-2">
              <Button asChild variant="ghost">
                <a href="https://www.linkedin.com/in/brianna-sharpe/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />LinkedIn
                </a>
              </Button>
            </div> */}
            {/* ---------------------------------- email --------------------------------- */}
            {/* <div className="pr-2 pb-2">
              <Button variant="ghost" onClick={copyEmail}>
                <FontAwesomeIcon icon={faEnvelope} />Email
              </Button>
            </div>
            <div className="">
              <Button asChild variant="ghost">
                <a href="https://briannasharpe.github.io/files/Brianna_Sharpe_Resume.pdf" target="_blank">
                  <FontAwesomeIcon icon={faDownload} />Resume
                </a>
              </Button>
            </div>
          </div> */}

          {/* ---------------------------------- links2 --------------------------------- */}
          <div className="flex justify-center md:justify-start pt-4">
            <div className="pb-2">
              <Button asChild variant="ghost" size="icon">
                <a href="https://github.com/briannasharpe" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </Button>
            </div>
            <div className="pb-2">
              <Button asChild variant="ghost" size="icon">
                <a href="https://www.linkedin.com/in/brianna-sharpe/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </Button>
            </div>
            {/* ---------------------------------- email --------------------------------- */}
            <div className="pr-2 pb-2">
              <Button variant="ghost" size="icon" onClick={copyEmail}>
                <FontAwesomeIcon icon={faEnvelope} />
              </Button>
            </div>
            <div className="pr-2 pb-2">
              <Button asChild variant="outline">
                <a href="https://briannasharpe.github.io/files/Brianna_Sharpe_Resume.pdf" target="_blank"><FontAwesomeIcon icon={faDownload} />Resume</a>
              </Button>
            </div>
            
          </div>
        </div>

        {/* --------------------------------- picture -------------------------------- */}
        {/* <div>
          <Avatar className="h-48 w-48">
            <AvatarImage src=""/>
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
        </div> */}
      </div>

      {/* -------------------------------- separator ------------------------------- */}
      {/* <div className="py-2">
        <Separator />
      </div> */}
    </section>
  )
}
