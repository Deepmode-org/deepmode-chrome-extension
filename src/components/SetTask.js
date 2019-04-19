import React from "react";
import { Link } from "react-router-dom";
import IoIosArrowThinRight from "react-icons/lib/io/ios-arrow-thin-right"

class SetTask extends React.Component {
  constructor(props) {
    super(props);
    this.taskInputRef = React.createRef();
  }

  render() {
    const { previousTasks, currentTask, setTask } = this.props;
    previousTasks ?
      previousTasks.map((task, i) =>
        <li key={i} className="previous-task" onClick="">
          <span>{task}</span>
          <IoIosArrowThinRight size={30} />
        </li>
      ) : null;
    return (
      <div className="SetTask">
        <div className="new-task">
          <h6>What are you working on?</h6>
          <input
            ref={this.taskInputRef}
            defaultValue={currentTask}
            className="form-input"
            type="text"
            name="task"
            placeholder="Brief task description" />
          <button className="btn" onClick={(e) => setTask(this.taskInputRef.current.value)}>
            Set Task
          </button>
        </div>
        {/*<div className="divider"></div>
        <div className="previous-tasks">
          <h6>Return to a previous task</h6>
          <ul>
            {previousTasks}
          </ul>
        </div>*/}
      </div>
    );
  }
}

export default SetTask;
