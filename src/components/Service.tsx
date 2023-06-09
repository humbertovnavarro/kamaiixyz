import Image from "next/image";
import React from "react";

export interface ServiceProps {
  title: string;
  description: string;
  link: string;
  projectLink?: string;
  imageSrc: string;
  height?: number;
  width?: number;
  gitHubLink?: string;
}

const Service: React.FC<ServiceProps> = ({
  title,
  description,
  link,
  imageSrc,
  projectLink,
  gitHubLink,
}) => {
  return (
    <div className="rounded-md shadow-lg bg-black/50 p-5 flex flex-col justify-between">
        <a
            href={link}
            target="_blank"
        >
            <Image src={imageSrc} alt={title} className="my-2" width={64} height={64} />
        </a>
        <div className="font-bold text-xl mb-2 text-white">{title}</div>
        <p className="text-white text-base">{description}</p>
        <div className="space-x-2 mt-5">
            {gitHubLink && (
            <a
                href={gitHubLink}
                target="_blank"
                className="rounded-full text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 px-6 py-2 mt-4 transition"
            >
                GitHub
            </a>
            )}
            
            {
                projectLink && (
                    <a
                    href={projectLink}
                    target="_blank"
                    className="rounded-full text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 px-6 py-2 mt-4 transition"
                    >
                    Learn More
                    </a>
                )
            }
        </div>
    </div>
  );
};

export default Service;