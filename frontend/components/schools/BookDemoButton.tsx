"use client";

interface BookDemoButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function BookDemoButton({
  children = "Book a School Demo",
  variant = "primary",
}: BookDemoButtonProps) {
  return (
    <button
      type="button"
      onClick={() => {
        // TODO: Connect booking flow later
        console.log("Book a School Demo");
      }}
      className={
        variant === "primary"
          ? "inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus:ring-2 focus:ring-blue-500"
          : "inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 hover:bg-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:ring-2 focus:ring-blue-500"
      }
    >
      {children}
      <span className="ml-2">→</span>
    </button>
  );
}