import { PageMain } from "@/components/PageMain";
import { PageTitle } from "@/components/PageTitle";
import { newPostsAction } from "@/app/posts/new/action";
import styles from "@/app/posts/new/styles.module.css";
import { ButtonGroup } from "@/components/ButtonGroup";
import { LinkButton } from "@/components/LinkButton";
import { Button } from "@/components/Button";

export default function Page() {
  return (
    <PageMain>
      <PageTitle>新規記事作成</PageTitle>
      <form action={newPostsAction}>
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
