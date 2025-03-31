import { useState } from "react";
import LandingPage from "./components/LandingPage";
import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    const taskId = Math.random();
    const newTask = {
      text: text,
      id: taskId,
      projectId: projectsState.selectedProjectID,
    };
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  const selectedTask = projectsState.tasks.filter(
    (task) => task.projectId === projectsState.selectedProjectID
  );

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      const updatedTasks = prevState.tasks.filter((task) => task.id !== id);

      return {
        ...prevState,
        tasks: updatedTasks,
      };
    });
  }

  function handleAddingNewProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    });
  }

  function handleNewProject(newProject) {
    setProjectsState((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, newProject],
      selectedProjectID: newProject.id,
    }));
  }

  function handleCancelBtn() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: id,
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    // find the project id the matches the projectid selected using handle selectProject
    (proj) => proj.id === projectsState.selectedProjectID
  );

  // get the id of the selected project inside the selectedproject component and use it to make a new array that has been filtered using the id
  function handleDeleteProject() {
    setProjectsState((prevState) => {
      const updatedProjectList = prevState.projects.filter(
        (proj) => proj.id !== prevState.selectedProjectID
      );
      return {
        ...prevState,
        projects: updatedProjectList,
        selectedProjectID: undefined,
      };
    });
  }

  let content;

  if (projectsState.selectedProjectID === undefined) {
    content = <LandingPage onAddProject={handleAddingNewProject} />;
  } else if (projectsState.selectedProjectID === null) {
    content = (
      <NewProject onNewProject={handleNewProject} onCancel={handleCancelBtn} />
    );
  } else if (selectedProject)
    content = (
      <SelectedProject
        project={selectedProject}
        onDeleteProject={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={selectedTask}
      />
    );

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onAddProject={handleAddingNewProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectID={projectsState.selectedProjectID}
      />
      {content}
    </main>
  );
}

export default App;
