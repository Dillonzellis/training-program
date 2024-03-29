import { cn } from "@/lib/utils";

interface H2Props {
  children: React.ReactNode;
  className?: string;
}

export const H2 = ({ children, className }: H2Props) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 max-w-sm border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
    >
      {children}
    </h2>
  );
};
