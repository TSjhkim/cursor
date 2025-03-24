// useState는 상태를 만드는 함수임.
// 변할 수 있는 데이터를 만드는 함수임.
// 예를들어서 어떤 버튼을 클릭하면 점수가 계속 올라가는것과 같이 계속 변하는 '점수'는 상태임
// 점수같이 변할수있는 상태를 만들고 화면에 표현하기 위한 함수임
import React, {useState} from 'react';

function Todolist(props){
    // 아래는 변수 선언 자체가 배열이라는 의미가 아님
    // useState는 2가지를 반환하는데 각각을 todoList 와 setTodoList에 할당한다는 문법임
    const [todoList, setTodoList] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    // 추가 버튼을 클릭했을때 실행되는 함수
    // newTodo 에 값이 들어오면
    // setTodoList 함수가 발동된다. 기존 todolist에 newTodo가 합친 배열이 만들어진다.
    // 그리고 이게 todoList에 저장된다.
    // setNewTodo가 빈배열로 되어 newTodo가 빈값이 된다.
    // 즉, 버튼을 누르면 할밀이 추가되고 입력란이 초기화된다.
    const addNewTodo = () => {
        if (newTodo.trim() !== ''){
            setTodoList([...todoList,newTodo]);
            setNewTodo('');
        }
    };

    // 삭제 버튼을 누른 해당 번호가 index다
    // 이 index를 제외하고 todoList 항목을 나열하여 배열을 만든다
    // 이 배열을 setTodoList에 인자로 넣어 결론적으로 todoList를 업데이트함
    const deleteTodo = (index) => {
        const updateList = [
            ...todoList.slice(0, index),
            ...todoList.slice(index + 1)
        ];
        setTodoList(updateList);
    };

    return (
        <div>
            <h1 style={props.style}>To Do List</h1>
            {/* 인풋태그에 입력되는 값이 newTodo에 할당되고 이게 화면에 보여짐*/}
            <input
                type='text'
                value={newTodo}
                onChange={(e) => {
                    setNewTodo(e.target.value);
                }}
            />
            {/* 버튼 클릭 시 addNewTodo가 실행됨 */}
            <button onClick={addNewTodo}>추가</button>
            
            <ul>
                {/* todoList.map은 todoList의 배열을 값과 인덱스형식으로 새로운 배열로 생성해줌 */}
                {/* 예를들면 축구하기, index=0 과 같이 */} 
                {todoList.map((todo, index) => (
                    // 리스트에 index를 키로하여 React가 각 항목을 고유하게 인식하도록 하는거, 좋은 습관이라고함
                    <li key={index}>
                        {/* 버튼 클릭 시 deleteTodo 함수에 index가 적용됨 */}
                        {todo} <button onClick={() => deleteTodo(index)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todolist;