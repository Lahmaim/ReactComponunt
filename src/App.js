import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./App.css";
import Description from "./component/Description";
import Image from "./component/Image";
import Name from "./component/Name";
import Prix from "./component/Prix";

import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
function App() {
    return (
        <div className="App">
            <Card style={{ width: "20rem" }}>
                <Image />
                <Card.Body>
                    <Name />
                    <Prix />

                    <Description />

                    <Button variant="primary">Buy</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default App;
