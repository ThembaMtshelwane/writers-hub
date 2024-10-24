import {
  // createBrowserRouter,
  // createRoutesFromElements,
  BrowserRouter,
  Route,
  // RouterProvider,
  Routes,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import LandingPage from "./pages/LandingPage";
import ProfileLayout from "./layout/ProfileLayout";
// import ProfilePage from "./pages/ProfilePage";
// import WorksPage from "./pages/WorksPage";
import PersonalInfoList from "./components/PersonalInfoList";
import CreatorCardGrid from "./components/CreatorCardGrid";
// import BasicInfoCard from "./components/BasicInfoCard"
// import CommentCard from "./components/CommentCard"
// import ProfileSideBar from "./components/ProfileSideBar"

export default function App() {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Routes>
  //       <Route path="/" element={<MainLayout />}>
  //         <Route index element={<MainLandingPage />} />
  //         <Route path="post" element={<MainLandingPage />} />
  //       </Route>

  //       <Route path="/profile" element={<ProfileLayout />}>
  //         <Route index element={<ProfilePage />} />
  //       </Route>
  //     </Routes>
  //   )
  // );

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<LandingPage />} />

          <Route path="/home" element={<MainLayout />}>
            <Route path="post" element={<LandingPage />} />
          </Route>

          <Route path="/profile" element={<ProfileLayout />}>
            <Route index element={<PersonalInfoList />} />
            <Route path="works" element={<CreatorCardGrid />} />
            {/* <Route path="works" element={<WorksPage />} /> */}
          </Route>

        </Routes>
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
    </>
  );
   <div>



   </div>
  )
}
