import { cn } from "@/lib/utils";

interface TypographyH1Props {
  children: React.ReactNode;
  className?: string;
}

export const H1 = ({ children, className }: TypographyH1Props) => {
  return (
    <h1
      className={cn(
        "text-2xl font-bold crt-glow-strong font-terminal tracking-wider",
        className,
      )}
    >
      {children}
    </h1>
  );
};
