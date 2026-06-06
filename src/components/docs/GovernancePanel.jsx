import { GOVERNANCE } from "../../constants/governance";
import { useI18n } from "../../i18n";
import { Card, SectionTitle } from "./DocPrimitives";

export function GovernancePanel() {
  const { t } = useI18n();
  const g = t("governance");

  return (
    <div className="space-y-10">
      <SectionTitle title={g.title} description={g.description} />

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="mb-0 p-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#8B95A1]">{g.versionLabel}</p>
          <p className="text-[28px] font-bold mt-2">{GOVERNANCE.version.current}</p>
          <p className="text-sm text-[#6B7684] mt-1">{GOVERNANCE.version.cadence}</p>
          <p className="text-xs text-[#8B95A1] mt-3 font-mono">{GOVERNANCE.version.semver}</p>
        </Card>
        <Card className="mb-0 p-5 md:col-span-2">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#8B95A1]">{g.processLabel}</p>
          <ol className="mt-4 grid sm:grid-cols-2 gap-3">
            {GOVERNANCE.changeProcess.map((step) => (
              <li key={step.step} className="flex gap-3 rounded-xl bg-[#FAFBFC] border border-[#F2F4F6] p-3">
                <span className="text-xs font-bold text-[#4F46E5]">{step.step}</span>
                <div>
                  <p className="text-[14px] font-semibold">{step.title}</p>
                  <p className="text-[13px] text-[#6B7684] mt-0.5">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </Card>
      </div>

      <SectionTitle title={g.rolesTitle} description={g.rolesDesc} />
      <div className="grid lg:grid-cols-3 gap-4">
        {GOVERNANCE.roles.map((role, i) => (
          <Card key={role.id} className="mb-0 p-5">
            <h3 className="text-[16px] font-bold">{g.roles[i].role}</h3>
            <div className="mt-4">
              <p className="text-[11px] font-semibold uppercase text-[#10B981]">{g.canLabel}</p>
              <ul className="mt-2 space-y-1">
                {g.roles[i].can.map((item) => (
                  <li key={item} className="text-[13px] text-[#4E5968]">• {item}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <p className="text-[11px] font-semibold uppercase text-[#EF4444]">{g.cannotLabel}</p>
              <ul className="mt-2 space-y-1">
                {g.roles[i].cannot.map((item) => (
                  <li key={item} className="text-[13px] text-[#4E5968]">• {item}</li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>

      <SectionTitle title={g.impactTitle} description={g.impactDesc} />
      <Card className="mb-0 overflow-visible">
        <div className="divide-y divide-[#F2F4F6]">
          <div className="hidden md:grid md:grid-cols-[1.2fr_0.5fr_1fr_1.2fr] gap-4 px-6 py-3 text-[11px] font-semibold uppercase tracking-wide text-[#8B95A1]">
            <span>{g.impactChange}</span>
            <span>{g.impactScope}</span>
            <span>{g.impactAffected}</span>
            <span>{g.impactAction}</span>
          </div>
          {GOVERNANCE.impactMatrix.map((row, i) => (
            <div
              key={row.change}
              className="grid md:grid-cols-[1.2fr_0.5fr_1fr_1.2fr] gap-2 md:gap-4 px-6 py-4 items-start"
            >
              <span className="text-[14px] font-medium">{g.impactRows[i].change}</span>
              <span
                className={`inline-flex w-fit px-2 py-0.5 rounded-md text-[12px] font-semibold ${
                  row.scope === "High"
                    ? "bg-[#FEE2E2] text-[#B91C1C]"
                    : row.scope === "Medium"
                      ? "bg-[#FEF3C7] text-[#B45309]"
                      : "bg-[#D1FAE5] text-[#047857]"
                }`}
              >
                {row.scope}
              </span>
              <span className="text-[13px] text-[#4E5968]">{g.impactRows[i].affected}</span>
              <span className="text-[13px] text-[#4E5968]">{g.impactRows[i].action}</span>
            </div>
          ))}
        </div>
      </Card>

      <SectionTitle title={g.deprecatedTitle} description={g.deprecatedDesc} />
      <Card className="mb-0 p-6">
        <p className="text-[15px] text-[#4E5968] mb-4">{g.deprecatedNotice}</p>
        <div className="grid md:grid-cols-3 gap-3 mb-6">
          {GOVERNANCE.deprecatedPolicy.stages.map((stage, i) => (
            <div key={stage.stage} className="rounded-xl border border-[#E5E8EB] p-4 bg-[#FAFBFC]">
              <p className="text-[13px] font-bold text-[#4F46E5]">{g.deprecatedStages[i].stage}</p>
              <p className="text-[13px] text-[#4E5968] mt-2">{g.deprecatedStages[i].desc}</p>
            </div>
          ))}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-[13px]">
            <thead>
              <tr className="border-b border-[#F2F4F6] text-left text-[#8B95A1]">
                <th className="py-2 pr-4 font-semibold">{g.deprecatedFrom}</th>
                <th className="py-2 pr-4 font-semibold">{g.deprecatedTo}</th>
                <th className="py-2 pr-4 font-semibold">{g.deprecatedSince}</th>
                <th className="py-2 font-semibold">{g.deprecatedRemove}</th>
              </tr>
            </thead>
            <tbody>
              {GOVERNANCE.deprecatedPolicy.examples.map((ex, i) => (
                <tr key={ex.from} className="border-b border-[#F2F4F6] last:border-0">
                  <td className="py-3 pr-4 font-mono text-[#B45309]">{ex.from}</td>
                  <td className="py-3 pr-4 font-mono text-[#047857]">{ex.to}</td>
                  <td className="py-3 pr-4">{g.deprecatedExamples[i].since}</td>
                  <td className="py-3">{g.deprecatedExamples[i].remove}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
