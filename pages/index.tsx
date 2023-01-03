import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import { ProjectBox, ProjectBoxProps } from '../components/ProjectBox';
import { ExperienceBox } from '../components/ExperienceBox';
import { TechnologyBox, TechnologyBoxProps } from '../components/TechnologyBox';
import { SectionLink } from '../components/SectionLink';
import { useEffect } from 'react';

const projects: ProjectBoxProps[] = [
    {
        title: 'Biodingo',
        description:
            'Website where users can practice their knowledge in biology and join in teacher classrooms to learn more about the subject.',
        technologies: 'React, ChakraUI',
        href: 'https://biodingo.fun',
    },
    {
        title: 'Linktree Clone',
        description:
            'Linktree Clone is a responsible web application where users create an account and edit their profiles adding useful links and social networks that they want to share with public.',
        technologies: 'Python, Flask, Bootstrap',
        href: 'https://github.com/ruantmelo/linktree-clone',
    },
    {
        title: 'Letmeask',
        description:
            'Letmeask is an ideal application for lives and streamings in which it is possible to create question rooms to respond live.',
        technologies: 'React, Firebase',
        href: 'https://github.com/ruantmelo/letmeask',
    },
    {
        title: 'ig.News',
        description: 'A news blog with posts and a subscription system.',
        technologies: 'Next.js, SASS, Stripe, Prismic and FaunaDB',
        href: 'https://github.com/ruantmelo/ignews',
    },
    {
        title: 'Weather APP',
        description: 'A simple weather app that shows the current weather.',
        technologies: 'React, SASS, OpenWeatherMap API',
        href: 'https://github.com/ruantmelo/weather',
    },
];

const technologies: TechnologyBoxProps[] = [
    {
        title: 'React',
    },
    {
        title: 'Next.js',
    },
    {
        title: 'ChakraUI',
    },
    {
        title: 'TailwindCSS',
    },
    {
        title: 'Node.js',
    },
    {
        title: 'Express',
    },
    {
        title: 'NestJS',
    },
    {
        title: 'Python',
    },
];

