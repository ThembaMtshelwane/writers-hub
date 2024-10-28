import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import LandingPage from "./pages/LandingPage";
import ProfileLayout from "./layout/ProfileLayout";
import PersonalInfoList from "./pages/profilePage/PersonalInfoList";
import CreatorCardGrid from "./components/CreatorCardGrid";
import NotFound from "./pages/NotFound";
import Livefeed from "./pages/feedPage/Livefeed";
import SinglePost from "./pages/SinglePost";
import ShareWork from "./components/ShareWork";
import ViewScore from "./components/ViewScore";
import Rubric from "./components/Rubric";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/feed" element={<MainLayout />}>
            <Route index element={<Livefeed />} />
          </Route>

          <Route path="/post" element={<MainLayout />}>
            <Route
              index
              element={
               <ShareWork/>
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
                  <ViewScore/>
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
