const GoogleMaps = ({
    title,
    ariaLabel,
    url
}) => {
    return (
        <div className="container mx-auto mt-10">
            <iframe src={url}
                title={title}
                aria-label={ariaLabel}
                className="w-full h-[400px]"
                loading="lazy"
                allowFullScreen
            >
            </iframe>
        </div>
    );
}

export default GoogleMaps;
