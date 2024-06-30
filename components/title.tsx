interface TitleProps {
    title: string
    subtitle: string
}

const Title = (props: TitleProps) => {
    const { title, subtitle } = props

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-gray-400 lg:text-2xl">{title}</h3>
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{subtitle}</span></h2>
        </div>
    );
}

export default Title;