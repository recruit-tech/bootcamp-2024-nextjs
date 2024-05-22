// import { useRouter } from "next/router";
// import { createPost } from "@/fetchers/client/createPost";
// import { Button } from "@/components/Button";
import { ButtonGroup } from "@/components/ButtonGroup";
// import { LinkButton } from "@/components/LinkButton";
import { PageMain } from "@/components/PageMain";
import { PageTitle } from "@/components/PageTitle";
// import type { Post } from "api/type";
import styles from "./styles.module.css";

export default function Page() {
  // 📌:5-17 「新規作成」ボタンクリック時に form がサブミットされるようにしてください
  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.currentTarget);
  //   // API Route にリクエストを投げ、サーバーサイドで処理する
  //   const { data } = await createPost(Object.fromEntries(formData) as Post);
  //   if (!data) return window.alert("新規作成に失敗しました");
  //   // 削除後は、各記事ページにリダイレクトするようにしてください
  // };
  return (
    <PageMain>
      <PageTitle>新規記事作成</PageTitle>
      <form>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>
                <label htmlFor="slug">記事ID</label>
              </th>
              <td>
                {/* 📌:5-12 「記事ID」が入力できるようにしてみよう（<input/> を使用） */}
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="title">タイトル</label>
              </th>
              <td>
                {/* 📌:5-13 「タイトル」が入力できるようにしてみよう（<input/> を使用） */}
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="doby">本文</label>
              </th>
              <td>
                {/* 📌:5-14 「本文」が入力できるようにしてみよう（<textarea/> を使用） */}
              </td>
            </tr>
          </tbody>
        </table>
        <ButtonGroup>
          {/* 📌:5-15 「記事一覧に戻る」ボタンを追加してみよう（<LinkButton/>を使用してください） */}
          {/* 📌:5-16 「新規作成」ボタンを追加してみよう（<Button/>を使用してください） */}
          TODO
        </ButtonGroup>
      </form>
    </PageMain>
  );
}
