import Link from "next/link";

const Page = () => {
  return (
    <ul>
      <li>
        <Link href="/now">[📌:2-1] now</Link>
      </li>
      <li>
        <Link href="/check_query/1">[📌:2-2, 📌:2-3] check_query</Link>
      </li>
      <li>
        <Link href="/check_cookie">[📌:2-4] check_cookie</Link>
      </li>
      <li>
        <Link href="/check_env_in_gssp">[📌:2-6] check_env_in_gssp</Link>
      </li>
      <li>
        <Link href="/check_env_in_component">
          [📌:2-7] check_env_in_component
        </Link>
      </li>
    </ul>
  );
};

export default Page;
