import { getPost } from "@/fetchers/server/getPost";
import { PageMain } from "@/components/PageMain";
import { PageTitle } from "@/components/PageTitle";
import { notFound } from "next/navigation";
import { editAction } from "@/app/posts/[slug]/edit/action";
import styles from "@/app/posts/[slug]/edit/styles.module.css";
import { ButtonGroup } from "@/components/ButtonGroup";
import { LinkButton } from "@/components/LinkButton";
import { Button } from "@/components/Button";

export default async function Page({ params }: { params: { slug: string } }) {
  const { data } = await getPost(params.slug);
  if (!data) {
    return notFound();
  }
  return (
    <PageMain>
      <PageTitle>記事「{data.post.title}」の編集</PageTitle>
      <form action={editAction}>
        <input type="hidden" name="id" value={data.post.id} />
        <input type="hidden" name="slug" value={data.post.slug} />
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
                  defaultValue={data.post.slug}
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
                  defaultValue={data.post.title}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="body">本文</label>
              </th>
              <td>
                <textarea
                  className={styles.textarea}
                  name="body"
                  id="body"
                  defaultValue={data.post.body}
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
