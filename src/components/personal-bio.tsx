export const PersonalBio = ({ content }: { content: string[] }) => (
  <>
    {content.map((text, index) => (
      <p key={index} className="text-lg">
        {text}
      </p>
    ))}
  </>
);
