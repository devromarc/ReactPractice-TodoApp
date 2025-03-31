import { useState } from "react";
import LandingPage from "./components/LandingPage";
import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";

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
        projects: [],
      };
    });
  }

  function handleNewProject(newProject) {
    setProjectsState((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, newProject],
      selectedProjectID: undefined,
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

  let content;
  if (projectsState.selectedProjectID === undefined) {
    content = <LandingPage onAddProject={handleAddingNewProject} />;
  }
  if (projectsState.selectedProjectID === null) {
    content = (
      <NewProject onNewProject={handleNewProject} onCancel={handleCancelBtn} />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onAddProject={handleAddingNewProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
