import NoItemsLabel from "./NoItemsLabel";
import "./styles/TodoContainer.css";


export default function TodoContainer(props: any)
{
    return (
        <div id={props.id} className="TodoContainer">
            {props.children.length !== 0 ? props.children : <NoItemsLabel />}
        </div>
    )
}