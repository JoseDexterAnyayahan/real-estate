import { Check } from "lucide-react";

const steps = [
  { number: 1, label: "Personal Info" },
  { number: 2, label: "Property Info" },
  { number: 3, label: "Documents" },
  { number: 4, label: "Review" },
];

export default function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-0 w-full mb-10">
      {steps.map((step, i) => {
        const isDone = current > step.number;
        const isActive = current === step.number;

        return (
          <div key={step.number} className="flex items-center">
            {/* Circle */}
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-body font-semibold transition-all duration-300 ${
                  isDone
                    ? "bg-primary text-primary-foreground"
                    : isActive
                    ? "bg-primary text-primary-foreground shadow-md ring-4 ring-primary/20"
                    : "bg-muted text-muted-foreground border border-border"
                }`}
              >
                {isDone ? <Check size={15} /> : step.number}
              </div>
              <span
                className={`text-[10px] font-body tracking-wide whitespace-nowrap ${
                  isActive
                    ? "text-primary font-medium"
                    : isDone
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {step.label}
              </span>
            </div>

            {/* Connector line */}
            {i < steps.length - 1 && (
              <div
                className={`w-16 sm:w-24 h-px mx-2 mb-5 transition-all duration-300 ${
                  current > step.number ? "bg-primary" : "bg-border"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}