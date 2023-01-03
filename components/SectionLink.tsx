import Link from 'next/link';

interface SectionLinkProps {
    href: string;
    title: string;
    isActive?: boolean;
    order: string;
}

export const SectionLink = ({ href, title, order }: SectionLinkProps) => {
    return (
        <Link
            className={
                'group cursor-pointer data-[ui=active]:text-zinc-100 text-zinc-600 transition duration-300  font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:text-zinc-100  text-xs'
            }
            href={href}
            onClick={e => {
                e.preventDefault();

                const target = document.querySelector(href);

                if (target) {
                    window.location.hash = href;
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            }}
        >
            {order}
            <span
                className={
                    'h-px  group-data-[ui=active]:w-12  group-data-[ui=active]:bg-white  w-5 bg-zinc-600 group-hover:w-12 group-hover:bg-white transition-all duration-300 ease-in-out'
                }
            ></span>
            {title}
        </Link>
    );
};
