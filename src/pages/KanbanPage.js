import React, { useState } from 'react';
import {
  DndContext,
  useDraggable,
  useDroppable,
} from '@dnd-kit/core';
import { useTheme } from '../contexts/ThemeContext';

const KanbanPage = () => {
  const { theme, themeColors } = useTheme();
  const currentColors = themeColors[theme];

  const [columns, setColumns] = useState({
    todo: {
      id: 'todo',
      title: 'To Do',
      tasks: [
        { id: '1', content: 'Design new dashboard layout' },
        { id: '2', content: 'Create user profile pages' },
      ],
    },
    inProgress: {
      id: 'inProgress',
      title: 'In Progress',
      tasks: [
        { id: '3', content: 'Implement authentication system' },
      ],
    },
    done: {
      id: 'done',
      title: 'Done',
      tasks: [
        { id: '4', content: 'Setup project infrastructure' },
      ],
    },
  });

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.tasks);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, start.tasks[source.index]);

      const newColumn = {
        ...start,
        tasks: newTaskIds,
      };

      setColumns({
        ...columns,
        [newColumn.id]: newColumn,
      });
      return;
    }

    const startTaskIds = Array.from(start.tasks);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      tasks: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.tasks);
    finishTaskIds.splice(destination.index, 0, start.tasks[source.index]);
    const newFinish = {
      ...finish,
      tasks: finishTaskIds,
    };

    setColumns({
      ...columns,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish,
    });
  };

  return (
    <div className="p-4">
      <DndContext onDragEnd={onDragEnd}>
        <div className="flex space-x-4 overflow-x-auto">
          {Object.values(columns).map((column) => (
            <div
              key={column.id}
              className="flex-1 min-w-[300px]"
              style={{ backgroundColor: currentColors.card }}
            >
              <h3 className="p-2 font-semibold border-b" style={{ 
                borderColor: currentColors.primary,
                color: currentColors.text,
              }}>
                {column.title}
              </h3>
              <useDroppable droppableId={column.id}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="p-2 min-h-[200px]"
                  >
                    {column.tasks.map((task, index) => (
                      <useDraggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="p-3 mb-2 rounded shadow-sm"
                            style={{
                              backgroundColor: theme === 'dark' ? '#334155' : '#ffffff',
                              ...provided.draggableProps.style,
                            }}
                          >
                            {task.content}
                          </div>
                        )}
                      </useDraggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </useDroppable>
            </div>
          ))}
        </div>
      </DndContext>
    </div>
  );
};

export default KanbanPage;