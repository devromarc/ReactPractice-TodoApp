import { useState } from "react";
import LandingPage from "./components/LandingPage";
import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: [],
  });

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

  let content;

  if (projectsState.selectedProjectID === undefined) {
    content = <LandingPage onAddProject={handleAddingNewProject} />;
  } else if (projectsState.selectedProjectID === null) {
    content = (
      <NewProject onNewProject={handleNewProject} onCancel={handleCancelBtn} />
    );
  } else if (selectedProject)
    content = <SelectedProject project={selectedProject} />;

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onAddProject={handleAddingNewProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
