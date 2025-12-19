"use client";

export function FaqAnswer({ answer }: { answer: string }) {
  // Parse {{FORM_LINK:text}} pattern and replace with clickable link
  const parts = answer.split(/(\{\{FORM_LINK:[^}]+\}\})/g);

  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/\{\{FORM_LINK:([^}]+)\}\}/);
        if (match) {
          return (
            <a
              key={index}
              href="#form"
              className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2 font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {match[1]}
            </a>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}
