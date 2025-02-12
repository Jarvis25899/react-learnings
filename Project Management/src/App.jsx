import Sidebar from './components/Common/Sidebar';
import NewProject from './components/Projects/NewProject';
import NoProjectsSelected from './components/Projects/NoProjectsSelected';
import { useState } from 'react';
import SelectedProject from './components/Projects/SelectedProject';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const addProject = () =>
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));

  const cancelProject = () =>
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));

  const saveProject = (project) =>
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, project],
    }));

  const viewProject = (projectId) =>
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: projectId,
    }));

  const deleteProject = (projectId) =>
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter((p) => p.id !== projectId),
    }));

  const addTask = (task) =>
    setProjectsState((prevState) => {
      const newTask = {
        id: Math.random(),
        projectId: projectsState.selectedProjectId,
        value: task,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });

  const deleteTask = (taskId) =>
    setProjectsState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));

  let content;
  const selectedProject = projectsState.projects?.find(
    (p) => p.id === projectsState.selectedProjectId
  );

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onCancel={cancelProject} saveProject={saveProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectsSelected addProject={addProject} />;
  } else {
    const selectedProjectTasks = projectsState.tasks.filter(
      (task) => task.projectId === projectsState.selectedProjectId
    );
    content = (
      <SelectedProject
        project={selectedProject}
        deleteProject={deleteProject}
        addTask={addTask}
        deleteTask={deleteTask}
        tasks={selectedProjectTasks}
      />
    );
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          addProject={addProject}
          projects={projectsState.projects}
          viewProject={viewProject}
          selectedProjectId={selectedProject?.id}
        />
        {content}
      </main>
    </>
  );
}

export default App;
