import pako from 'pako';

export function decodeImage(imageData) {
    if (!imageData || typeof imageData !== 'string' || imageData.length === 0) {
        return '';
    }
    try {
        const binary = atob(imageData);
        const len = binary.length;
        const bytes = new Array(len);

        // Uint8Array yerine normal array kullanarak dönüştürme yapıyoruz
        for (let i = 0; i < len; i++) {
            bytes[i] = binary.charCodeAt(i);
        }

        const decompressed = pako.inflate(new Uint8Array(bytes));
        let result = '';
        const chunkSize = 0x8000; // 32KB
        for (let i = 0; i < decompressed.length; i += chunkSize) {
            result += String.fromCharCode.apply(
                null,
                Array.from(decompressed.subarray(i, i + chunkSize))
            );
        }

        const base64 = btoa(result);
        return `data:image/jpeg;base64,${base64}`;
    } catch (err) {
        console.error('Decompression or decoding error:', err);
        return '';
    }
}

export function slugify(text) {
    return text
        .toLowerCase()
        .replace(/ç/g, 'c')
        .replace(/ğ/g, 'g')
        .replace(/ı/g, 'i')
        .replace(/ö/g, 'o')
        .replace(/ş/g, 's')
        .replace(/ü/g, 'u')
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}