import { Button } from "@/components/ui/button";

export default function HeroButton({
  icon,
  href,
  slug,
}: {
  icon: React.ReactNode;
  href: string;
  slug: string;
}) {
  const clicked = () => {
    window.sa_event("hero_button_click", { slug });
    window.location.href = href;
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      asChild
      className="cursor-pointer"
      onClick={clicked}
    >
      {icon}
    </Button>
  );
}
