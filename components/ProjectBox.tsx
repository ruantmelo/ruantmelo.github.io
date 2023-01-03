import Link from 'next/link';

export interface ProjectBoxProps {
    technologies: string;
    title: string;
    description: string;
    href: string;
}

export const ProjectBox = ({
    href,
    technologies,
    title,
    description,
}: ProjectBoxProps) => {
    return (
        <Link
            className="group-hover:hover:opacity-100 group-hover:opacity-50 hover:bg-zinc-800 bg-zinc-800 p-8 text-zinc-100 flex flex-col gap-4 hover:scale-105 transition duration-300"
            href={href}
            target={'_blank'}
        >
            <h4 className="font-semibold uppercase tracking-widest text-xs">
                {technologies}
            </h4>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-sm text-zinc-400">{description}</p>
        </Link>
    );
};
