import { useRouter } from "next/router";
import { deletePost } from "@/fetchers/client/deletePost";
import { getPost } from "@/fetchers/server/getPost";
import { Button } from "@/components/Button";
import { ButtonGroup } from "@/components/ButtonGroup";
import { LinkButton } from "@/components/LinkButton";
import { PageMain } from "@/components/PageMain";
import { PageTitle } from "@/components/PageTitle";
import type { Post } from "api/type";
import type { GetServerSideProps } from "next";

type PageProps = {
  post: Post;
};

export default function Page(props: PageProps) {
  const router = useRouter();
  const handleClickDelete = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    if (window.confirm("本当に削除しますか？")) {
      const { data } = await deletePost(props.post.slug);
      if (!data) return window.alert("削除に失敗しました");
      window.alert("削除しました");
      router.push("/posts");
    }
  };
  return (
    <PageMain>
      <PageTitle>{props.post.title}</PageTitle>
      <p>slug: {props.post.slug}</p>
      <p>body: {props.post.body}</p>
      <ButtonGroup>
        <LinkButton href="/posts" theme="secondary">
          記事一覧に戻る
        </LinkButton>
        <LinkButton href={`/posts/${props.post.slug}/edit`}>
          記事を編集する
        </LinkButton>
        <Button onClick={handleClickDelete}>記事を削除する</Button>
      </ButtonGroup>
    </PageMain>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  ctx,
) => {
  // 📌 ctx.query.slug は string | string[] | undefined をとりうるので検証する
  const slug = ctx.query.slug;
  if (typeof slug !== "string") throw new Error("slug is not a string");
  const { data } = await getPost(slug);
  if (!data) {
    // 📌 404 ページを表示するために notFound プロパティを返す
    return { notFound: true };
  }
  return { props: { post: data.post } };
};
