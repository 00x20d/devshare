import Navbar from "@/components/layout/Navbar";

const Explore = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Navbar />
      <main className='container mx-auto px-4 pt-20'>
        <h1 className='text-3xl font-bold mb-6'>Explore Projects</h1>
        <div className='grid gap-6'>
          {/* Project cards will be added here */}
          <div className='p-6 rounded-lg border border-border bg-card'>
            <p className='text-muted-foreground'>No projects found</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Explore;
