import classNames from 'classnames';
import Link from 'next/link';
import { BackgroundGradientAnimation } from './components/background-gradient-animation';
import { AtSignIcon } from './components/layouts/icons/at-sign-icon';
import { GithubIcon } from './components/layouts/icons/github-icon';
import { LinkedinIcon } from './components/layouts/icons/linkedin-icon';
import { XIcon } from './components/layouts/icons/x-icon';
import ThemeSwitch from './components/layouts/theme-switch/theme-switch';
import { merryWeather } from './fonts';

export default function Home() {
  return (
    <main className="relative min-h-svh w-screen overflow-hidden">
      <div className="absolute top-4 right-4 z-10">
        <ThemeSwitch />
      </div>
      <BackgroundGradientAnimation>
        <div
          className={classNames('relative min-h-svh', merryWeather.className)}
        >
          <div className="absolute top-[20%] md:top-[40%] max-w-5xl flex-col space-y-4 justify-center px-8 md:px-24 text-shadow-lg lg:ml-14">
            <h1 className="font-serif text-2xl font-medium md:mr-4 md:text-4xl">
              Welcome to my{' '}
              <span className="font-bold">personal portfolio — </span> or, as I
              like to call it, my{' '}
              <span className="italic border-b">playground</span> on the web.
            </h1>
            <section className="relative z-10">
              <p className="text-base text-justify">
                I&apos;m Abhi — a Software Engineer and lived in kolkata. I love
                building things for the web and apps. I&apos;m passionate about
                creating beautiful and functional user experiences. I believe
                the best way to learn is by doing, so I&apos;m constantly
                exploring new technologies. Right now, working on a{' '}
                <a
                  href="https://www.connectaide.ai/"
                  className="underline-magical"
                  target="_blank"
                  rel="noreferrer"
                >
                  New York
                </a>{' '}
                based company. currently I&apos;m more focused on REACT!
              </p>
            </section>
            <section className="relative z-10 flex space-x-4 items-center text-sm">
              <div>
                <p>More about me: </p>
                <div className="flex -ml-2">
                  <Link
                    href="https://www.linkedin.com/in/avvjt/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="linkedin"
                  >
                    <LinkedinIcon className="h-9 w-9" />
                  </Link>
                  <Link
                    href="https://github.com/avvjt"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="github"
                  >
                    <GithubIcon className="h-9 w-9" />
                  </Link>
                  <Link
                    href="https://x.com/avvjet"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="twitter"
                  >
                    <XIcon className="h-9 w-9" />
                  </Link>
                  <Link
                    href="mailto:avvjit@gmail.com"
                    aria-label="email"
                    rel="noreferrer"
                  >
                    <AtSignIcon className="h-9 w-9" />
                  </Link>
                </div>
              </div>
              <div className="h-14 border-l border-gray-300" />
              <div className="flex flex-wrap space-x-3 space-y-1">
                <Link href="/projects">/projects</Link>
                <Link href="/thoughts">/thoughts</Link>
                <Link href="/uses">/uses</Link>
              </div>
            </section>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </main>
  );
}
