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
      <div className="max-w font-sans bg-lightest block flex-grow justify-center pt-[80px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-grow justify-center">
          <Image
            src="/images/Headshot.png"
            width={300}
            height={300}
            alt="Headshot"
            style={{
              objectFit: "cover",
              borderRadius:"200px"
            }}
            className="shadow-3xl w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold flex flex-grow justify-center text-center text-darkest py-4">Krish Modi</h1>
        <div className="text-darkest text-base sm:text-lg text-center space-y-2">
          <p>I am currently a first year studying Software Engineering @ The University of Waterloo</p>
          <p>Seeking Summer 2024 Internships</p>
          <p>I'm interested in coming up with new solutions to complex technical problems</p>
        </div>
        <div className="my-[30px] justify-center flex flex-wrap gap-4">
          <SocialIcon image={"/images/Linkedin.png"} link={"https://www.linkedin.com/in/krish-modi/"} />
          <SocialIcon image={"/images/Github.png"} link={"https://github.com/KrishM123"} />
          <SocialIcon image={"/images/Twitter.png"} link={"https://twitter.com/therealkmodi"} />
          <SocialIcon image={"/images/Devpost.svg"} link={"https://devpost.com/kahnscatterkrish"} />
          <SocialIcon image={"/images/Email.svg"} link={"mailto: krish.modi@uwaterloo.ca"} />
          <SocialIcon image={"/images/Webring.png"} link={"https://se-webring.xyz/"} />
        </div>
        <div className="flex justify-center my-2 pb-[100px]">
          <div className="flex-shrink text-darkest text-base sm:text-lg w-full max-w-3xl">
            <p>In the past, I've...</p>
            <ul className="list-disc mx-5 space-y-2">
              <li>Invented a patent-pending <a href="https://projectboard.world/isef/project/enbm051-non-invasive-bladder-pressure-measurement-system" className="underline">medical device</a>, winning a gold medal at CWSF and a spot on <a href="https://youthscience.ca/team-canada-isef-2023/" className="underline">Team Canada</a> for ISEF</li>
              <li>Founded and sold my first startup <i>Medschart</i> at 18 to Shoppers Drug Mart</li>
              <li>Optimized BERT for corpus-specific question-answering before ChatGPT @ <a href="https://github.com/KrishM123/maapa" className="underline">MAAPA</a></li>
              <li>Created a paper-pending stock-prediction algorithm that beat the S&P 500 @ <a href="https://watstreet.netlify.app/" className="underline">Wat Street</a></li>
              <li>Won Hack the North with an innovative machine-vision based <a href="https://devpost.com/software/drive-sense" className="underline">dashcam app</a></li>
            </ul>
          </div>
        </div>
        {/* <div className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold flex flex-grow justify-center text-center text-darkest pt-10">
        <a id="research">Research</a>
        </div>
        <div className="px-4 sm:px-6 lg:px-8 max-w grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-8">
            <ProjectBox image={"/images/No To Photo.png"} link={"https://drive.google.com/file/d/14rQa1GPFtaPWgxOX7aG2ZTQNZ_Qt98tj/view?usp=sharing"} title={"No To Photo: Photo Blocking Pendant"} description={"Gold Medal + Best Junior Physics Project @ CWSF 2019"}/>
            <ProjectBox image={"/images/POC PT Test.png"} link={"https://drive.google.com/file/d/1-bddRs1d3afIfAdnOOv7y7xKHSWJ5ktX/view?usp=drive_link"} title={"Point of Care Prothrombin Time Test"} description={"Silver Medal @ CWSF 2021"}/>
            <ProjectBox image={"/images/Pee Xylophone.png"} link={"https://projectboard.world/isef/project/enbm051-non-invasive-bladder-pressure-measurement-system"} title={"Pee Xylophone: A Novel Non-Invasive Bladder Pressure Measurement System"} description={"Gold Medal + Youth Can Innovate Plus @ CWSF 2022; Team Canada ISEF 2023"}/>
        </div>
        <div className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold flex flex-grow justify-center text-center text-darkest pt-10">
        <a id="projects">Projects</a>
        </div>
        <div className="px-4 sm:px-6 lg:px-8 max-w grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-8">
            <ProjectBox image={"/images/Car.jpeg"} link={"https://github.com/rajansagarwal/self-driving-tank"} title={"Self-Driving Delivery Car"}/>
            <ProjectBox image={"/images/Drivesense.png"} link={"https://devpost.com/software/drive-sense"} title={"DriveSense: Accurate Driver Rating"} description={"Hack the North 2023 Winner"}/>
            <ProjectBox image={"/images/Cognicare.png"} link={"https://github.com/ishaan1013/cognicare"} title={"CogniCare: Alzhemeirs Prevention and Detection"} description={"MHacks 2023 Winner"}/>
            <ProjectBox image={"/images/Maapa.png"} link={"https://github.com/KrishM123/maapa"} title={"MAAPA: Smart CTRL+F"}/>
            <ProjectBox image={"/images/Mean Reversion.png"} link={"https://github.com/KrishM123/Mean-Reversion"} title={"Mean Reversion"}/>
        </div> */}
      </div>
    </Layout>
  )
}
