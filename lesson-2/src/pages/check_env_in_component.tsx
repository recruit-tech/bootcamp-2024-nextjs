import { BackToTop } from "@/components/BackToTop";

const Page = () => {
  return (
    <div>
      {/* "NEXT_PUBLIC_"接頭辞付きの環境変数はサーバーでもフロントでも参照できる */}
      <h1>NEXT_PUBLIC_VAR: {process.env.NEXT_PUBLIC_VAR}</h1>
      {/* "NEXT_PUBLIC_"接頭辞無しの環境変数はサーバーでは参照できるが、フロントでは直接参照できない */}
      {/* 📌:2-7 サーバーレンダリングと CSR が異なるため Hydration Error が発生する */}
      <BackToTop />
    </div>
  );
};

export default Page;
