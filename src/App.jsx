import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Private from "./pages/Private.jsx";
import { useSupabaseAuth } from "./integrations/supabase/auth.jsx";

function App() {
  const { session } = useSupabaseAuth();

  const PrivateRoute = ({ children }) => {
    return session ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/private" element={<PrivateRoute><Private /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;