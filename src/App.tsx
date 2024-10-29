import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import LandingPage from "./pages/LandingPage";
import ProfileLayout from "./layout/ProfileLayout";
import PersonalInfoList from "./pages/profilePage/PersonalInfoList";
import CreatorCardGrid from "./components/CreatorCardGrid";
import NotFound from "./pages/NotFound";
import Livefeed from "./pages/feedPage/Livefeed";
import SinglePost from "./pages/SinglePost";
import AuthLayout from "./layout/AuthLayout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import SplashPage from "./pages/SplashPage";
import PreferencePage from "./pages/PreferencePage";
import ShareWork from "./components/ShareWork";
import ViewScore from "./components/ViewScore";

import Writing from "./components/Writing";
import Preview from "./components/Preview";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
          </Route>

          <Route path="/" element={<SplashPage />} />
          <Route path="/index" element={<LandingPage />} />

          <Route path="/pref" element={<PreferencePage />} />
          <Route path="/feed" element={<MainLayout />}>
            <Route index element={<Livefeed />} />
          </Route>

          <Route path="/post" element={<MainLayout />}>
            <Route index element={<ShareWork />} />
            <Route path="write" element={<Writing />} />
            <Route path="preview" element={<Preview />} />
            <Route path=":username/:id" element={<SinglePost />} />
          </Route>

          <Route path="/profile" element={<ProfileLayout />}>
            <Route index element={<PersonalInfoList />} />
            <Route path="works" element={<CreatorCardGrid />} />
            <Route
              path="reviews"
              element={
                <>
                  <p className="text-5xl font-bold">
                    The work you have reviewed
                  </p>
                </>
              }
            />
            <Route
              path="view-score"
              element={
                <>
                  <ViewScore />
                </>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
