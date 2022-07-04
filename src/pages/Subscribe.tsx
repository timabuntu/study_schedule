import { Logo } from '../components/Logo';

export function Subscribe() {
  return (
    <div className='flex flex-col items-center min-h-screen bg-no-repeat bg-cover bg-bullseye'>
      <main className='max-w-[1100px] flex items-center mx-auto mt-20 justify-between'>
        <div className='max-w-[640px] '>
          <Logo />
          <h1 className='mt-8 text-[2.5rem] leading-tight'>
            Agende seu estudo, e suas{' '}
            <strong className='text-blue-500'>aulas</strong> ficará{' '}
            <strong className='text-blue-500'>organizada</strong>
          </h1>
          <p className='mt-4 leading-relaxed text-gray-200 '>
            Apenas a prática levará você para o próximo nível
          </p>
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
