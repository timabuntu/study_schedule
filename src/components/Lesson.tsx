import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link } from 'react-router-dom';
interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' · 'd' de 'MMMM' · 'k'h'mm",
    {
      locale: ptBR,
    }
  );
  return (
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className='text-gray-300'>{availableDateFormatted}</span>

      <section className='p-4 mt-2 border border-gray-500 rounded group-hover:border-yellow-200'>
        <header className='flex items-center justify-between'>
          {isLessonAvailable ? (
            <span className='flex items-center gap-2 text-sm font-medium text-blue-500'>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className='flex items-center gap-2 text-sm font-medium text-orange-500'>
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className='text-xs rounded py-[3px] px-2 text-white border border-yellow-200 font-bold'>
            {props.type === 'live' ? 'AULA TEÓRICA' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className='block mt-5 text-gray-200'>{props.title}</strong>
      </section>
    </Link>
  );
}
