import { useEffect, useRef, useState } from 'react';
import './App.css';
import "antd/dist/antd.css";
import "./index.css";
import { selectTodos } from './redux/store';
import { open } from "./redux/dialogue";
import { useDispatch, useSelector } from 'react-redux';
import TodoContainer from "./components/TodoContainer";
import NoItemsLabel from "./components/NoItemsLabel";
import TodoItem from './components/TodoItem';
import { PlusOutlined } from "@ant-design/icons";
import { Button, Typography } from 'antd';
import SaveDialogue from './components/SaveDialogue';

function App()
{
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const { Title } = Typography;
  const [itemID, setItemID] = useState(0);
  const [dialogueMode, setDialogueMode] = useState("add");
  const addBtnStyle = { backgroundColor: "var(--success-cr)", borderColor: "var(--success-cr)" };
  const dialogueRef = useRef<HTMLDivElement>(null!);

  // Functions---  
  const addBtnClicked = () =>
  {
    setDialogueMode("add");
    dispatch(open(""));
  };
  useEffect(() =>
  {
  });
  return (
    <div className="App">
      <Title id="app-title">Todo List</Title>
      <TodoContainer id="todo-container">
        {todos.map((todo) =>
        {
          return <TodoItem key={todo.id} itemId={todo.id} timestamp={todo.timestamp} text={todo.text} type={todo.type} onAction={(id: number, mode: string) =>
          {
            setDialogueMode(mode);
            setItemID(todo.id);
          }} />
        })}
      </TodoContainer>
      <Button onClick={addBtnClicked} id="add-item-btn" shape="circle" icon={<PlusOutlined />} type="primary" size="large" style={addBtnStyle}></Button>
      <SaveDialogue itemId={itemID} ref={dialogueRef} mode={dialogueMode} />
    </div>
  );
}

export default App;
