import { decodeImage } from "@/services/functions";
import Image from "next/image";
import Link from "next/link";

const ProductBox = ({ imageSrc, imageAlt, href, productName, dataAos, dataAosDuration, dataAosOffset }) => {

    return (
        <div className="col-span-4 sm:col-span-2 md:col-span-1" data-aos={dataAos} data-aos-duration={dataAosDuration} data-aos-offset={dataAosOffset}>
            <Image className="mx-auto mb-4" width={150} height={150} src={decodeImage(imageSrc || '')} alt={imageAlt} />
            <Link href={href} className="bg-[var(--aksu-green)] text-sm md:text-base hover:opacity-90 hover:cursor-pointer text-white px-6 py-2 rounded truncate overflow-hidden whitespace-nowrap max-w-full block text-center">
                {productName}
            </Link>
        </div>
    );
}

export default ProductBox;
