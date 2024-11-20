import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
      <div className='text-center p-6'>
        <h1 className='text-3xl font-bold mb-4'>Welcome ReactJs boilerplate</h1>
        <p className='text-gray-600 mb-6'>
          Visit README.md to see more information
        </p>
        <Button>
          Let's go
          <ArrowRight className='ml-2 h-4 w-4' />
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
