import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  return (
    <div>
      {/* 📌:1-4 */}
      <h1>{router.query.slug}</h1>
      {/* 📌:1-5 */}
      {typeof router.query.page === "string" && (
        <p>{router.query.page}ページ目です</p>
      )}
      <button
        type="button"
        onClick={() => {
          router.push("/");
        }}
      >
        TOP
      </button>
    </div>
  );
};

export default Page;
