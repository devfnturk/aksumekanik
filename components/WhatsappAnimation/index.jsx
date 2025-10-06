"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function WhatsappAnimation() {

    return (
        <>
            <Link href='https://wa.me/905330174898' className='fixed bottom-20 right-6 z-50' target="_blank">
                <Image src='/images/whatsappAnimation.gif' alt='Whatsapp...' width={80} height={80} />
            </Link>
        </>
    );
}
