import { Link, useParams } from "react-router-dom";

function Error404() {
    const params = useParams();
    // const searchTerm = params["*"];
    console.log(params)

    return (
        <>
            <h1>Oh... 404!</h1>
            <h2>Du hast nach {params.name} gesucht.</h2>
            <Link to="/">Zurück zur Startseite</Link>
        </>
    );
}

export default Error404;
