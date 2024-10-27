import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import LandingPage from "./pages/LandingPage";
import ProfileLayout from "./layout/ProfileLayout";
import PersonalInfoList from "./pages/profilePage/PersonalInfoList";
import CreatorCardGrid from "./components/CreatorCardGrid";
import NotFound from "./pages/NotFound";
import SplashPage from "./pages/SplashPage";
import PreferencePage from "./pages/PreferencePage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/index" element={<LandingPage />} />

          <Route path="/pref" element={<PreferencePage />} />
          <Route path="/feed" element={<MainLayout />}>
            <Route
              index
              element={
                <>
                  <p className="text-5xl font-bold">This is the livefeed</p>
                </>
              }
            />
          </Route>

          <Route path="/post" element={<MainLayout />}>
            <Route
              index
              element={
                <>
                  <p className="text-5xl font-bold">Enter basic info</p>
                </>
              }
            />
            <Route
              path="write"
              element={
                <>
                  <p className="text-5xl font-bold">Type your nonsense</p>
                </>
              }
            />
            <Route
              path="preview"
              element={
                <>
                  <p className="text-5xl font-bold">PREVIEW your nonsense </p>
                </>
              }
            />
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
                  <p className="text-5xl font-bold">
                    This is your score so far
                  </p>
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
