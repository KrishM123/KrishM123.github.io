import Image from 'next/image'
import Head from 'next/head';
import ProjectBox from '../../components/projectbox'
import Layout, {siteTitle} from '../layout'
import NavBar from '../../components/navbar'

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <NavBar></NavBar>
      <div className="bg-lightest">
        <div className="text-5xl font-sans font-bold flex flex-grow justify-center text-center text-darkest pt-10 ">
        Research
        </div>
        <div className={"px-[50px] md:px-[300px] max-w grid gap-6 grid-cols-1 md:grid-cols-3 m-8"}>
            <ProjectBox image={"/images/No To Photo.png"} link={"https://drive.google.com/file/d/14rQa1GPFtaPWgxOX7aG2ZTQNZ_Qt98tj/view?usp=sharing"} title={"No To Photo: Photo Blocking Pendant"} description={"Gold Medal + Best Junior Physics Project @ CWSF 2019"}/>
            <ProjectBox image={"/images/POC PT Test.png"} link={"https://drive.google.com/file/d/1-bddRs1d3afIfAdnOOv7y7xKHSWJ5ktX/view?usp=drive_link"} title={"Point of Care Prothrombin Time Test"} description={"Silver Medal @ CWSF 2021"}/>
            <ProjectBox image={"/images/Pee Xylophone.png"} link={"https://projectboard.world/isef/project/enbm051-non-invasive-bladder-pressure-measurement-system"} title={"Pee Xylophone: A Novel Non-Invasive Bladder Pressure Measurement System"} description={"Gold Medal + Youth Can Innovate Plus @ CWSF 2022; Team Canada ISEF 2023"}/>
        </div>
        <div className="text-5xl font-sans font-bold flex flex-grow justify-center text-center text-darkest pt-10 ">
        Projects
        </div>
        <div className={"px-[50px] md:px-[300px] max-w grid gap-6 grid-cols-1 md:grid-cols-3 m-8"}>
            <ProjectBox image={"/images/Car.jpeg"} link={"https://github.com/rajansagarwal/self-driving-tank"} title={"Self-Driving Delivery Car"}/>
            <ProjectBox image={"/images/Drivesense.png"} link={"https://devpost.com/software/drive-sense"} title={"DriveSense: Accurate Driver Rating"} description={"Hack the North 2023 Winner"}/>
            <ProjectBox image={"/images/Cognicare.png"} link={"https://github.com/ishaan1013/cognicare"} title={"CogniCare: Alzhemeirs Prevention and Detection"} description={"MHacks 2023 Winner"}/>
            <ProjectBox image={"/images/Maapa.png"} link={"https://github.com/KrishM123/maapa"} title={"MAAPA: Smart CTRL+F"}/>
            <ProjectBox image={"/images/Mean Reversion.png"} link={"https://github.com/KrishM123/Mean-Reversion"} title={"Mean Reversion"}/>
        </div>
      </div>
    </Layout>
  )
}
