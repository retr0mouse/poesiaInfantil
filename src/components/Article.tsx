import { useRef } from 'react';

interface Props {
    index: number;
    video: string;
    posterImage: string;
    heading: string;
    description: string;
}

export default function Article(props: Props) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {});    // we catch the error to avoid console errors
        }
    };

    const handlePause = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <article
            key={props.index}
            onMouseOver={() => handlePlay()}
            onMouseOut={() => handlePause()}>
            <video
                ref={videoRef}
                src={props.video}
                poster={props.posterImage}
                loop
                muted
            />
            <h2>{props.heading}</h2>
            <p>{props.description}</p>
            <a href=""><img src="/poesiaInfantil/greenButton.svg" alt="" /></a>
        </article>
    );
}
