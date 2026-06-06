import { useI18n } from "../../i18n";

export function DecisionPanel({ decisionId }) {
  const { t, dict } = useI18n();
  const decision = dict.decisions?.[decisionId];
  if (!decision) return null;

  return (
    <aside
      className="mb-10 rounded-[24px] border border-[#C7D2FE] bg-gradient-to-br from-[#EEF2FF] to-white p-6 lg:p-8 shadow-[var(--shadow-sm)]"
      aria-labelledby={`decision-${decisionId}-title`}
    >
      <p className="text-[11px] font-bold uppercase tracking-wider text-[#4F46E5] mb-2">
        {t("decisions.label")}
      </p>
      <h2 id={`decision-${decisionId}-title`} className="text-[20px] font-bold tracking-tight text-[#191F28]">
        {decision.title}
      </h2>
      <p className="text-[15px] text-[#4E5968] leading-[1.75] mt-3">{decision.context}</p>

      <dl className="mt-6 grid sm:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-white/80 border border-[#E5E8EB] p-4">
          <dt className="text-[11px] font-semibold uppercase tracking-wide text-[#8B95A1]">
            {t("decisions.why")}
          </dt>
          <dd className="text-[14px] text-[#191F28] mt-2 leading-relaxed">{decision.why}</dd>
        </div>
        <div className="rounded-2xl bg-white/80 border border-[#E5E8EB] p-4">
          <dt className="text-[11px] font-semibold uppercase tracking-wide text-[#8B95A1]">
            {t("decisions.strategy")}
          </dt>
          <dd className="text-[14px] text-[#191F28] mt-2 leading-relaxed">{decision.strategy}</dd>
        </div>
      </dl>

      {decision.alternatives?.length > 0 && (
        <div className="mt-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-[#8B95A1] mb-2">
            {t("decisions.alternativesLabel")}
          </p>
          <ul className="space-y-2">
            {decision.alternatives.map((item) => (
              <li
                key={item}
                className="text-[14px] text-[#4E5968] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#4F46E5]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {decision.metric && (
        <p className="mt-4 text-[13px] font-medium text-[#4F46E5] bg-[#EEF2FF] inline-flex px-3 py-1.5 rounded-lg">
          {decision.metric}
        </p>
      )}
    </aside>
  );
}
