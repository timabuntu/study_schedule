import { CheckCircle } from "phosphor-react";
export function Lesson() {
  return (
    <a href="#">
      <span className="text-gray-300">Terça · 22 de junho · 19h00</span>

      <section className="p-4 mt-2 border border-gray-500 rounded">
        <header className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm font-medium text-green-500">
            <CheckCircle size={20} />
            Conteúdo liberado
          </span>
          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-blue-300 font-bold">
            CHEGA AÍ
          </span>
        </header>

        <strong className="block mt-5 text-gray-200">Docker é Vida</strong>
      </section>
    </a>
  );
}
