import { getPost } from "@/fetchers/server/getPost";
import { ButtonGroup } from "@/components/ButtonGroup";
import { LinkButton } from "@/components/LinkButton";
import { PageMain } from "@/components/PageMain";
import { PageTitle } from "@/components/PageTitle";
import { DeletePost } from "@/app/posts/[slug]/delete-post";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const { data } = await getPost(params.slug);
  if (!data) {
    return notFound();
  }
  return (
    <PageMain>
      <PageTitle>{data.post.title}</PageTitle>
      <p>slug: {data.post.slug}</p>
      <p>body: {data.post.body}</p>
      <ButtonGroup>
        <LinkButton href="/posts" theme="secondary">
          記事一覧に戻る
        </LinkButton>
        <LinkButton href={`/posts/${data.post.slug}/edit`}>
          記事を編集する
        </LinkButton>
        <DeletePost post={data.post} />
      </ButtonGroup>
    </PageMain>
  );
}
