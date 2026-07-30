import { createBrowserRouter, redirect } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import CreateTicket from "../pages/CreateTicket";
import EditTicket from "../pages/EditTicket";
import NotFound from "../pages/NotFound";
import {createTicket} from "../services/api";


async function createTicketAction({ request }) {
  const formData = await request.formData();

  const ticket = {
    title: formData.get("title"),
    description: formData.get("description"),
    priority: formData.get("priority"),
    status: formData.get("status"),
  };

  await createTicket(ticket);

  return redirect("/");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "createTicket",
        element: <CreateTicket />,
        action: createTicketAction,
      },
      {
        path: "editTicket",
        element: <EditTicket />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
