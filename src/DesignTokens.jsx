export default function DesignTokens() {
  return (
    <div className="text-[#191F28]">
      {/* PAGE TITLE */}
      <div className="mb-14">
        <p className="text-sm text-[#8B95A1] mb-3">
          Foundations
        </p>

        <h1
          className="
            text-[32px] md:text-[44px]
            leading-[1.1]
            font-bold
            tracking-tight
          "
        >
          Color Tokens
        </h1>

        <p
          className="
            text-[#6B7684]
            text-[15px]
            leading-7
            mt-5
            max-w-[720px]
          "
        >
          Design tokens define the visual foundations
          of the system, including color, spacing,
          typography, and motion.
        </p>
      </div>

      {/* SECTION TITLE */}
      <div className="mb-8">
        <h2 className="text-[28px] font-bold tracking-tight">
          Color
        </h2>
      </div>

      {/* TOKEN CARD */}
      <section
        className="
          bg-white
          rounded-[28px]
          border border-[#E5E8EB]
          p-6 md:p-8
          shadow-[0_1px_2px_rgba(0,0,0,0.04)]
          mb-8
        "
      >
        <div
          className="
            flex flex-col md:flex-row
            md:items-center
            gap-6
          "
        >
          {/* TOKEN INFO */}
          <div className="flex-1">
            <code
              className="
                inline-flex
                bg-[#F2F4F6]
                px-3 py-1.5
                rounded-lg
                text-[13px]
                font-medium
                text-[#4E5968]
              "
            >
              color-text-primary
            </code>

            <p
              className="
                text-[15px]
                text-[#4E5968]
                leading-7
                mt-4
              "
            >
              Use for primary text content and emphasis.
            </p>
          </div>

          {/* LIGHT */}
          <div
            className="
              w-full md:w-[220px]
              rounded-2xl
              border border-[#E5E8EB]
              p-4
            "
          >
            <div
              className="
                h-12
                rounded-xl
                bg-[#191F28]
                mb-3
              "
            />

            <span className="text-sm text-[#4E5968]">
              Gray900
            </span>
          </div>

          {/* DARK */}
          <div
            className="
              w-full md:w-[220px]
              rounded-2xl
              bg-[#191F28]
              p-4
            "
          >
            <div
              className="
                h-12
                rounded-xl
                bg-white
                mb-3
              "
            />

            <span className="text-sm text-gray-300">
              White
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}