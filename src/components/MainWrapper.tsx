interface MainWrapperProps {
  children: React.ReactNode;
}

export const MainWrapper = ({ children }: MainWrapperProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {children}
    </main>
  );
};
