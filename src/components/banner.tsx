interface BannerProps {
    title: string;
    subTitle: string;
}

export const Banner = ({ title, subTitle }: BannerProps) => {
    return (
        <div>
            <h1 className="text-3xl text-center font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                {title}
            </h1>
            <p className="mt-5 text-base px-3 md:px-0 md:text-md lg:text-lg text-center">
                {subTitle}
            </p>
        </div>
    )
}