import { ButtonGroup } from "@/components/ButtonGroup";
import { LinkButton } from "@/components/LinkButton";
import { LinkText } from "@/components/LinkText";
import { PageMain } from "@/components/PageMain";
import { PageTitle } from "@/components/PageTitle";
import { getPosts } from "@/fetchers/server/getPosts";
import { notFound } from "next/navigation";
import { Alert } from "@/app/posts/alert";
import { Suspense } from "react";

export default async function Page() {
  const { data } = await getPosts();
  if (!data) {
    return notFound();
  }

  const hasPosts = data.posts.length > 0;
  return (
    <PageMain>
      <Suspense>
        <Alert />
      </Suspense>
      <PageTitle>記事一覧</PageTitle>
      {hasPosts ? (
        <ul>
          {data.posts.map((post) => (
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
