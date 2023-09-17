import React, { useState } from 'react';
import todologo from './assets/Logo.svg';
import Header from './components/Header/index';
import Tasks from './components/Tasks';
import Task from './components/Task/index';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { useParams } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const App = () => {
    const [completed, setCompleted] = useState("");
    const [title, setTitle] = useState("");
    const [tasks, setTasks] = useState([]); // will hold the tasks list

    function add_to_tasks_list(title) {
        setCompleted(false);
        setTitle(title);
        setTasks([...tasks, {
            title: title,
            checked: completed,
            key: Math.random()
        }]);
    }

    function remove_task(key_passed) {
        setTasks(tasks.filter(
            curr_task => (
                (curr_task.key != +key_passed)
            )
        ));
    }

    return (
        <div> 
            <Header handle_create_task={add_to_tasks_list} />
            <Tasks tasks_arr={tasks} remove_task={remove_task} />
            <h4>Update v1.0</h4>
        </div>
    );
};
export default App;