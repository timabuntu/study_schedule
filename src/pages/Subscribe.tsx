import { Logo } from '../components/Logo';

export function Subscribe() {
  return (
    <div className='flex flex-col items-center min-h-screen bg-no-repeat bg-cover bg-bullseye'>
      <main className='max-w-[1100px] flex items-center mx-auto mt-20 justify-between'>
        <div className='max-w-[640px] '>
          <Logo />
        </div>
      </main>
      <img
        src='/src/assets/developer-doing-programming.webp'
        className='mt-10'
        alt=''
      />
    </div>
  );
}
