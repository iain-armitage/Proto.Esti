import Sidebar from './components/Sidebar';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-4 bg-gray-100 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}