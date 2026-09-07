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
          ? "inline-flex items-center justify-center rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          : "inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
      }
    >
      {children}
      <span className="ml-2">→</span>
    </button>
  );
}