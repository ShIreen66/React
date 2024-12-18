import React, { useState } from "react";
import Adddtask from "./Components/Createtask";
import ShowTasks from "./Components/ShowTasks";
import Search from "./Components/Search";

const App = () => {
  const [tasks, settasks] = useState( JSON.parse(localStorage.getItem("tasks"))||[]);

  return (
    <div className="h-screen w-screen p-10 bg-slate-400 text-white ">
      <div className="main flex w-[100%] h-[100%] items-start bg-slate-300 rounded">
        <div className="left w-[80%] h-[100%] m-auto flex-col items-center justify-center gap-2 rounded ">
          {<Adddtask settasks={settasks} tasks={tasks} />}
          {<ShowTasks tasks={tasks} settasks={settasks} />}
        </div>
        {<Search tasks={tasks} />}
      </div>
    </div>
  );
};

export default App;
