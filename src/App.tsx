import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import LandingPage from "./pages/LandingPage";
import ProfileLayout from "./layout/ProfileLayout";
import PersonalInfoList from "./components/PersonalInfoList";
import CreatorCardGrid from "./components/CreatorCardGrid";

export default function App() {
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
