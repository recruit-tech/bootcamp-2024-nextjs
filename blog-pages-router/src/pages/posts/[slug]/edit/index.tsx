import { useRouter } from "next/router";
import { getPost } from "@/fetchers/server/getPost";
import { updatePost } from "@/fetchers/client/updatePost";
import { Button } from "@/components/Button";
import { ButtonGroup } from "@/components/ButtonGroup";
import { LinkButton } from "@/components/LinkButton";
import { PageMain } from "@/components/PageMain";
import { PageTitle } from "@/components/PageTitle";
import type { Post } from "api/type";
import type { GetServerSideProps } from "next";
import styles from "./styles.module.css";

type PageProps = {
  post: Post;
};

export default function Page(props: PageProps) {
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const input = {
      ...Object.fromEntries(formData),
      slug: props.post.slug,
    } as Post;
    // 📌 API Route にリクエストを投げ、サーバーサイドで処理する
    const { data } = await updatePost(input);
    // 📌 更新した記事のページにナビゲーション
    if (!data) return window.alert("更新に失敗しました");
    router.push(`/posts/${data.post.slug}`);
  };
  return (
    <PageMain>
      <PageTitle>記事「{props.post.title}」の編集</PageTitle>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="id" value={props.post.id} />
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>
                <label htmlFor="slug">記事ID</label>
              </th>
              <td>
                <input
                  className={styles.inputText}
                  type="text"
                  name="slug"
                  id="slug"
                  defaultValue={props.post.slug}
                  disabled
                />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="title">タイトル</label>
              </th>
              <td>
                <input
                  className={styles.inputText}
                  type="text"
                  name="title"
                  id="title"
                  defaultValue={props.post.title}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="doby">本文</label>
              </th>
              <td>
                <textarea
                  className={styles.textarea}
                  name="body"
                  id="body"
                  defaultValue={props.post.body}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <ButtonGroup>
          <LinkButton href="/posts" theme="secondary">
            記事一覧に戻る
          </LinkButton>
          <Button>記事を更新</Button>
        </ButtonGroup>
      </form>
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
