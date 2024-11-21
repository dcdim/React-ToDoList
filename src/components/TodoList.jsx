import React from 'react';
import cn from 'classnames';
import '../todoList.css';

export default class TodoList extends React.Component {
    renderClasses(task) {
        return cn('todoList-item', {done: task.status })
    }
    render() {
        const { tasks } = this.props;
        return (<div className='todoList'>
            {tasks.map((task) => (
                <div className={this.renderClasses(task)} key={task.id}>
                    <input type='checkbox' className='todoList-item-status' checked={task.status} onChange={() => {this.props.changeStatus(task.id)}} />
                    <div className='todoList-item-title'>{task.title}</div>
                    <div className='todoList-item-description'>{task.description}</div>
                    <div className='todoList-item-date'>{task.date}</div>
                    {task.status ? (
                        <button className='btn' onClick={() => {
                            this.props.deleteTask(task.id);
                        }}
                    >Delete</button>
                    ) : null}
                </div>
            ))}
        </div>);
    }
}