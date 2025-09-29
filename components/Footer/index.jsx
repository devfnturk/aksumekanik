import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative pb-5 bg-white overflow-x-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2">
                    <div
                        className="col-span-2 lg:col-span-1 text-center lg:text-left"
                        data-aos="fade-right"
                        data-aos-duration="2000"
                        data-aos-offset="-200"
                    >
                        <img
                            src="/images/logo.png"
                            className="mx-auto lg:mx-0 mt-5"
                            alt="Footer Logo"
                        />
                        <div className="text-sm text-gray-600 mt-4 flex flex-wrap justify-center lg:justify-start gap-2">
                            <a href="/bilgilendirme/kvkk-aydinlatma-metni.html" className="hover:underline">
                                KVKK Aydınlatma Metni
                            </a>
                            <span>|</span>
                            <a
                                href="https://e-sirket.mkk.com.tr/esir/Dashboard.jsp#/sirketbilgileri/20930"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                Bilgi Toplumu Hizmetleri
                            </a>
                            <span>|</span>
                            <a href="/bilgilendirme/ticari-ileti-acik-riza-metni.html" className="hover:underline">
                                Ticari İleti Açık Rıza Metni
                            </a>
                            <span>|</span>
                            <a href="/bilgilendirme/ticari-ileti-aydinlatma-metni.html" className="hover:underline">
                                Ticari İleti Aydınlatma Metni
                            </a>
                            <span>|</span>
                            <a href="/bilgilendirme/kvkk-ziyaretci-acik-riza-metni.html" className="hover:underline">
                                KVKK Ziyaretçi Açık Rıza Metni
                            </a>
                        </div>
                        <div className="text-sm text-gray-500 mt-2">
                            © 2025 Aksu Mekanik
                        </div>
                    </div>
                    <div
                        className="col-span-2 lg:col-span-1 mt-10 lg:mt-0 text-center lg:text-right"
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        data-aos-offset="-200"
                    >
                        <div className="flex justify-center lg:justify-end space-x-4 mt-4">
                            <a
                                href="https://www.linkedin.com/in/zafer-aksu-8b3443262/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-primary transition-transform duration-1000 hover:rotate-[360deg] hover:scale-125"
                            >
                                <Linkedin />
                            </a>
                            <a
                                href="https://www.instagram.com/aksu.mekanik"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-primary transition-transform duration-1000 hover:rotate-[360deg] hover:scale-125"
                            >
                                <Instagram />
                            </a>
                            <a
                                href="https://www.facebook.com/people/Aksu-Mekanik/pfbid02Gee8FHkYfxsNZqKqvGPjV4nRjy2bZMjgKGXAKAMbX8ANvegduTaRUeBTf7mCaWm3l/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-primary transition-transform duration-1000 hover:rotate-[360deg] hover:scale-125"
                            >
                                <Facebook />
                            </a>
                        </div>
                        <div className="mt-5 pt-5 text-sm text-gray-500">
                            <span>powered by </span>
                            <a href="https://www.vayes.com.tr/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                @fn(HD)
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
