
import Script from 'next/script';

export default function Head() {
  return (
    <>
      <title>Guia do Nascimento Perfeito - Ebook completo | Yuri Vasques</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Te auxilio a ter uma experiência de parto, com respeito e autonomia!
    🤱 Parto Humanizado e Autonomia Feminina
    🩺 Atendimento online" />
      <link rel="icon" href="/favicon.ico" />

      <Script id="id-google-tag-01" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-J2P8HKXW6Z`} />
        <Script id="id-google-tag-02" strategy="lazyOnload">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-J2P8HKXW6Z', {
                page_path: window.location.pathname,
                });
            `}
        </Script>
    </>
  )
}
