// import { useRouter } from "next/router";
import { getPost } from "@/fetchers/server/getPost";
// import { updatePost } from "@/fetchers/client/updatePost";
// import { Button } from "@/components/Button";
import { ButtonGroup } from "@/components/ButtonGroup";
// import { LinkButton } from "@/components/LinkButton";
import { PageMain } from "@/components/PageMain";
import { PageTitle } from "@/components/PageTitle";
import type { Post } from "api/type";
import type { GetServerSideProps } from "next";
import styles from "./styles.module.css";

type PageProps = {
  post: Post;
};

export default function Page(props: PageProps) {
  // 📌:5-25 「記事を更新」ボタンクリック時に form がサブミットされるようにしてください
  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.currentTarget);
  //   const input = {
  //     ...Object.fromEntries(formData),
  //     slug: props.post.slug,
  //   } as Post;
  //   // 📌 API Route にリクエストを投げ、サーバーサイドで処理する
  //   const { data } = await updatePost(input);
  //   // 📌 更新した記事のページにナビゲーション
  //   if (!data) return window.alert("更新に失敗しました");
  //   // 更新後は、各記事ページにリダイレクトするようにしてください
  // };
  return (
    <PageMain>
      <PageTitle>記事「{props.post.title}」の編集</PageTitle>
      <form>
        <input type="hidden" name="id" value={props.post.id} />
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>
                <label htmlFor="slug">記事ID</label>
              </th>
              <td>
                {/* 📌:5-20 「記事ID」が入力できるようにしてみよう（<input/> を使用） */}
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="title">タイトル</label>
              </th>
              <td>
                {/* 📌:5-21 「タイトル」が入力できるようにしてみよう（<input/> を使用） */}
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="body">本文</label>
              </th>
              <td>
                {/* 📌:5-22 「本文」が入力できるようにしてみよう（<textarea/> を使用） */}
              </td>
            </tr>
          </tbody>
        </table>
        <ButtonGroup>
          {/* 📌:5-23 「記事一覧に戻る」ボタンを追加してみよう（<LinkButton/>を使用してください） */}
          {/* 📌:5-24 「記事を更新」ボタンを追加してみよう（<Button/>を使用して、クリック時に　form がサブミットされるようにしてください） */}
          TODO
        </ButtonGroup>
      </form>
    </PageMain>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  ctx
) => {
  // 📌:5-18 "as string" を消して、不正なリクエスト時にはエラーを throw するようにしてみましょう
  const slug = ctx.query.slug as string;
  // 📌:5-19 データ取得関数　（@/fetchers/server）　から、getPost を　import して以下を書き換えてみましょう
  const { data } = await Promise.resolve({
    data: {
      post: {
        id: "WMSTzGK8nb9120BrLrOcH",
        createdAt: "2024-05-13T01:30:09.228Z",
        slug,
        title: "title",
        body: "body",
      },
    },
  });
  if (!data) {
    return { notFound: true };
  }
  return { props: { post: data.post } };
};
