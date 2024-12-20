import NotFound from "./pages/NotFound";
import Writing from "./components/Writing";
import Preview from "./components/Preview";
import SinglePost from "./pages/SinglePost";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import Signup from "./pages/authPage/SignUp";
import Login from "./pages/authPage/Login";
import SplashPage from "./pages/SplashPage";
import LandingPage from "./pages/LandingPage";
import ReviewdPage from "./pages/ReviewdPage";
import ShareWork from "./components/ShareWork";
import ViewScore from "./components/ViewScore";
import Livefeed from "./pages/feedPage/Livefeed";
import ProfileLayout from "./layout/ProfileLayout";
import PreferencePage from "./pages/PreferencePage";
import CreatorCardGrid from "./components/CreatorCardGrid";
import PersonalInfoList from "./pages/profilePage/PersonalInfoList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import UpdateProfile from "./pages/profilePage/UpdateProfile";

const App = () => {
  const router = createBrowserRouter([
    { path: "*", element: <NotFound /> },
    { path: "/", element: <SplashPage /> },
    { path: "/index", element: <LandingPage /> },
    { path: "/pref", element: <PreferencePage /> },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
      ],
    },
    {
      path: "/feed",
      element: <MainLayout />,
      children: [{ index: true, element: <Livefeed /> }],
    },
    {
      path: "/post",
      element: <MainLayout />,
      children: [
        { index: true, element: <ShareWork /> },
        { path: "write", element: <Writing /> },
        { path: "preview", element: <Preview /> },
        { path: ":username/:id", element: <SinglePost /> },
      ],
    },
    {
      path: "/profile",
      element: <ProfileLayout />,
      children: [
        { path: "reviews", element: <ReviewdPage /> },
        { path: "view-score", element: <ViewScore /> },
        { path: "works", element: <CreatorCardGrid /> },
        { path: "info", element: <PersonalInfoList /> },
        { path: "update", element: <UpdateProfile /> },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
