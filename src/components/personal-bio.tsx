export function PersonalBio({ content }: { content: string[] }) {
  return (
    <section className="space-y-4 text-secondary">
      {content.map((text, index) => (
        <p key={index} className="text-lg">
          {text}
        </p>
      ))}
    </section>
  );
}