export default function Home() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            verifyScrollPosition();
            window.onscroll = () => {
                verifyScrollPosition();
            };
        }
    });

    return (
        <>
            <Head>
                <meta
                    content="width=device-width, initial-scale=1"
                    name="viewport"
                />

                <title>Ruan Melo</title>
                <meta
                    content="Ruan Melo | Computer Science Student"
                    name="description"
                />

                <meta content="Ruan Melo" property="author" />

                {/* <!-- Open Graph / Facebook --> */}
                <meta content="website" property="og:type" />
                <meta content="https://metatags.io/" property="og:url" />
                <meta content="Ruan Melo" property="og:title" />
                <meta
                    content="Computer Science student and web developer"
                    property="og:description"
                />
                <meta
                    content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
                    property="og:image"
                />

                {/* <!-- Twitter --> */}
                <meta content="summary_large_image" property="twitter:card" />
                <meta content="https://metatags.io/" property="twitter:url" />
                <meta content="Ruan Melo" property="twitter:title" />
                <meta
                    content="Computer Science student and web developer"
                    property="twitter:description"
                />
                <meta
                    content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
                    property="twitter:image"
                />
            </Head>

            <main className="max-w-screen-xl m-auto p-8 lg:pt-0 md:px-10 relative flex flex-col lg:flex-row">
                <section className="flex flex-col lg:py-16  lg:justify-between lg:h-screen lg:fixed lg:max-w-md  ">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-zinc-100  text-6xl lg:text-8xl font-bold">
                            {"Hello, I'm Ruan"}
                        </h1>
                        <p className="text-zinc-400">
                            I study Computer Science Student at UFAL and I am
                            learning and building personal projects to become a
                            web developer.
                        </p>
                        <nav className="mt-10 hidden lg:flex ">
                            <ul className="flex flex-col gap-6 w-full">
                                <li id="projects-nav-link">
                                    <SectionLink
                                        href={'#projects'}
                                        order={'01'}
                                        title="Projects"
                                    />
                                </li>
                                <li id="experience-nav-link">
                                    <SectionLink
                                        href={'#experience'}
                                        order={'02'}
                                        title="Experience"
                                    />
                                </li>
                                <li id="technologies-nav-link">
                                    <SectionLink
                                        href={'#technologies'}
                                        order={'03'}
                                        title="Technologies"
                                    />
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* mt-8 lg:mt-16  */}
                    <div className="max-w-screen-xl text-zinc-100 flex flex-col gap-4 mt-12 ">
                        <ul className="flex items-center gap-4 lg:gap-6 text-sm flex-wrap ">
                            <li>
                                <Image
                                    alt={"Ruan Melo's image"}
                                    className="rounded-full"
                                    height={'50'}
                                    src="/eu.jpeg"
                                    width={'50'}
                                ></Image>
                            </li>
                            <li>
                                <Link
                                    className="flex items-center gap-2"
                                    href={'https://github.com/ruantmelo'}
                                    target={'_blank'}
                                >
                                    <FaGithub className="h-4 w-4" /> GitHub{' '}
                                    <BiLinkExternal className="h-4 w-4 text-zinc-400" />{' '}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="flex items-center gap-2"
                                    href={
                                        'https://www.linkedin.com/in/ruantmelo/'
                                    }
                                    target={'_blank'}
                                >
                                    <FaLinkedin className="h-4 w-4" />
                                    Linkedin{' '}
                                    <BiLinkExternal className="h-4 w-4 text-zinc-400" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="flex items-center gap-2"
                                    href={
                                        'https://www.instagram.com/ruantmelo/'
                                    }
                                    target={'_blank'}
                                >
                                    <FaInstagram className="h-4 w-4" />
                                    Instagram{' '}
                                    <BiLinkExternal className="h-4 w-4 text-zinc-400" />
                                </Link>
                            </li>
                        </ul>

                        <div className="text-sm mx-auto mt-4 lg:mt-0 lg:ml-auto lg:w-fit text-zinc-600">
                            Design inspired by:{' '}
                            <Link
                                className="text-zinc-400 underline"
                                href={'https://dribbble.com/NicolasMzrd'}
                                target="_blank"
                            >
                                Nicolas Meuzard
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="mt-24 lg:mt-0 lg:max-w-xl w-full  lg:pb-[600px] lg:p-6 lg:pt-0 lg:absolute lg:right-0 flex flex-col">
                    <div
                        className="flex flex-col gap-2  group "
                        id={'projects'}
                    >
                        <h2
                            className="lg:opacity-0  text-zinc-100 text-sm  mb-6 lg:mb-0 font-bold tracking-widest uppercase"
                            id="projects-title"
                        >
                            Projects
                        </h2>
                        {projects.map((project, index) => (
                            <ProjectBox key={index} {...project} />
                        ))}
                    </div>

                    <div
                        className="flex flex-col gap-6 md:mb-16"
                        id={'experience'}
                    >
                        <h2
                            className="lg:opacity-0  text-zinc-100 text-sm mb-6 font-bold tracking-widest uppercase mt-20"
                            id="experience-title"
                        >
                            Experience
                        </h2>
                        <ExperienceBox
                            date={'3 Months'}
                            location="Zenix Tech"
                            role="Full Stack Developer"
                        />
                        <ExperienceBox
                            date={'1 year'}
                            location="IFAL - PIBIC"
                            role="Frontend Developer"
                        />
                        {/* <ExperienceBox /> */}
                    </div>

                    <div
                        className="group grid grid-cols-2 "
                        id={'technologies'}
                    >
                        <h2
                            className="lg:opacity-0  col-span-2 text-zinc-100 text-sm  font-bold tracking-widest uppercase mb-6 mt-20 "
                            id="technologies-title"
                        >
                            Technologies
                        </h2>

                        {technologies.map((technology, index) => (
                            <TechnologyBox
                                key={index}
                                title={technology.title}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

function verifyScrollPosition() {
    const projectsLink = document
        .getElementById('projects-nav-link')
        ?.getElementsByTagName('a')[0];
    const experienceLink = document
        .getElementById('experience-nav-link')
        ?.getElementsByTagName('a')[0];
    const technologiesLink = document
        .getElementById('technologies-nav-link')
        ?.getElementsByTagName('a')[0];

    if (!projectsLink || !experienceLink || !technologiesLink) {
        return;
    }

    const projectsContainer = document.getElementById('projects');
    const experienceContainer = document.getElementById('experience');
    const technologiesContainer = document.getElementById('technologies');

    if (!projectsContainer || !experienceContainer || !technologiesContainer) {
        return;
    }

    //const scrollPosition = window.scrollY;

    const experienceLimit =
        window.scrollY - projectsContainer.offsetTop >
        projectsContainer.offsetHeight * 0.7;
    const technologiesLimit =
        window.scrollY - experienceContainer.offsetTop >
        experienceContainer.offsetHeight * 0.7;

    if (technologiesLimit) {
        technologiesLink.dataset.ui = 'active';
        technologiesContainer.classList.remove('lg:opacity-50');

        delete experienceLink.dataset.ui;
        delete projectsLink.dataset.ui;

        experienceContainer.classList.add('lg:opacity-50');
        projectsContainer.classList.add('lg:opacity-50');
    } else if (experienceLimit) {
        experienceLink.dataset.ui = 'active';
        experienceContainer.classList.remove('lg:opacity-50');

        delete technologiesLink.dataset.ui;
        delete projectsLink.dataset.ui;

        technologiesContainer.classList.add('lg:opacity-50');
        projectsContainer.classList.add('lg:opacity-50');
    } else {
        projectsLink.dataset.ui = 'active';
        projectsContainer.classList.remove('lg:opacity-50');

        delete experienceLink.dataset.ui;
        delete technologiesLink.dataset.ui;

        experienceContainer.classList.add('lg:opacity-50');
        technologiesContainer.classList.add('lg:opacity-50');
    }
}
