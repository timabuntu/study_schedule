import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';
import classnames from 'classnames';
interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' · 'd' de 'MMMM' · 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  const isActiveLesson = slug === props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className='text-gray-300'>{availableDateFormatted}</span>

      <section
        className={`p-4 mt-2 border border-gray-500 rounded group-hover:border-yellow-200 ${
          isActiveLesson ? 'bg-yellow-200' : ''
        }`}
      >
        <header className='flex items-center justify-between'>
          {isLessonAvailable ? (
            <span
              className={classnames(
                'flex items-center gap-2 text-sm font-medium ',
                {
                  'text-gray-700': isActiveLesson,
                  'text-blue-500': !isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className='flex items-center gap-2 text-sm font-medium text-orange-500'>
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={classnames(
              'text-xs rounded py-[3px] px-2 text-white border border-yellow-200 font-bold',
              {
                'border border-gray-700': isActiveLesson,
                'text-gray-900': isActiveLesson,
              }
            )}
          >
            {props.type === 'live' ? 'AULA TEÓRICA' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong
          className={classnames('block mt-5 text-gray-200', {
            'text-gray-500': isActiveLesson,
          })}
        >
          {props.title}
        </strong>
      </section>
    </Link>
  );
}
