type Props = { label: string };

export function SectionLabel({ label }: Props) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="text-xs uppercase tracking-widest text-foreground-subtle">
        {label}
      </span>
      <div className="flex-1 border-t border-border" />
    </div>
  );
}
