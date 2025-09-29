'use client';

import useAosInit from "@/hooks/useAosInit";

const PageText = ({
    title,
    description
}) => {

    useAosInit();

    return (
        <div
            className="text-center"
            data-aos="fade-down"
            data-aos-duration="3000"
            data-aos-offset="-500"
        >
            <h2 className="text-xl md:text-3xl font-light">
                {title}
            </h2>
            <p className="text-sm md:text-base mt-5 max-w-2xl mx-auto">
                {description}
            </p>
        </div>
    );
}

export default PageText;
