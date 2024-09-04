"use client";

import { useState } from 'react';
import { CarouselProps } from '@/lib/definitions';
import Image from 'next/image';

function ControlledCarousel({ images }: CarouselProps) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="relative  overflow-hidden pt-20">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
                {images.map((image, i) => (
                    <picture key={i} className=" flex-shrink-0">
                        <Image src={image} alt={`Slide ${i + 1}`} width={600} height={100} className=" object-cover" />
                    </picture>
                ))}
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2  flex justify-between">
                <button
                    onClick={() => handleSelect(index === 0 ? images.length - 1 : index - 1)}
                    className=" p-2 rounded-full shadow-lg"
                >
                    &#9664;
                </button>
                <button
                    onClick={() => handleSelect((index + 1) % images.length)}
                    className=" p-2 rounded-full shadow-lg"
                >
                    &#9654;
                </button>
            </div>
        </div>
    );
}

export default ControlledCarousel;
