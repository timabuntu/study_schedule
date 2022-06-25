import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`;

export function Sidebar() {
  const { data } = useQuery(GET_LESSONS_QUERY);
  console.log(data);

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-r border-gray-600">
      <span className="block pb-6 text-2xl font-bold border-b border-gray-500 ">
        Cronograma das aulas
      </span>

      <section className="flex flex-col gap-8 pt-8">
        <Lesson
          title="Aula 01"
          slug="aula-01"
          availableAt={new Date()}
          type="class"
        />
      </section>
    </aside>
  );
}
