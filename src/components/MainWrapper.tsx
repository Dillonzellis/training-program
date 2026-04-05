interface MainWrapperProps {
  children: React.ReactNode;
}

export const MainWrapper = ({ children }: MainWrapperProps) => {
  return (
    <main className="flex min-h-screen flex-col justify-between lg:py-8 py-4">
      {children}
    </main>
  );
};
