import Image from 'next/image'
import Head from 'next/head';
import Layout, {siteTitle} from './layout'
import NavBar from '../components/navbar'
import SocialIcon from '../components/socialicon'

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
            className={"shadow-2xl"}
          />
        </div>
        <div className={"text-5xl font-sans font-bold flex flex-grow justify-center text-center text-darkest py-4 px-4"}>Krish Modi</div>
        <div className={"text-darkest text-lg text-center px-4"}>
          <div>I am currently a first year studying Software Engineering @ The University of Waterloo</div>
          <div>Seeking Summer 2024 Internships</div>
          <div>I'm interested in coming up with new solutions to complex technical problems</div>
        </div>
        <div className={"my-[30px] justify-center flex flex-grow"}>
          <SocialIcon image={"/images/Linkedin.png"} link={"https://www.linkedin.com/in/krish-modi/"} />
          <SocialIcon image={"/images/Github.png"} link={"https://github.com/KrishM123"} />
          <SocialIcon image={"/images/Twitter.png"} link={"https://twitter.com/therealkmodi"} />
          <SocialIcon image={"/images/Devpost.svg"} link={"https://devpost.com/kahnscatterkrish"} />
          <SocialIcon image={"/images/Email.svg"} link={"mailto: krish.modi@uwaterloo.ca"} />
        </div>
        <div className="flex justify-center my-5 pb-[100px]">
          <div className={"flex-shrink text-darkest text-lg px-4 w-[750px]"}>
            <div>In the past, I've...</div>
            <ul className="list-disc mx-5">
              <li>Invented a patent-pending <a href="https://projectboard.world/isef/project/enbm051-non-invasive-bladder-pressure-measurement-system" className="underline">medical device</a>, winning a gold medal at CWSF and a spot on <a href="https://youthscience.ca/team-canada-isef-2023/" className="underline">Team Canada</a> for ISEF</li>
              <li>Optimized BERT for corpus-specific question-answering before ChatGPT @ <a href="https://github.com/KrishM123/maapa" className="underline">MAAPA</a></li>
              <li>Created an innovative stock-prediction algorithm that paper-traded a <span className="font-semibold">5% return in 2 months</span> @ <a href="https://www.linkedin.com/company/wat-street/?originalSubdomain=ca" className="underline">Wat Street</a></li>
              <li>Won Hack the North with an innovative machine-vision based <a href="https://devpost.com/software/drive-sense" className="underline">dashcam app</a></li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
