import { cn } from "@/lib/utils";

interface H2Props {
  children: React.ReactNode;
  className?: string;
}

export const H2 = ({ children, className }: H2Props) => {
  return (
    <h2
      className={cn(
        "text-lg font-bold pb-2 border-b border-border",
        className,
      )}
    >
      {children}
    </h2>
  );
};
