import { createMetadata } from "@/lib/metadata";
import type { Locale } from "@/types";
import { notFound } from "next/navigation";
import { Topnav } from "@/components/top-nav";
import { AlertTriangle, Mail } from "lucide-react";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

interface Props {
  params: Promise<{ lang: Locale }>;
}

function isLocale(value: string): value is Locale {
  return value === "ko" || value === "en";
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const text = TEXT[lang];

  return createMetadata(lang, {
    title: text.meta.title,
    description: text.meta.description,
    path: "/delete-my-account",
  });
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const text = TEXT[lang];

  const mailto = `mailto:cs@hypersoso.app?subject=${encodeURIComponent(text.email.subject)}&body=${encodeURIComponent(text.email.body)}`;

  return (
    <>
      <Topnav
        locale={lang}
        className="border-b"
        navClassName="md:px-8 max-w-4xl"
      />
      <main
        className={`mt-4 mb-16 p-4 md:p-8 mx-auto max-w-4xl space-y-16 [*]:break-keep
            *:text-balance *:break-keep
            [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:leading-tight [&_h2]:tracking-tight
            [&_h4]:leading-8
            [&_h6]:text-base [&_h6]:font-semibold [&_h6]:leading-8
            [&_li]:text-base [&_li]:leading-8
            [&_p]:text-base [&_p]:leading-8`}
      >
        <section>
          <h1 className="text-4xl font-semibold tracking-tight">
            {text.title}
          </h1>
          <p className="mt-4 text-muted-foreground">{text.intro}</p>

          <div className="mt-4 rounded bg-secondary p-4 md:p-8">
            <hgroup className="flex items-center gap-4">
              <AlertTriangle
                className="size-4 shrink-0 stroke-destructive"
                aria-hidden="true"
              />
              <h4 className="text-lg font-semibold text-secondary-foreground">
                {text.noticeTitle}
              </h4>
            </hgroup>
            <p className="mt-4 text-secondary-foreground">{text.notice}</p>
          </div>
        </section>

        <section>
          <h2>{text.requestTitle}</h2>
          <p className="mt-4 text-muted-foreground">{text.requestBody}</p>

          <ol className="mt-8 list-decimal space-y-8 pl-8 [&>li]:pl-2">
            {text.steps.map((step) => (
              <li key={step.title}>
                <h6 className="font-medium">{step.title}</h6>
                <p className="mt-2 text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
          <a
            href={mailto}
            className="mt-8 inline-flex min-h-16 items-center justify-center gap-2 rounded bg-primary px-8 font-semibold text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <Mail className="size-4" aria-hidden="true" />
            {text.button}
          </a>
          <p className="mt-2 text-muted-foreground">
            {text.emailHint.replace("{email}", "cs@hypersoso.app")}
          </p>
        </section>

        <section>
          <h2>{text.deletedTitle}</h2>
          <ul className="mt-8 list-disc space-y-4 pl-8 [&>li]:pl-2">
            {text.deleted.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{text.retainedTitle}</h2>
          <p className="mt-8">{text.retainedBody}</p>
        </section>

        <section>
          <h2>{text.timingTitle}</h2>
          <p className="mt-8">{text.timingBody}</p>
        </section>

        <section>
          <h2>{text.partialTitle}</h2>
          <p className="mt-8">{text.partialBody}</p>
        </section>

        <section>
          <h2>{text.help}</h2>
          <p className="mt-8">{text.helpBody}</p>
          <a
            href="mailto:cs@hypersoso.app"
            className="mt-4 inline-block font-semibold underline underline-offset-4"
          >
            cs@hypersoso.app
          </a>
        </section>
      </main>
      <Footer locale={lang} />
    </>
  );
}

const TEXT = {
  en: {
    meta: {
      title: "Delete my account | mealco",
      description:
        "Request deletion of your mealco account and learn which account data is deleted or may be retained.",
    },
    language: "한국어",
    eyebrow: "Account & privacy",
    title: "Delete your mealco account",
    intro:
      "You can request the permanent deletion of your mealco account and the data connected to it, even if you can no longer use the app.",
    noticeTitle: "Before you request deletion",
    notice:
      "Account deletion cannot be undone. Your mealco account, content, and social activity will no longer be available. Your Google account itself will not be deleted.",
    requestTitle: "Request account deletion",
    requestBody:
      "Send the request from the email address used for your mealco account. This helps us verify that the account belongs to you.",
    steps: [
      {
        title: "Use your registered email",
        body: "Open the email account you used to sign in to mealco.",
      },
      {
        title: "Send a deletion request",
        body: "Use the button below. If needed, add your mealco nickname to help us find your account.",
      },
      {
        title: "Complete verification",
        body: "We may ask for the minimum information needed to verify account ownership.",
      },
      {
        title: "Deletion is processed",
        body: "After verification, access is restricted and deletion proceeds across our connected systems.",
      },
    ],
    button: "Request deletion by email",
    emailHint: "The request will be sent to {email}.",
    email: {
      subject: "mealco account deletion request",
      body: "Hello, I would like to delete my mealco account.\n\nAccount email:\nmealco nickname (optional):",
    },
    deletedTitle: "Data that will be deleted",
    deleted: [
      "Account identifiers, email address, profile name, and profile image",
      "Posts, meal photos, and other content you uploaded",
      "Likes, follows, followers, and interaction records",
      "Account-linked data in our database, authentication system, and object storage",
    ],
    retainedTitle: "Data that may be retained temporarily",
    retainedBody:
      "The minimum records required by law or reasonably needed for security, abuse prevention, dispute handling, or recovery systems may be retained with restricted access. They are deleted when the applicable purpose or retention period ends.",
    timingTitle: "How deletion is handled",
    timingBody:
      "Deletion is processed sequentially across the database, Firebase Authentication, and Cloudflare R2. Physical deletion from backups or external systems may take additional time due to their technical operation.",
    partialTitle: "Want to delete only certain data?",
    partialBody:
      "You can delete individual posts or meal photos in the app without deleting your entire account.",
    privacy: "Read our Privacy Policy",
    help: "Need help?",
    helpBody:
      "If the email button does not open, use your registered email address and set the subject to mealco account deletion request.",
  },
  ko: {
    meta: {
      title: "계정 삭제 | mealco",
      description:
        "mealco 계정 삭제를 요청하고 삭제되는 데이터와 일시적으로 보관될 수 있는 정보를 확인하세요.",
    },
    language: "English",
    eyebrow: "계정 및 개인정보",
    title: "계정 삭제",
    intro:
      "앱을 사용할 수 없는 경우에도 mealco 계정과 계정에 연결된 데이터의 영구 삭제를 요청할 수 있습니다.",
    noticeTitle: "삭제 요청 전 확인해 주세요",
    notice:
      "계정 삭제는 되돌릴 수 없습니다. mealco 계정과 콘텐츠, 소셜 활동을 더 이상 이용할 수 없게 됩니다. 단, 이용자의 Google 계정 자체는 삭제되지 않습니다.",
    requestTitle: "계정 삭제 요청 방법",
    requestBody:
      "mealco 가입에 사용한 이메일 주소에서 요청 메일을 보내 주세요. 계정 소유자 확인을 위해 필요합니다.",
    steps: [
      {
        title: "가입 이메일 확인",
        body: "mealco 로그인에 사용한 이메일 계정을 열어 주세요.",
      },
      {
        title: "삭제 요청 메일 전송",
        body: "아래 버튼을 이용하고, 계정 확인에 도움이 되도록 mealco 닉네임을 함께 적어 주세요.",
      },
      {
        title: "본인 확인",
        body: "계정 소유 여부 확인에 필요한 최소한의 정보를 추가로 요청할 수 있습니다.",
      },
      {
        title: "삭제 처리",
        body: "확인이 끝나면 계정 접근을 제한하고 연결된 시스템에서 삭제를 진행합니다.",
      },
    ],
    button: "이메일로 삭제 요청",
    emailHint: "요청 메일은 {email}로 전송됩니다.",
    email: {
      subject: "mealco 계정 삭제 요청",
      body: "안녕하세요. mealco 계정 삭제를 요청합니다.\n\n가입 이메일:\nmealco 닉네임(선택):",
    },
    deletedTitle: "삭제되는 데이터",
    deleted: [
      "계정 식별자, 이메일 주소, 프로필 이름 및 프로필 이미지",
      "게시물, 식사 사진 및 이용자가 업로드한 콘텐츠",
      "좋아요, 팔로우, 팔로워 및 상호작용 기록",
      "데이터베이스, 인증 시스템 및 객체 스토리지의 계정 연결 데이터",
    ],
    retainedTitle: "일시적으로 보관될 수 있는 데이터",
    retainedBody:
      "법령상 보존 의무가 있거나 보안, 부정 이용 방지, 분쟁 대응 또는 복구 시스템 운영에 필요한 최소한의 기록은 접근을 제한하여 보관할 수 있습니다. 관련 목적 또는 보존기간이 끝나면 삭제합니다.",
    timingTitle: "삭제 처리 방식",
    timingBody:
      "데이터베이스, Firebase Authentication, Cloudflare R2에서 순차적으로 삭제합니다. 백업과 외부 시스템의 기술적 특성으로 실제 물리적 삭제에는 추가 시간이 걸릴 수 있습니다.",
    partialTitle: "일부 데이터만 삭제하고 싶나요?",
    partialBody:
      "계정 전체를 삭제하지 않고 앱에서 개별 게시물이나 식사 사진만 삭제할 수 있습니다.",
    privacy: "개인정보 처리방침 확인",
    help: "도움이 필요한가요?",
    helpBody:
      "이메일 버튼이 열리지 않으면 가입 이메일 주소에서 제목을 mealco 계정 삭제 요청으로 작성해 직접 보내 주세요.",
  },
};
