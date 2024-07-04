interface ContainerProps {
    children: React.ReactNode
}

const ContainerPage = (props: ContainerProps) => {
    const {children} = props
    return (
            <div className="px-12 py-5 md:px-40 md:py-40 max-w-3xl mx-auto">
                {children}
            </div>
    );
}

export default ContainerPage;