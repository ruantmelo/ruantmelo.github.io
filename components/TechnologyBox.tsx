export interface TechnologyBoxProps {
    title: string;
}

export const TechnologyBox = ({ title }: TechnologyBoxProps) => {
    return (
        <div className="group-hover:hover:opacity-100 hover:scale-110 transition duration-300 group-hover:opacity-50 text-zinc-400 py-2 flex flex-col gap-4 w-full">
            <h3 className="text-2xl font-semibold tracking-wide cursor-default">
                {title}
            </h3>
            {/* <p className='text-sm text-zinc-400'>Software Engineer</p>
            <h4 className='uppercase tracking-widest text-xs'>JUNE 28, 2021</h4> */}
        </div>
    );
};
