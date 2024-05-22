import { ButtonGroup } from "@/components/ButtonGroup";
import { LinkButton } from "@/components/LinkButton";
// import { LinkText } from "@/components/LinkText";
import { PageMain } from "@/components/PageMain";
import { PageTitle } from "@/components/PageTitle";
import type { GetServerSideProps } from "next";
import type { Post } from "api/type";

type PageProps = {
  posts: Post[];
};

export default function Page(props: PageProps) {
  const hasPosts = props.posts.length > 0;
  // 📌:5-2 getServersideProps で取得したデータが、ターミナルにログ出力されているか確認しよう
  console.log(props.posts);
  return (
    <PageMain>
      <PageTitle>記事一覧</PageTitle>
      {hasPosts ? (
        <ul>
          {/* 📌:5-3 各記事へのリンクリストをレンダリングしてみよう（<LinkText/>を使用してください） */}
        </ul>
      ) : (
        // 記事がない場合の表示はこのように分岐します
        <p>記事はまだありません</p>
      )}
      <ButtonGroup>
        <LinkButton href="/" theme="secondary">
          TOPに戻る
        </LinkButton>
      </ButtonGroup>
    </PageMain>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  // getServersideProps はサーバーサイドでのみ実行される、データ取得関数です
  // サーバープロセスでデータを取得し、ページの初期描画に必要なデータを props として返します
  const data = { posts: [] };
  // 📌:5-1 データ取得関数（@/fetchers/server）から、getPosts を import して使ってみよう
  // 事前に別ターミナルで　api が起動しているか確認してください
  // const { data, err } = await getPosts(); // 取得できたデータは data に格納されている
  if (!data) {
    // 404 ページを表示するために notFound プロパティを返す
    return { notFound: true };
  }
  // props に取得したデータを格納することで、ページコンポーネントにデータを渡すことができます
  return { props: { posts: data.posts } };
};
