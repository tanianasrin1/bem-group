"use client";
import React, { useRef, useState, useEffect } from "react";

export default function Template({ data }) {
  const [zoom, setZoom] = useState(100);
  const previewRef = useRef(null);

  const handleWheel = (e) => {
    e.preventDefault();

    const delta = e.deltaY || e.detail || e.wheelDelta;

    if (delta < 0) {
      setZoom((zoom) => Math.min(zoom + 10, 200));
    } else {
      setZoom((zoom) => Math.max(zoom - 10, 50));
    }

    const { clientWidth, clientHeight, scrollLeft, scrollTop } =
      previewRef.current;
    const scrollX = (e.clientX - scrollLeft) / clientWidth;
    const scrollY = (e.clientY - scrollTop) / clientHeight;
    previewRef.current.scrollLeft =
      scrollX * (previewRef.current.scrollWidth - clientWidth) +
      (scrollLeft - previewRef.current.clientWidth / 2);
    previewRef.current.scrollTop =
      scrollY * (previewRef.current.scrollHeight - clientHeight) +
      (scrollTop - previewRef.current.clientHeight / 2);
  };

  useEffect(() => {
    const preventScroll = (e) => {
      if (previewRef.current && previewRef.current.contains(e.target)) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", preventScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", preventScroll);
    };
  }, []);

  return (
    <div className="container-sk lg:py-20 md:py-16 py-5">
      <h2 className="text-center font-semibold text-black mb-10 text-3xl">
        {data?.name}
      </h2>

      <div
        className="border-2 border-blue-400/30 rounded-md bg-white shadow-xl mx-auto w-[max-content] h-[max-content] overflow-auto"
        style={{
          transformOrigin: "center center",
          transform: `scale(${zoom / 100})`,
        }}
        ref={previewRef}
        onWheel={handleWheel}
        dangerouslySetInnerHTML={{ __html: data?.code }}
      />
    </div>
  );
}
