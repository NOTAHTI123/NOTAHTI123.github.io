// import { useState } from 'react';
import styles from './task.module.css';
import { TbTrash } from 'react-icons/tb';



const Task = (props) => {

    return (
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={ e => {

            }}>
                <div />
            </button>

            <p>{props.title}</p>
            <p>Update v1.0</p>
            <button className={styles.deleteButton} onClick={
                e => {
                    props.remove_task(props.id);
                }
            }>
                <TbTrash size={20} />
            </button>
        </div>
        
    )
}

export default Task;