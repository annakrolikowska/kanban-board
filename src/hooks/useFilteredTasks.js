import { useMemo } from "react";

const useFilteredTasks = (tasks, id, filters) => {
  const filteredTasks = useMemo(() => {
    return tasks.filter(
      (task) =>
        task.columnId === id &&
        (filters.userFilter === "" || task.userId === filters.userFilter) &&
        (filters.priorityFilter === "" ||
          task.priority === filters.priorityFilter)
    );
  }, [tasks, id, filters]);

  return filteredTasks;
};

export default useFilteredTasks;
