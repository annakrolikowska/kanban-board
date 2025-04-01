import { useState } from "react";

const useTaskDeletion = (deleteTask) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [taskToDeleteId, setTaskToDeleteId] = useState(null);

  const handleOpenDeleteDialog = (id) => {
    setIsDeleteDialogOpen(true);
    setTaskToDeleteId(id);
  };

  const handleCloseDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
    setTaskToDeleteId(null);
  };

  const handleDeleteTask = (id) => {
    deleteTask(id);
    setIsDeleteDialogOpen(false);
    setTaskToDeleteId(null);
  };

  return {
    isDeleteDialogOpen,
    taskToDeleteId,
    handleOpenDeleteDialog,
    handleCloseDeleteDialog,
    handleDeleteTask,
  };
};

export default useTaskDeletion;
