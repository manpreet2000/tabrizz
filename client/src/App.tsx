import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="bg-primary font-sans overflow min-h-screen overflow-auto cursor-default">
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
