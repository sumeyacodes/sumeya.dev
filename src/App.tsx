import { PersonalBio } from "./components/personal-bio";
import { Cards } from "./components/cards";
import { SocialLinks } from "./components/social-links";
import { currentProjects, content, other } from "./util/content";
import { DownloadButton } from "./components/download-button";

export default function App() {
  return (
    <main className="space-y-6 p-[1.5rem] md:p-[2rem]">
      <header className="flex items-center justify-between">
        <h1>hi, i'm sumeya.</h1>
        <DownloadButton />
      </header>

      <PersonalBio content={content} />

      <SocialLinks />

      <h1>things i've worked on</h1>
      <Cards content={currentProjects} />

      <h1>other things</h1>
      <Cards content={other} />
    </main>
  );
}
