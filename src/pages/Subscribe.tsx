import { gql, useMutation } from '@apollo/client';
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useMutation(
    CREATE_SUBSCRIBER_MUTATION
  );

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();
    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate('/event');
  }

  return (
    <div className='flex flex-col items-center min-h-screen bg-no-repeat bg-cover bg-bullseye'>
      <div className='mt-4'>
        <Logo />
      </div>
      <main className='w-full max-w-[1100px] flex items-center  mx-auto mt-16 justify-between'>
        <div className='max-w-[640px]'>
          <h1 className='mt-8 text-[2.5rem] leading-tight'>
            Agende seu estudo, e suas{' '}
            <strong className='text-blue-500'>aulas</strong> ficará{' '}
            <strong className='text-blue-500'>organizada</strong>
          </h1>
          <p className='mt-4 leading-relaxed text-gray-200 '>
            Apenas a prática levará você para o próximo nível!
          </p>
        </div>
        <div className='p-8 border border-gray-500 rounded'>
          <strong className='block mb-6 text-2xl'>
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleSubscribe}
            className='flex flex-col w-full gap-2'
          >
            <input
              className='px-5 bg-gray-700 rounded h-14'
              type='text'
              placeholder='Seu nome completo'
              onChange={(event) => setName(event.target.value)}
              name={name}
            />
            <input
              className='px-5 bg-gray-700 rounded h-14'
              type='email'
              placeholder='Digite seu e-mail'
              onChange={(event) => setEmail(event.target.value)}
              name={email}
            />

            <button
              type='submit'
              disabled={loading}
              className='py-4 mt-4 text-sm font-bold text-gray-700 uppercase transition-colors bg-yellow-400 rounded hover:bg-yellow-200 disabled:opacity-50'
            >
              Garantir minha inscrição
            </button>
          </form>
        </div>
      </main>

      <img
        src='/src/assets/developer-doing-programming.webp'
        className='mt-10'
        alt='ilustração de tecnologias web'
      />
    </div>
  );
}
