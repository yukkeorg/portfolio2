export interface SocialLink {
  /** Short display name, also used as the icon key in SocialLinks. */
  name: string;
  /** Accessible label / tooltip for the icon link. */
  ariaLabel: string;
  url: string;
  handle: string;
}

export const socialLinks: SocialLink[] = [
  { name: "GitHub", ariaLabel: "GitHub", url: "https://github.com/yukkeorg", handle: "@yukkeorg" },
  { name: "X", ariaLabel: "X (Twitter)", url: "https://x.com/yukkeorg", handle: "@yukkeorg" },
  { name: "Zenn", ariaLabel: "Zenn", url: "https://zenn.dev/yukkeorg", handle: "@yukkeorg" },
];
