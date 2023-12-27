import Image from 'next/image'
import Head from 'next/head';
import Layout, {siteTitle} from './layout'
import NavBar from '../components/navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <NavBar></NavBar>
      <div className={"max-w font-sans bg-lightest flex flex-grow justify-center pt-[80px]"}>
        <div>
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
         <div className={"text-darkest text-lg py-4 flex flex-grow justify-center  text-center px-4"}>Interested in all types of technology expecially the new.</div>
         <div className={"my-[10px] justify-center flex flex-grow"}>
          <Link href="https://www.linkedin.com/in/krish-modi/" className={"mx-3"}>
            <Image
              src="/images/Linkedin.png"
              width={40}
              height={40}
              alt="Linkedin"
            />
          </Link>
          <Link href="https://github.com/KrishM123" className={"mx-3"}>
            <Image
              src="/images/Github.png"
              width={40}
              height={40}
              alt="Github"
            />
          </Link>
          <Link href="https://twitter.com/therealkmodi" className={"mx-3"}>
            <Image
              src="/images/Twitter.png"
              width={40}
              height={40}
              alt="Twitter"
            />
          </Link>
          <Link href="https://devpost.com/kahnscatterkrish" className={"mx-3"}>
            <Image
              src="/images/Devpost.svg"
              width={40}
              height={40}
              alt="Devpost"
            />
          </Link>
         </div>
        </div>
      </div>
    </Layout>
  )
}
