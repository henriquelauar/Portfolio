function GlobalStyle() {
  return (
    <style global jsx>{`
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        scroll-behavior: smooth;
      }
      body {
        background-color: #1B1B1E;
      }
      /* App fit Height */ 
      html, body, #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
        scroll-behavior: smooth;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      header {
        z-index: 1,
      }
      ::-webkit-scrollbar {
       width: 8px;
      }
        
      ::-webkit-scrollbar-thumb {
       background: #645853;
      }
      a {
        list-style: none;
        text-decoration: none;
        transition: 0.3s ease-in-out;
      }

    a:hover {
      opacity: 0.4;
    }
  
      `}</style>
  );
}

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
