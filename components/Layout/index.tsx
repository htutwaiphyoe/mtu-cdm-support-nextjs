import Head from "next/head";
import { IChildren } from "@/interfaces/index";

export function Layout({ children }: IChildren): JSX.Element {
  return (
    <>
      <Head>
        <title>Bookmark - Manage your bookmark easily</title>
        <meta
          name="description"
          content=" A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly. Try it for free."
        />
      </Head>
      {children}
    </>
  );
}
