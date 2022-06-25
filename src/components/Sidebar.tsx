import { Lesson } from "./Lesson";

export function Sidebar() {
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
