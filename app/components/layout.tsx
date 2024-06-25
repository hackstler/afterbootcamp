import Header from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main className='pt-16'>{children}</main>
    </div>
  );
}
