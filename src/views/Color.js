import { useParams } from "react-router-dom";
export default function Color () {
    const params = useParams();
    console.log(params)
    return (
        <div className={params.name}>
            <h2>Color {params.name}</h2>
        </div>
    )
}