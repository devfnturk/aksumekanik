// import Image from "next/image";
import Link from "next/link";

export function InfoBox({ title, content, icon }) {
    return (
        <div className="flex items-start mb-6">
            <div className="mr-4 p-3 rounded-full bg-[var(--aksu-green)]">{icon}</div>
            <div>
                <h4 className="text-lg font-semibold mb-1 text-[var(--aksu-green)]">{title}</h4>
                <div>{content}</div>
            </div>
        </div>
    );
}

export function CataloguesBox({ link, imgSrc, imgAlt, buttonText, dataAos, dataAosDuration, dataAosOffset }) {
    return (
        <div data-aos={dataAos} data-aos-duration={dataAosDuration} data-aos-offset={dataAosOffset}>
            <img className="mx-auto mb-4 !w-[150px] !h-[150px] object-contain" width={150} height={150} src={imgSrc} alt={imgAlt} />
            <Link href={link} className="bg-[var(--aksu-green)] text-sm md:text-base hover:opacity-90 hover:cursor-pointer text-white px-6 py-2 rounded truncate overflow-hidden whitespace-nowrap max-w-full block text-center" target="_blank">
                {buttonText}
            </Link>
        </div>
    );
}
