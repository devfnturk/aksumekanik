'use client';
import useAosInit from "@/hooks/useAosInit";
import Image from "next/image";
import Link from "next/link";

const MechanicalApplicationBox = ({
    id,
    imgSrc,
    title,
    content,
    imgLeft,
    dataAosOffset,
    type,
    pageTitle
}) => {

    useAosInit();

    const link = type === 'brand' ? `/markalar/${id}`
        : type === 'activityAreasByBrand' ? `/markalar/${pageTitle}/${id}`
            : type === 'activities' ? `/faaliyet-alanlari/${id}`
                : `/faaliyet-alanlari/${pageTitle}/${id}`;

    return (
        <div
            id={id}
            className="mt-20 pt-10"
            data-aos={imgLeft ? "fade-right" : "fade-left"}
            data-aos-duration="3000"
            data-aos-offset={dataAosOffset}
        >
            <div className={`flex flex-col lg:flex-row ${imgLeft ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-5 md:gap-10`}>
                <div className="lg:w-1/2">
                    {imgSrc && imgSrc !== '' && (
                        <Image
                            src={imgSrc}
                            alt={title}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                        />
                    )}
                </div>
                <div className="lg:w-1/2">
                    <div>
                        <Link href={link} className="text-base md:text-xl font-bold text-gray-900 pt-4 lg:pt-0 areaTitle">{title}</Link>
                        <p className="text-sm md:text-base mt-4 text-gray-700">{content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MechanicalApplicationBox;
