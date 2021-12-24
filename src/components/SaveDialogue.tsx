import { forwardRef, useEffect, useState } from 'react';
import './styles/SaveDialogue.css';
import { add, edit } from '../redux/todos';
import "antd/dist/antd.css";
import { useDispatch, useSelector } from 'react-redux';
import { close, setText } from "../redux/dialogue";
import { Space, Typography } from 'antd';
import { selectProps } from '../redux/store';

type SaveDialogueProps = {
    itemId: number,
    mode: string,
};
const SaveDialogue = forwardRef<HTMLDivElement, SaveDialogueProps>(({ itemId, mode }, ref) =>
{    
    const { Title, Paragraph } = Typography;
    const [open, setOpen] = useState(false);
    const props_ = useSelector(selectProps);
    const dispatch = useDispatch();

    // Functions ---
    const inputValueChanged = (e: any): void =>
    {
        let target = e.currentTarget;
        let value = target.value;
        dispatch(setText(value));
    };

    const action1Clicked = (): void =>
    {
        if (mode === "edit")
            dispatch(edit({
                id: itemId,
                text: props_.text,
                type: "normal",
            }));
        else
            dispatch(add({
                timestamp: new Date().toUTCString(),
                text: props_.text,
                type: "normal",
            }));
        dispatch(close());
    };

    useEffect(() =>
    {
        dispatch(setText(""));
    }, []);

    return (
        <div ref={ref} className={`SaveDialogue save-dialogue-${props_.open ? "open" : "close"}`}>
            <div className="save-dialogue-bg-box" onClick={() => dispatch(close())}></div>
            <Space className="save-dialogue-box" size={30}>
                <input className="save-dialogue-in" type="text" onChange={inputValueChanged} placeholder="Type any task..." value={props_.text} />
                <Space className="save-dialogue-actions">
                    <button className="save-dialogue-action-2" onClick={() => { dispatch(close()) }}> Cancel</button>
                    <button className="save-dialogue-action-1" onClick={action1Clicked}>Done</button>
                </Space>
            </Space>
        </div >
    );
});

export default SaveDialogue;
