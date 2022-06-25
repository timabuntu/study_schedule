import { CheckCircle, Lock } from "phosphor-react";
import { isPast } from "date-fns";
interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = false;

  return (
    <a href="#">
      <span className="text-gray-300">{props.availableAt.toString()}</span>

      <section className="p-4 mt-2 border border-gray-500 rounded">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="flex items-center gap-2 text-sm font-medium text-green-500">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm font-medium text-orange-500">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-blue-300 font-bold">
            {props.type === "live" ? "CHEGA AÍ" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong className="block mt-5 text-gray-200">{props.title}</strong>
      </section>
    </a>
  );
}
