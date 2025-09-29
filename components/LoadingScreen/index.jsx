'use client';

export default function LoadingScreen() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(255,255,255)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <img src="/images/loadingAnimation.gif" alt="Yükleniyor..." style={{ width: 120, height: 120, marginBottom: 24 }} />
    </div>
  );
} 
