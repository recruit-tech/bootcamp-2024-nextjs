import { ButtonGroup } from "@/components/ButtonGroup";
import { LinkButton } from "@/components/LinkButton";
import { LinkText } from "@/components/LinkText";
import { PageMain } from "@/components/PageMain";
import { PageTitle } from "@/components/PageTitle";
import { getPosts } from "@/fetchers/server/getPosts";
import type { GetServerSideProps } from "next";
import type { Post } from "api/type";

type PageProps = {
  posts: Post[];
};

export default function Page(props: PageProps) {
  const hasPosts = props.posts.length > 0;
  return (
    <PageMain>
      <PageTitle>記事一覧</PageTitle>
      {hasPosts ? (
        <ul>
          {props.posts.map((post) => (
            <li key={post.slug}>
              <LinkText href={`/posts/${post.slug}`}>{post.title}</LinkText>
            </li>
          ))}
        </ul>
      ) : (
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
  const { data } = await getPosts();
  if (!data) {
    // 📌 404 ページを表示するために notFound プロパティを返す
    return { notFound: true };
  }
  return { props: { posts: data.posts } };
};
