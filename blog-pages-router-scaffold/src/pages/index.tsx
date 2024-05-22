import { ButtonGroup } from "@/components/ButtonGroup";
import { LinkButton } from "@/components/LinkButton";
import { PageMain } from "@/components/PageMain";
import { PageTitle } from "@/components/PageTitle";

export default function Page() {
  return (
    <PageMain>
      <PageTitle>The Blog</PageTitle>
      <ButtonGroup>
        <LinkButton href="/posts">記事一覧へ</LinkButton>
        <LinkButton href="/posts/new">新規記事作成へ</LinkButton>
      </ButtonGroup>
    </PageMain>
  );
}
