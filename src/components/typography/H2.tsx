import { cn } from "@/lib/utils";

interface H2Props {
  children: React.ReactNode;
  className?: string;
}

export const H2 = ({ children, className }: H2Props) => {
  return (
    <h2
      className={cn(
        "text-lg font-bold crt-glow font-terminal tracking-wider text-[hsl(120,100%,45%)]",
        className,
      )}
    >
      {children}
    </h2>
  );
};
