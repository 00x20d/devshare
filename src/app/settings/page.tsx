import Navbar from "@/components/layout/Navbar";

const Settings = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Navbar />
      <main className='container mx-auto px-4 pt-20'>
        <h1 className='text-3xl font-bold mb-6'>Settings</h1>
        <div className='max-w-2xl mx-auto'>
          <div className='p-6 rounded-lg border border-border bg-card'>
            <p className='text-muted-foreground'>Settings form coming soon</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
