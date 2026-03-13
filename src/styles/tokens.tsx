export const surfaceStyles = {
  base: "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md",
  hover: "transition hover:border-white/20 hover:bg-white/[0.07]",
  elevated: "rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl",
  subtle: "rounded-2xl border border-white/10 bg-white/[0.03]",
}

export const textStyles = {
  pageTitle: "text-4xl font-bold text-white md:text-5xl",
  sectionTitle: "text-2xl font-semibold text-white",
  sectionDescription: "mt-2 max-w-2xl text-slate-400",
  body: "text-slate-300 leading-relaxed",
  muted: "text-slate-500",
  meta: "text-xs text-slate-500",
}

export const buttonStyles = {
  base: "inline-flex items-center justify-center font-medium transition disabled:cursor-not-allowed disabled:opacity-50",
  size: {
    sm: "rounded-xl px-3 py-2 text-sm",
    md: "rounded-xl px-4 py-2.5 text-sm",
    lg: "rounded-2xl px-6 py-3 text-base",
  },
  variant: {
    primary:
      "border border-violet-500/80 bg-violet-600 text-white hover:bg-violet-700",
    secondary:
      "border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10",
    ghost:
      "border border-transparent bg-transparent text-slate-300 hover:bg-white/5 hover:text-white",
    danger:
      "border border-red-500/80 bg-red-600 text-white hover:bg-red-700",
  },
}

export const pillStyles = {
  base: "rounded-full border px-4 py-2 text-sm transition",
  inactive:
    "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white",
  active: "border-white/20 bg-white/10 text-white",
}