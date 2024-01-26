interface MainWrapperProps {
  children: React.ReactNode;
}

export const MainWrapper = ({ children }: MainWrapperProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:py-24 py-8">
      {children}
    </main>
  );
};
