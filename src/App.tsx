import axios from "axios";
import "./App.css";
import StudentsList from "./components/StudentsList";
import { useEffect } from "react";

const logUserActivity = async (event: string, details: object) => {
  try {
    await axios.post("http://localhost:8000/api/log-activity", {
      user: "test_user_123", // Replace with actual user info from auth
      event,
      details,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error logging user activity:", error);
  }
};

function App() {
  useEffect(() => {
    logUserActivity("PAGE_VIEW", { page: window.location.pathname });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Hello Pramod
        <StudentsList />
        
        <button
          onClick={() =>
            logUserActivity("BUTTON_CLICK", { button: "Test Button" })
          }
        >
          Click Me
        </button>
      </header>
    </div>
  );
}

export default App;
