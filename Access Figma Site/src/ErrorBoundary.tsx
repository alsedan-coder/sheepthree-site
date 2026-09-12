import React from "react";

type Props = { children: React.ReactNode };
type State = { hasError: boolean; message?: string };

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: unknown): State {
    return {
      hasError: true,
      message: error instanceof Error ? error.message : String(error),
    };
  }

  componentDidCatch(error: unknown) {
    console.error("Erro na aplicação Sheep3:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center gap-3 bg-[#ffc83d] px-6 text-center text-black">
          <h1 className="text-4xl font-black">SHEEP<span className="text-[#f72585]">3</span></h1>
          <p className="max-w-md text-lg">
            Ops, algo não carregou como esperado. Tente recarregar a página.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
