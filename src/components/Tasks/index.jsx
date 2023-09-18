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
                    <span>{props.count} of {tasksQuantity}</span>
                </div>
            </header>

                <div className={styles.list}>
                    {
                        props.tasks_arr.map(task => (
                            <Task check_toggle={props.check_toggle} main_task={task} set_status={props.set_status} remove_task={props.remove_task} key={task.key} />
                        ))
                    }
                </div>
        </section>
    )
}

export default Tasks;