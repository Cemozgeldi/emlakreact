import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Sss from "./pages/Sss";
import Contact, { contactAction } from "./pages/Contact";
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import KonutLayout from "./layouts/KonutLayout";
import Konutlar, { konutlarLoader } from "./pages/konutlar/Konutlar";
import KonutDetay, { konutDetayLoader } from "./pages/konutlar/KonutDetay";
import KonutHata from "./pages/konutlar/KonutHata";
import Fail from "./pages/Fail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="sss" element={<Sss />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>
      <Route path="*" element={<Fail />} />
      <Route path="konutlar" element={<KonutLayout />}>
        <Route index element={<Konutlar />} loader={konutlarLoader} />
        <Route
          path=":id"
          element={<KonutDetay />}
          loader={konutDetayLoader}
          errorElement={<KonutHata />}
        />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
