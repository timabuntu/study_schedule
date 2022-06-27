import { ControlVideo } from './ControlVideo';

export function Video() {
  return (
    <div className='flex-1'>
      <section className='flex justify-center bg-black'>
        <main className='h-full w-full max-w-[1100px] max-h-[60vh] aspect-video'>
          <ControlVideo />
        </main>
      </section>
      <section className='p-8 mx-auto  max-w-[1100px]'>
        <header className='flex items-start gap-16'>
          <div className='flex-1'>
            <h1 className='text-2xl font-bold'>
              Aula 01 - Início do Estudo de Docker
            </h1>
            <p className='mt-4 leading-relaxed text-gray-200'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              rerum accusantium est tempore soluta eligendi, laboriosam ut
              dolorem quod quis, illum cum, porro quam. Culpa delectus nesciunt
              qui est autem.
            </p>
            <div className='flex items-center gap-4 mt-6'>
              <img
                className='w-16 h-16 border-2 border-blue-500 rounded-full'
                src='https://github.com/timabuntu.png'
                alt='foto do Instrutor'
              />
              <div>
                <strong className='block text-2xl font-bold'>
                  Thiago lopes de Mello
                </strong>
                <span className='text-sm text-gray-200'>Web Developer</span>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <a
              href='#'
              className='px-6 py-4 text-sm font-bold text-gray-700 uppercase transition-colors bg-yellow-200 rounded hover:bg-yellow-300 hover:text-black'
            >
              Faça sua Anotação
            </a>
            <a
              href='#'
              className='px-6 py-4 text-sm font-bold text-yellow-200 uppercase border border-yellow-200 rounded'
            >
              Web Developer
            </a>
          </div>
        </header>
      </section>
    </div>
  );
}
