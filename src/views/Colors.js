import { Link, useParams } from "react-router-dom";


const colors = [
    {
        id: 1,
        color: "red",
    },
    {
        id: 2,
        color: "green",
    },
    {
        id: 3,
        color: "yellow",
    },
]
export default function Colors() {
    
    return (
        <div className="Colors">
            <h3>Pick a color</h3>
            <ul>
                <li className="red">Red</li>
                <li className="green">Green</li>
                <li className="yellow">Yellow</li>
                {colors.map(color => (
                <ul className={color.name} key={color.id}>
                    <li className={color.name}>{color.name}</li>
                    <Link to={`/colors/${color.color}`}>Show color</Link>
                </ul>
            ))}
            </ul>

        </div>

    );
}