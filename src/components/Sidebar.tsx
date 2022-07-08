import { useGetLessonsQuery } from '../graphql/generated';
import { Lesson } from './Lesson';

export function Sidebar() {
  const { data } = useGetLessonsQuery();

  return (
    <aside className='w-[348px] bg-gray-700 p-6 border-r border-gray-600'>
      <span className='block pb-6 text-2xl font-bold border-b border-gray-500 '>
        Cronograma das aulas
      </span>

      <section className='flex flex-col gap-8 pt-8'>
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </section>
    </aside>
  );
}
