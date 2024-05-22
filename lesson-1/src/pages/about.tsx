import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  return (
    <div>
      <h1>About Us</h1>
      <button
        type="button"
        onClick={() => {
          router.push("/"); // 📌:1-3
        }}
      >
        TOP
      </button>
    </div>
  );
};

export default Page;
