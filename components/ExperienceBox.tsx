interface ExperienceBoxProps {
    location: string;
    role: string;
    date: string;
}

export const ExperienceBox = ({ location, role, date }: ExperienceBoxProps) => {
    return (
        <div className="text-zinc-100 flex flex-col w-full">
            <h3 className="text-2xl font-semibold">{location}</h3>
            <p className="text-sm text-zinc-400">{role}</p>
            <h4 className="uppercase tracking-widest text-xs mt-2">{date}</h4>
        </div>
    );
};
