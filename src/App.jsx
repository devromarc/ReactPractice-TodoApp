import { useState } from "react";
import LandingPage from "./components/LandingPage";
import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: [],
  });

  // const isThereProjects = projectList.length <= 0;
  function handleAddingNewProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null,
        projects: [],
      };
    });
  }

  let content;
  if (projectsState.selectedProjectID === undefined) {
    content = <LandingPage onAddProject={handleAddingNewProject} />;
  }
  if (projectsState.selectedProjectID === null) {
    content = <NewProject />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onAddProject={handleAddingNewProject} />

      {content}
    </main>
  );
}

export default App;
