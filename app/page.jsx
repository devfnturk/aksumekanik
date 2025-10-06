import CorporateText from "@/components/CorporateText";
import OurServices from "@/components/OurServices";
import HomePageSlider from "@/components/Sliders/HomePageSlider";
import ReferancesSlider from "@/components/Sliders/ReferancesSlider";
import UsWithNumbers from "@/components/UsWithNumbers";

export default function Home() {
    return (
        <>
            <main className="overflow-hidden">
                {/* Home PageSlider */}
                <section className="slider relative">
                    <HomePageSlider />
                    <UsWithNumbers />
                </section>
                <CorporateText />
                <ReferancesSlider />
                <OurServices />
            </main>
            {/* <main style={{
                minHeight: '100vh',
                background: 'var(--background)',
                color: 'var(--aksu-primary)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '2rem'
            }}>
                <div style={{
                    background: 'var(--aksu-main)',
                    borderRadius: '24px',
                    boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)',
                    padding: '3rem 2rem',
                    maxWidth: '420px',
                    border: '2px solid var(--aksu-green)'
                }}>
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '1.5rem' }}>
                        <circle cx="32" cy="32" r="32" fill="var(--aksu-green)" fillOpacity="0.15" />
                        <path d="M32 18V34" stroke="var(--aksu-green)" strokeWidth="4" strokeLinecap="round" />
                        <circle cx="32" cy="44" r="3" fill="var(--aksu-green)" />
                    </svg>
                    <h1 style={{ color: 'var(--aksu-green)', fontWeight: 700, fontSize: '2rem', marginBottom: '1rem' }}>Bakımdayız</h1>
                    <p style={{ color: 'var(--aksu-primary)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Web sitemiz şu anda kısa bir bakımda.<br />En kısa sürede tekrar hizmetinizde olacağız.</p>
                    <div style={{ color: 'var(--aksu-blue)', fontWeight: 500, fontSize: '1rem' }}>Anlayışınız için teşekkürler.</div>
                </div>
            </main> */}
        </>
    );
}
