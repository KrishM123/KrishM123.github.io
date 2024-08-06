import Image from 'next/image'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import Layout, { siteTitle } from './layout'
import NavBar from '../components/navbar'
import SocialIcon from '../components/socialicon'
import ProjectBox from '../components/projectbox'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem('darkMode', !darkMode)
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Merriweather:wght@300;400&display=swap" rel="stylesheet" />
      </Head>
      <div className={`font-sans ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen transition-colors duration-300`}>
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <section className="text-center mb-16 animate-fade-in">
            <Image
              src="/images/Headshot.png"
              width={200}
              height={200}
              alt="Krish Modi"
              className="rounded-full shadow-xl mx-auto mb-6 transition-transform duration-300 hover:scale-105"
            />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-poppins">Krish Modi</h1>
            <p className="text-xl mb-6 font-merriweather">Software Engineering Student @ University of Waterloo</p>
            <div className="flex justify-center space-x-4 mb-8">
              <SocialIcon image="/images/Linkedin.png" link="https://www.linkedin.com/in/krish-modi/" />
              <SocialIcon image="/images/Github.png" link="https://github.com/KrishM123" />
              <SocialIcon image="/images/Twitter.png" link="https://twitter.com/therealkmodi" />
              <SocialIcon image="/images/Devpost.svg" link="https://devpost.com/kahnscatterkrish" />
              <SocialIcon image="/images/Email.svg" link="mailto:krish.modi@uwaterloo.ca" />
            </div>
            <a href="#" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300">Download Resume</a>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 font-poppins">About Me</h2>
            <p className="text-lg mb-4 font-merriweather">I'm a first-year Software Engineering student at the University of Waterloo, passionate about solving complex technical problems and creating innovative solutions.</p>
            <p className="text-lg font-merriweather">Currently seeking Winter 2025 Internships to apply and expand my skills in real-world projects.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 font-poppins">Experience</h2>
            <ul className="space-y-4 font-merriweather">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 text-2xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Patent-Pending Medical Device</h3>
                  <p>Invented a non-invasive bladder pressure measurement system, winning gold at CWSF and representing Team Canada at ISEF.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 text-2xl">💼</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Startup Founder</h3>
                  <p>Founded and sold my first startup, Medschart, to Shoppers Drug Mart at the age of 18.</p>
                </div>
              </li>
              {/* Add more experience items here */}
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 font-poppins">Projects</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <ProjectBox image="/images/Drivesense.png" link="https://devpost.com/software/drive-sense" title="DriveSense: Accurate Driver Rating" description="Hack the North 2023 Winner" />
              <ProjectBox image="/images/Cognicare.png" link="https://github.com/ishaan1013/cognicare" title="CogniCare: Alzheimer's Prevention and Detection" description="MHacks 2023 Winner" />
              <ProjectBox image="/images/Maapa.png" link="https://github.com/KrishM123/maapa" title="MAAPA: Smart CTRL+F" />
              {/* Add more project boxes here */}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 font-poppins">Skills</h2>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              <SkillBar skill="JavaScript" percentage={90} />
              <SkillBar skill="React" percentage={85} />
              <SkillBar skill="Python" percentage={80} />
              <SkillBar skill="Machine Learning" percentage={75} />
              {/* Add more skill bars here */}
            </div>
          </section>
        </main>
        <footer className="text-center py-6 font-merriweather">
          <p>&copy; 2024 Krish Modi. All rights reserved.</p>
        </footer>
      </div>
    </Layout>
  )
}

function SkillBar({ skill, percentage }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-semibold">{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  )
}l