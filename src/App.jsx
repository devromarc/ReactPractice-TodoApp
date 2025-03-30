import { useState } from "react";
import LandingPage from "./components/LandingPage";
import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";

function App() {
  const [projectList, setProjectList] = useState([]);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    date: "",
  });

  // const isThereProjects = projectList.length <= 0;

  function handleSaveProject() {
    setProjectList((prevState) => [newProject, ...prevState]);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar projects={projectList} />
      {/* {isThereProjects ? (
        <LandingPage />
      ) : (
        <NewProject
          onSetNewProject={setNewProject}
          projectData={newProject}
          onSaveProj={handleSaveProject}
        />
      )} */}
      <NewProject
        onSetNewProject={setNewProject}
        projectData={newProject}
        onSaveProj={handleSaveProject}
      />
    </main>
  );
}

export default App;
