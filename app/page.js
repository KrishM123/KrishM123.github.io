import Image from 'next/image'
import Head from 'next/head';
import Layout, {siteTitle} from './layout'
import NavBar from '../components/navbar'
import SocialIcon from '../components/socialicon'
import ProjectBox from '../components/projectbox'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <NavBar></NavBar>
      <div className={"max-w font-sans bg-lightest block flex-grow justify-center pt-[80px]"}>
        <div className={"flex flex-grow justify-center"}>
          <Image
            src="/images/Headshot.jpeg"
            width={300}
            height={300}
            alt="Headshot"
            style={{
              objectFit: "cover",
              borderRadius:"200px"
            }}
          />
        </div>
        <div className={"text-5xl font-sans font-bold flex flex-grow justify-center text-center text-darkest py-4 px-4"}>Krish Modi</div>
        <div className={"text-darkest text-lg flex flex-grow justify-center text-center px-4"}>1st year Software Engineering student at the University of Waterloo</div>
        <div className={"text-darkest text-lg flex flex-grow justify-center text-center px-4"}>Seeking Summer 2024 Internships</div>
        <div className={"text-darkest text-lg flex flex-grow justify-center  text-center px-4"}>Interested in all types of technology especially the new.</div>
        <div className={"my-[30px] justify-center flex flex-grow"}>
          <SocialIcon image={"/images/Linkedin.png"} link={"https://www.linkedin.com/in/krish-modi/"} />
          <SocialIcon image={"/images/Github.png"} link={"https://github.com/KrishM123"} />
          <SocialIcon image={"/images/Twitter.png"} link={"https://twitter.com/therealkmodi"} />
          <SocialIcon image={"/images/Devpost.svg"} link={"https://devpost.com/kahnscatterkrish"} />
        </div>
        <div className={"py-4 px-[20px] sm:px-[100px] max-w grid gap-6 grid-cols-1 sm:grid-cols-4 m-8"}>
            <ProjectBox image={"/images/Car.jpeg"} link={"https://github.com/rajansagarwal/self-driving-tank"} title={"Self-Driving Delivery Car"}/>
            <ProjectBox image={"/images/Drivesense.png"} link={"https://devpost.com/software/drive-sense"} title={"DriveSense: HTN 2023 Winner"}/>
            <ProjectBox image={"/images/Cognicare.png"} link={"https://github.com/ishaan1013/cognicare"} title={"CogniCare: MHacks 2023 Winner"}/>
            <ProjectBox image={"/images/Maapa.png"} link={"https://github.com/KrishM123/maapa"} title={"MAAPA: Smart CTRL+F"}/>
        </div>
      </div>
    </Layout>
  )
}
