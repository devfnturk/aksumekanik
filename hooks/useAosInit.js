'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function useAosInit() {
    useEffect(() => {
        AOS.init();
    }, []);
}
