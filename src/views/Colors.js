import { Link } from "react-router-dom";


const colors = [
    {
        id: 1,
        name: "red",
    },
    {
        id: 2,
        name: "green",
    },
    {
        id: 3,
        name: "yellow",
    },
]
export default function Colors() {
    
    return (
        <div className="Colors">
            <h3>Pick a color...</h3>
            <ul>
                {colors.map(color => (
                <div className={color.name} key={color.id}>
                    <li><Link to={`/colors/${color.name}`}>{color.name}</Link></li>
                    
                </div>
            ))}
            </ul>
            <span>...or look for a  </span><button>newOne</button>

        </div>

    );
}