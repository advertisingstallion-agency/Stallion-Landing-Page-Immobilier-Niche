import { ArrowRight, Plus } from "lucide-react";

const questions = [
  [
    "Pouvez-vous adapter le site à notre spécialité immobilière ?",
    "Oui. Le site peut être pensé selon votre marché — immobilier résidentiel, haut de gamme, commercial ou location — et la manière dont vous accompagnez vos clients.",
  ],
  [
    "Combien coûte la création d’un site ou d’un outil métier ?",
    "Les projets commencent à 10 000 DH. Le tarif final dépend du périmètre, des fonctionnalités et du niveau de personnalisation souhaité.",
  ],
  [
    "Combien de temps faut-il pour réaliser un projet ?",
    "Le développement prend en moyenne de 3 à 8 mois, selon l’ampleur et les spécifications du projet.",
  ],
  [
    "Pouvez-vous créer un CRM pour suivre nos prospects et nos biens ?",
    "Nous pouvons concevoir un CRM adapté à vos étapes de suivi, aux informations que vous gérez et à vos besoins de relance. Le périmètre est défini avec votre équipe.",
  ],
  [
    "Le site peut-il être connecté à nos outils actuels ?",
    "C’est possible selon les outils utilisés et les accès disponibles. Nous vérifions les options d’intégration pendant le cadrage du projet.",
  ],
  [
    "Proposez-vous un accompagnement après le lancement ?",
    "Oui. Nous pouvons accompagner les évolutions et les besoins de maintenance après le lancement, selon le cadre défini pour le projet.",
  ],
];

export function Faq() {
  return (
    <section
      id="faq"
      className="relative z-1 mx-auto w-[min(100%-2.5rem,1180px)] py-20 sm:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-[11px] uppercase tracking-[.2em] text-[#bafc0c]">
            Vos questions, nos réponses
          </p>
          <h2 className="mt-4 text-balance text-[40px] font-black leading-none tracking-[-.045em] sm:text-[56px]">
            Les réponses <em className="text-[#bafc0c]">sans détour.</em>
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-[#b6b9bb]">
            Un bon partenaire de développement doit clarifier la marche à suivre.
            Voici les réponses aux questions que l’on nous pose le plus souvent.
          </p>
          <a
            href="#project-form"
            className="mt-8 inline-flex items-center gap-2 text-[15px] font-bold text-[#bafc0c] hover:text-white"
          >
            Une autre question ? Parlons-en{" "}
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="grid gap-3">
          {questions.map(([question, answer], index) => (
            <details
              key={question}
              className="group rounded-2xl border border-white/10 bg-white/[.03] transition-colors open:border-[#65891c] open:bg-white/[.05]"
            >
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 px-5 py-4 text-[16px] font-bold focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-[#bafc0c] [&::-webkit-details-marker]:hidden sm:px-6">
                <span className="flex items-center gap-4">
                  <span className="font-mono text-[11px] text-[#65891c]">
                    0{index + 1}
                  </span>
                  {question}
                </span>
                <Plus
                  size={20}
                  className="shrink-0 text-[#bafc0c] transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-2xl px-5 pb-5 pl-14 text-[15px] leading-relaxed text-[#b6b9bb] sm:px-6 sm:pl-16">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
