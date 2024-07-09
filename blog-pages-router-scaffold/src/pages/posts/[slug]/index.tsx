// import { useRouter } from "next/router";
// import { deletePost } from "@/fetchers/client/deletePost";
// import { getPost } from "@/fetchers/server/getPost";
// import { Button } from "@/components/Button";
import { ButtonGroup } from "@/components/ButtonGroup";
// import { LinkButton } from "@/components/LinkButton";
import { PageMain } from "@/components/PageMain";
// import { PageTitle } from "@/components/PageTitle";
import type { Post } from "api/type";
import type { GetServerSideProps } from "next";

type PageProps = {
  post: Post;
};

export default function Page(props: PageProps) {
  // const handleClickDelete = async (
  // event: React.MouseEvent<HTMLButtonElement>
  // ) => {
  // event.preventDefault();
  // // 📌:5-10 データ削除関数　（@/fetchers/client/deletePost）を使用して、記事を削除する処理を実装してみましょう
  // // 📌:5-11 削除後は、記事一覧ページにリダイレクトするようにしてください
  // };
  console.log(props.post);
  return (
    <PageMain>
      {/* 📌:5-6 ページタイトル（title）、記事ID（slug）、本文（body）を表示してみよう */}
      <ButtonGroup>
        {/* 📌:5-7 「記事一覧に戻る」ボタンを追加してみよう（<LinkButton/>を使用してください） */}
        {/* 📌:5-8 「記事を編集する」ボタンを追加してみよう。パスは /posts/[slug]/edit です（<LinkButton/>を使用してください） */}
        {/* 📌:5-9 「記事を削除する」ボタンを追加してみよう（<Button/>を使用して、クリック時に handleClickDelete が呼ばれるようにしてください） */}
        TODO
      </ButtonGroup>
    </PageMain>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  ctx
) => {
  // 📌:5-4 "as string" を消して、不正なリクエスト時にはエラーを throw するようにしてみましょう
  const slug = ctx.query.slug as string;
  // 📌:5-5 データ取得関数　（@/fetchers/server）　から、getPost を　import して以下を書き換えてみましょう
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
