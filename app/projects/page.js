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
      <div className="bg-lightest py-11">
        <div className="text-5xl font-sans font-bold flex flex-grow justify-center text-center text-darkest pt-10 ">
        Projects
        </div>
        <div className={"px-[20px] sm:px-[100px] max-w grid gap-6 grid-cols-1 sm:grid-cols-3 m-8"}>
            <ProjectBox image={"/images/Car.jpeg"} link={"https://github.com/rajansagarwal/self-driving-tank"} title={"Self-Driving Delivery Car"}/>
            <ProjectBox image={"/images/Drivesense.png"} link={"https://devpost.com/software/drive-sense"} title={"DriveSense: HTN 2023 Winner"}/>
            <ProjectBox image={"/images/Cognicare.png"} link={"https://github.com/ishaan1013/cognicare"} title={"CogniCare: MHacks 2023 Winner"}/>
            <ProjectBox image={"/images/Maapa.png"} link={"https://github.com/KrishM123/maapa"} title={"MAAPA: Smart CTRL+F"}/>
            <ProjectBox image={"/images/Mean-Reversion.jpg"} link={"https://github.com/KrishM123/Mean-Reversion"} title={"Mean Reversion"}/>
        </div>
      </div>
    </Layout>
  )
}
