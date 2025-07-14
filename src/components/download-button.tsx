import { CgSoftwareDownload } from "react-icons/cg";

export const DownloadButton = () => (
  <button
    title="Download or print PDF"
    className="print:hidden p-2 text-3xl rounded-lg hover:backdrop-brightness-90 text-accent transition-all duration-250 group cursor-pointer"
    onClick={(e) => {
      e.preventDefault();
      window.print();
    }}>
    <CgSoftwareDownload />
  </button>
);
