interface MainWrapperProps {
  children: React.ReactNode;
}

export const MainWrapper = ({ children }: MainWrapperProps) => {
  return (
    <main className="flex flex-col lg:py-8 py-4 px-4 md:px-8">
      {children}
    </main>
  );
};
