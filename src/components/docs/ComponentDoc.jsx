import { Card, DocTabs } from "./DocPrimitives";

export function DocCodePanel({ code }) {
  return (
    <div className="bg-[#031B34] p-6 lg:p-8">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#7C8DA1] mb-4">
        Implementation
      </p>
      <pre className="text-[14px] leading-[1.85] text-white whitespace-pre-wrap break-words font-mono">
        {code}
      </pre>
    </div>
  );
}

/**
 * Design/Code tabs with matched content and no inner scroll containers.
 */
export function DocShowcase({ idPrefix, tab, onTabChange, design, code }) {
  const isDesign = tab === "design";

  return (
    <Card className="mb-0">
      <DocTabs value={tab} onChange={onTabChange} idPrefix={idPrefix} />
      <div
        role="tabpanel"
        id={`${idPrefix}-panel-design`}
        aria-labelledby={`${idPrefix}-design`}
        hidden={!isDesign}
      >
        {isDesign && <div className="p-6 lg:p-10 bg-[#FAFBFC]">{design}</div>}
      </div>
      <div
        role="tabpanel"
        id={`${idPrefix}-panel-code`}
        aria-labelledby={`${idPrefix}-code`}
        hidden={isDesign}
      >
        {!isDesign && <DocCodePanel code={code} />}
      </div>
    </Card>
  );
}

export function ComponentArchitecture({ spec, labels }) {
  return (
    <div className="space-y-8 mb-10">
      {spec.anatomy && (
        <div>
          <h3 className="text-[16px] font-bold mb-3">{labels.anatomy}</h3>
          <div className="flex flex-wrap gap-2">
            {spec.anatomy.map((part) => (
              <span
                key={part}
                className="px-3 py-1.5 rounded-lg bg-[#EEF2FF] text-[#4F46E5] text-[13px] font-semibold"
              >
                {part}
              </span>
            ))}
          </div>
        </div>
      )}

      <ArchitectureTable title={labels.variants} columns={labels.variantColumns} rows={spec.variants} />
      <ArchitectureTable title={labels.states} columns={labels.stateColumns} rows={spec.states} />
      <ArchitectureTable title={labels.tokens} columns={labels.tokenColumns} rows={spec.tokenMap} />
    </div>
  );
}

function ArchitectureTable({ title, columns, rows }) {
  if (!rows?.length) return null;

  const colKeys = Object.keys(columns);

  return (
    <div>
      <h3 className="text-[16px] font-bold mb-3">{title}</h3>
      <div className="rounded-[20px] border border-[#E5E8EB] overflow-hidden bg-white">
        <div className="hidden sm:block overflow-x-auto">
          <div
            className="grid gap-4 px-5 py-3 border-b border-[#F2F4F6] bg-[#FAFBFC] text-[11px] font-semibold uppercase tracking-wide text-[#8B95A1] min-w-[480px]"
            style={{ gridTemplateColumns: `repeat(${colKeys.length}, minmax(0, 1fr))` }}
          >
            {colKeys.map((key) => (
              <span key={key}>{columns[key]}</span>
            ))}
          </div>
          <div className="divide-y divide-[#F2F4F6] min-w-[480px]">
            {rows.map((row) => (
              <div
                key={row.id || row.prop || row.token}
                className="grid gap-4 px-5 py-4"
                style={{ gridTemplateColumns: `repeat(${colKeys.length}, minmax(0, 1fr))` }}
              >
                {colKeys.map((key) => (
                  <span
                    key={key}
                    className={`text-[13px] break-words ${
                      key === "token" || key === "prop" ? "font-mono text-[#4F46E5]" : "text-[#4E5968]"
                    }`}
                  >
                    {row[key]}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="sm:hidden divide-y divide-[#F2F4F6]">
          {rows.map((row) => (
            <div key={row.id || row.prop || row.token} className="px-5 py-4 space-y-2">
              {colKeys.map((key) => (
                <div key={key}>
                  <span className="text-[10px] font-semibold uppercase text-[#8B95A1] block mb-0.5">
                    {columns[key]}
                  </span>
                  <span
                    className={`text-[13px] break-words ${
                      key === "token" || key === "prop" ? "font-mono text-[#4F46E5]" : "text-[#4E5968]"
                    }`}
                  >
                    {row[key]}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
