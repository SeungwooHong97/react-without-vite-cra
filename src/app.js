
import { add } from "./add.js";
import { minus } from "./minus.js";
import { multiple } from "./multiple.js";

const App = () => {

    const addValue = add(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100));
    const minusValue = minus(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100));
    const multipleValue = multiple(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100));
    console.log(process.env.NODE_ENV);
    return (
        <>
            <h1>Hello World! This is test Process</h1>
            <h1>This is test</h1>
            <h2>{addValue}</h2>
            <h2>{minusValue}</h2>
            <h2>{multipleValue}</h2>
            <h1>This is immidiatly success?</h1>

        </>
    )

};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
