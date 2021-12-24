import "./styles/TodoItem.css";
import { Button } from "antd";
import { remove, edit } from '../redux/todos';
import { EditFilled, DeleteFilled, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { open } from "../redux/dialogue";
import "animate.css";

export default function TodoItem(props: any)
{
    const actionButtonType: any = "circle";
    const actionButtonShape: any = "primary";
    const dispatch = useDispatch();

    const callActionTrigger = (actionType: string): void =>
    {
        if (props.onAction) props.onAction(props.itemId, actionType);
    };
    const markClicked = (): void =>
    {
        dispatch(edit({
            id: props.itemId,
            text: props.text,
            type: props.type === "marked" ? "normal" : "marked",
        }));
        callActionTrigger("mark");
    };
    const editClicked = (): void =>
    {
        dispatch(open(props.text));
        callActionTrigger("edit");
    };
    const removeClicked = (): void =>
    {
        dispatch(remove(props.itemId))
        callActionTrigger("remove");
    };
    const closeClicked = (): void =>
    {
        dispatch(edit({
            id: props.itemId,
            text: props.text,
            type: props.type === "closed" ? "normal" : "closed",
        }));
        callActionTrigger("close");
    };

    return (
        <div className={`TodoItem todo-item-${!props.type ? "normal" : props.type} animate__animated animate__bounceIn`}>
            <p className="todo-item-details">
                <span className="todo-item-timestamp">{props.timestamp}</span>
                <label className="todo-item-text">{props.text}</label>
            </p>
            <div className="todo-item-actions">
                <Button className="todo-item-delete-btn" shape={actionButtonShape} icon={<DeleteFilled />} type={actionButtonType} onClick={removeClicked}></Button>
                {props.type === "closed" ? null : <Button className="todo-item-edit-btn" shape={actionButtonShape} icon={<EditFilled />} type={actionButtonType} onClick={editClicked}></Button>}
                <Button className="todo-item-close-btn" shape={actionButtonShape} icon={<CloseOutlined />} type={actionButtonType} onClick={closeClicked}></Button>
                {props.type === "closed" ? null : <Button className="todo-item-mark-btn" shape={actionButtonShape} icon={<CheckOutlined />} type={actionButtonType} onClick={markClicked}></Button>}
            </div>
        </div>
    )
}