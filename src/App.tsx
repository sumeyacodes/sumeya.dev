import { PersonalBio } from "./components/personal-bio";
import { Cards } from "./components/cards";
import { SocialLinks } from "./components/social-links";
import { currentProjects, content, other } from "./util/content";
import { DownloadButton } from "./components/download-button";
import { PrintMessage } from "./components/print-message";

export default function App() {
  return (
    <main className="space-y-4 p-[1.5rem] md:p-[2rem] break-inside-avoid-page">
      <PrintMessage />

      <header className="flex items-center justify-between">
        <h1>hi, i'm sumeya.</h1>
        <DownloadButton />
      </header>

      <section>
        <PersonalBio content={content} />
        <SocialLinks />
      </section>

      <section>
        <h1>things i've worked on</h1>
        <Cards cardContent={currentProjects} />
      </section>

      <section>
        <h1>other things</h1>
        <Cards cardContent={other} />
      </section>
    </main>
  );
}
