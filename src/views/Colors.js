const colors = [
    {
        id: 1,
        color: "red",
    },
    {
        id: 2,
        color: "blue",
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
                <li className="blue">Blue</li>
                <li className="yellow">Yellow</li>
            </ul>

        </div>

    );
}