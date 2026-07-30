import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateTicket from "./pages/CreateTicket";
import EditTicket from "./pages/EditTicket";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="createTicket" element={<CreateTicket />} />
          <Route path="editTicket" element={<EditTicket />} />
         </Route>
         <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;