import Navbar from "@/components/layout/Navbar";

const UserProfile = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Navbar />
      <main className='container mx-auto px-4 pt-20'>
        <h1 className='text-3xl font-bold mb-6'>@Uername</h1>
        <div className='grid gap-6'>
          <div className='p-6 rounded-lg border border-border bg-card'>
            <p className='text-muted-foreground'>Profile details coming soon</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
