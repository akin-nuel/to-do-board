import Input from "./Component/Input";
import Board from "./Component/Board";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([])

  return (
    <div className="px-12">
      <div className='flex flex-col items-center justify-center py-4 gap-4'>
        <h2 className="text-xl fontt-semibold">To do Board</h2>    
        <Input className="flex flex-row items-center py-2" taskList={taskList} setTaskList={setTaskList} />

        
      </div>
      <div className="flex flex-col gap-4 grid grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12">
        {taskList.map(((task, index) => 
          <Board
          key={index}
          task={task}
          index = {index}
          setTaskList ={setTaskList}
          taskList = {taskList}
          />
        ))  }
    </div> 
  </div>

  );
}

export default App;
