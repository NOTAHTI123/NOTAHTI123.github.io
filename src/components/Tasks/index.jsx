import styles from './tasks.module.css';
import Task from '../Task/index';

const Tasks = (props) => {
    const tasksQuantity = props.tasks_arr.length;
    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Created tasks</p>
                    <span>{tasksQuantity}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Completed tasks</p>
                    <span>0 of {tasksQuantity}</span>
                </div>
            </header>

                <div className={styles.list}>
                    {
                        props.tasks_arr.map(task => (
                            <Task remove_task={props.remove_task} id={task.key} key={task.key} title={task.title} checked={task.checked} />
                        ))
                    }
                </div>
        </section>
    )
}

export default Tasks;