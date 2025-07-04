import { Bio } from "./components/personal-bio";
import { Cards } from "./components/project-cards";
import { SocialLinks } from "./components/social-links";
import { myProjects, openSourceProjects } from "./util/content";

export default function App() {
  return (
    <main className="space-y-8">
      <h1 className="text-4xl">hi, i'm sumeya.</h1>
      <Bio />
      <SocialLinks />

      <h1>my projects</h1>
      <Cards projects={myProjects} />

      <h1>open source contributions</h1>
      <Cards projects={openSourceProjects} />
    </main>
  );
}
