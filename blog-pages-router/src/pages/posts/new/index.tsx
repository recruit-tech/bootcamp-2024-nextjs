import { useRouter } from "next/router";
import { createPost } from "@/fetchers/client/createPost";
import { Button } from "@/components/Button";
import { ButtonGroup } from "@/components/ButtonGroup";
import { LinkButton } from "@/components/LinkButton";
import { PageMain } from "@/components/PageMain";
import { PageTitle } from "@/components/PageTitle";
import type { Post } from "api/type";
import styles from "./styles.module.css";

export default function Page() {
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // 📌 API Route にリクエストを投げ、サーバーサイドで処理する
    const { data } = await createPost(Object.fromEntries(formData) as Post);
    // 📌 作成した記事のページにナビゲーション
    if (!data) return window.alert("新規作成に失敗しました");
    router.push(`/posts/${data.post.slug}`);
  };
  return (
    <PageMain>
      <PageTitle>新規記事作成</PageTitle>
      <form onSubmit={handleSubmit}>
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
                />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="doby">本文</label>
              </th>
              <td>
                <textarea className={styles.textarea} name="body" id="body" />
              </td>
            </tr>
          </tbody>
        </table>
        <ButtonGroup>
          <LinkButton href="/posts" theme="secondary">
            記事一覧に戻る
          </LinkButton>
          <Button>新規作成</Button>
        </ButtonGroup>
      </form>
    </PageMain>
  );
}
