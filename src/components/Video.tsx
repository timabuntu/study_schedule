import {
  CaretRight,
  FileArrowDown,
  FileCode,
  GithubLogo,
} from 'phosphor-react';
import { ControlVideo } from './ControlVideo';
import { NotionLogo } from './NotionLogo';

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
              className='flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-gray-700 uppercase transition-colors bg-yellow-200 rounded hover:border-yellow-200 hover:bg-transparent hover:text-yellow-200 hover:border hover:py-[15px]'
            >
              <NotionLogo />
              Acesse o Notion
            </a>
            <a
              href='#'
              className='flex items-center gap-2 px-6 py-4 text-sm font-bold text-gray-900 uppercase transition-colors bg-blue-500 border border-blue-500 rounded hover:bg-transparent hover:text-blue-500'
            >
              <GithubLogo weight='fill' size={24} />
              Repositório da Aula
            </a>
          </div>
        </header>
        <div className='grid grid-cols-2 gap-8 mt-20'>
          <a
            href='#'
            className='flex items-stretch gap-6 overflow-hidden transition-colors bg-gray-700 rounded hover:bg-gray-600'
          >
            <div className='flex items-center h-full p-6 text-gray-900 bg-yellow-200'>
              <FileArrowDown size={40} />
            </div>
            <div className='py-6 leading-relaxed'>
              <strong className='text-2xl'>Material de Referência</strong>
              <p className='mt-2 text-sm text-gray-200'>
                Acesse o material de referência para complementar o seu
                desenvolvimento
              </p>
            </div>
            <div className='flex items-center h-full p-6 '>
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href='#'
            className='flex items-stretch gap-6 overflow-hidden transition-colors bg-gray-700 rounded hover:bg-gray-600'
          >
            <div className='flex items-center h-full p-6 text-gray-900 bg-yellow-200'>
              <FileCode size={40} />
            </div>
            <div className='py-6 leading-relaxed'>
              <strong className='text-2xl'>Material de Referência</strong>
              <p className='mt-2 text-sm text-gray-200'>
                Acesse o material de referência para complementar o seu
                desenvolvimento
              </p>
            </div>
            <div className='flex items-center h-full p-6 '>
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
