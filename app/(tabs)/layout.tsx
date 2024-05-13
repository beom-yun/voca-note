import Navigation from "@/components/Navigation";

export default function WordsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-5">{children}</div>
      <Navigation />
    </div>
  );
}
