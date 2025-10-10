import { useEffect, useRef } from "react";

export default function HtmlContentIsolated({ html }) {
    const containerRef = useRef(null);
    const shadowRootRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            if (!shadowRootRef.current) {
                shadowRootRef.current = containerRef.current.attachShadow({ mode: "open" });
            }

            shadowRootRef.current.innerHTML = html || "";
        }
    }, [html]);

    return <div ref={containerRef} />;
}
