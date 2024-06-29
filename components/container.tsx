interface ContainerProps {
    children: React.ReactNode
}

const ContainerPage = (props: ContainerProps) => {
    const {children} = props
    return (
            <div className="px-12 py-20 md:px-420 md:py-20 max-w-3xl mx-auto">
                {children}
            </div>
    );
}

export default ContainerPage;