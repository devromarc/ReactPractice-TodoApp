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
    }));
  }

  let content;
  if (projectsState.selectedProjectID === undefined) {
    content = <LandingPage onAddProject={handleAddingNewProject} />;
  }
  if (projectsState.selectedProjectID === null) {
    content = <NewProject onNewProject={handleNewProject} />;
  }
  console.log(projectsState.projects);
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onAddProject={handleAddingNewProject} />
      {content}
    </main>
  );
}

export default App;
