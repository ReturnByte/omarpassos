import "./globals.css";

export const metadata = {
  title: "Omar Passos | CISO & Arquiteto de Segurança",
  description:
    "CISO | Arquiteto de Segurança | Criador do cyberARMOR | RBVM • LGPD • Estratégia Cibernética | Low-level & Engenharia Reversa (ética).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
