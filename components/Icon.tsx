const iconFiles: Record<string, string> = {
  app: "screen",
  mediaKit: "media-kit"
};

export function Icon({ name }: { name: string }) {
  const file = iconFiles[name] ?? name;
  return <img className="lineIcon" src={`/icons/${file}.svg`} alt="" aria-hidden="true" />;
}
