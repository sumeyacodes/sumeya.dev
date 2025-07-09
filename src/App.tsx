import { PersonalBio } from "./components/personal-bio";
import { Cards } from "./components/project-cards";
import { SocialLinks } from "./components/social-links";
import { currentProjects, oldProjects, content } from "./util/content";
import "./styles/index.css";

export default function App() {
  return (
    <main className="space-y-6">
      <h1>hi, i'm sumeya.</h1>
      <PersonalBio content={content} />
      <SocialLinks />

      <h1>stuff i'm working on</h1>
      <Cards projects={currentProjects} />

      <h1>older projects</h1>
      <Cards projects={oldProjects} />
    </main>
  );
}
