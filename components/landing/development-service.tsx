import { Blocks, Gauge, Layers3, ShieldCheck } from "lucide-react";

const capabilities = [
  {
    icon: Blocks,
    title: "Sites web immobiliers",
    text: "Présentez vos annonces immobilières, votre expertise et vos secteurs. Ajoutez des pages de biens, des critères de recherche et des formulaires de contact adaptés au mobile.",
  },
  {
    icon: Layers3,
    title: "CRM pour votre agence",
    text: "Centralisez les contacts, demandes, visites et relances. Retrouvez le suivi de chaque acheteur, vendeur, locataire ou propriétaire dans un même espace.",
  },
  {
    icon: Gauge,
    title: "Portails et espaces clients",
    text: "Offrez à vos clients un espace clair pour suivre leurs demandes, retrouver les informations utiles et échanger avec votre équipe.",
  },
  {
    icon: ShieldCheck,
    title: "Outils et intégrations métier",
    text: "Connectez vos outils existants et automatisez les tâches répétitives. Les intégrations sont définies selon les accès et les plateformes que vous utilisez.",
  },
];

export function DevelopmentService() {
  return (
    <section
      id="development-service"
      className="relative z-1 mx-auto w-[min(100%-2.5rem,1180px)] py-20 sm:py-28"
    >
      <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[.2em] text-[#bafc0c]">
            Ce que nous développons
          </p>
          <h2 className="mt-4 text-balance text-[40px] font-black leading-none tracking-[-.045em] sm:text-[56px]">
            Un site immobilier et des outils pour <em className="text-[#bafc0c]">votre agence.</em>
          </h2>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-[#f7f7f7] sm:text-[18px]">
            Votre équipe doit pouvoir se concentrer sur les clients et les biens, pas sur des demandes dispersées. Nous développons le site, le CRM ou le portail adapté à votre spécialité immobilière.
          </p>
          <a
            href="#project-form"
            className="mt-8 inline-flex min-h-13 max-w-full items-center whitespace-nowrap rounded-xl bg-[#bafc0c] px-3 py-3.5 text-[12px] font-extrabold text-[#0a0c0d] shadow-[0_0_30px_rgba(186,252,12,.25)] transition hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#bafc0c] sm:px-5 sm:text-[15px]"
          >
            Discuter de mon projet
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[.03] p-5 transition hover:-translate-y-1 hover:border-[#65891c]"
            >
              <div className="mb-5 grid size-11 place-items-center rounded-xl bg-[#65891c]">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3 className="text-[19px] font-black tracking-[-.03em]">
                {title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#dcdfe1]">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
