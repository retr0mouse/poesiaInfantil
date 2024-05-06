import { useLoaderData } from "react-router-dom";

export async function loader({ params }: { params: { screenSize: string } }): Promise<string> {
    switch (params.screenSize) {
        case "1920":
            return "/poesiaInfantil/diff-1920.png";
        case "1440":
            return "/poesiaInfantil/diff-1440.jpg";
        case "1200":
            return "/poesiaInfantil/diff-1200.jpg";
        case "1024":
            return "/poesiaInfantil/diff-1024.jpg";
        default:
            return "";
    }
}

export default function Diff() {
    const diffImage = useLoaderData() as string;

    return (
        <div className="diff_div">
            {diffImage ? <img src={`${diffImage}`} className="diff_img" alt="" /> : "Incorrect size"}
        </div>
    );
}