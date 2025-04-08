
interface TimePeriodSelectorProps {
  selectedPeriod: string
  onPeriodChange: (period: string) => void
}

export function TimePeriodSelector({ selectedPeriod, onPeriodChange }: TimePeriodSelectorProps) {
  const periods = [
    { value: "1", label: "1 Day" },
    { value: "7", label: "7 Days" },
    { value: "30", label: "30 Days" },
  ]

  return (
    <div className="mt-4">
      <div className="flex gap-4">
        {periods.map((period) => (
          <button
            key={period.value}
            onClick={() => onPeriodChange(period.value)}
            className={`px-4 py-2 rounded-md ${
              selectedPeriod === period.value ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
            data-testid={`period-${period.value}`}
          >
            {period.label}
          </button>
        ))}
      </div>
    </div>
  )
}
