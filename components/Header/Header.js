var header = document.querySelector('#header');
var headerHtml = `
  <header>
    <div id="div-header">
      <h1><img src="../img/logo-branco.png" alt="Barbearia Alura" srcset=""></h1>
      <nav>
        <ul>
          <li id="home-page"><a href="./index.html">Home</a></li>
          <li id="products-page"><a href="./products.html">Products</a></li>
          <li id="contact-page"><a href="">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
`;

header.innerHTML = headerHtml;
