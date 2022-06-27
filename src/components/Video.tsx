import { ControlVideo } from './ControlVideo';

export function Video() {
  return (
    <div className='flex-1'>
      <section className='bg-black'>
        <main>
          <ControlVideo />
        </main>
      </section>
      <section className='p-8 mx-auto bg-blue-600 max-w-[1100px]'>
        <header className='flex items-start gap-16'>
          <div className='bg-pink-500'>
            <h1>Aula 01 - Início do Estudo de Docker</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              rerum accusantium est tempore soluta eligendi, laboriosam ut
              dolorem quod quis, illum cum, porro quam. Culpa delectus nesciunt
              qui est autem.
            </p>
          </div>

          <div className='bg-green-500'>
            <img src='https://github.com/timabuntu.png' alt='' />
            <div>
              <strong>Thiago lopes de Mello</strong>
              <span>Web Developer</span>
            </div>
          </div>

          <div>
            <a href='#'>Faça sua Anotação</a>
            <a href='#'></a>
          </div>
        </header>
      </section>
    </div>
  );
}
