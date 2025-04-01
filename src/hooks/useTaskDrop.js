import { useState } from "react";

const useTaskDrop = (moveTask, tasks, id, limit) => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleDrop = (event) => {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("taskId");
    const tasksInColumn = tasks.filter((task) => task.columnId === id);

    if (tasksInColumn.length >= limit) {
      setIsConfirmationOpen(true);
      return;
    }

    moveTask(taskId, id);
  };

  const handleCancel = () => {
    setIsConfirmationOpen(false);
  };

  return {
    isConfirmationOpen,
    handleDrop,
    handleCancel,
  };
};

export default useTaskDrop;
