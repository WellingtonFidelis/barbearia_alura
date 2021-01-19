var main = document.querySelector('#main');

var homeHtmlPage = `
<section class="section-main">
  <h2 class="align-title">
    Sobre a Barbearia Alura
  </h2>

  <img class="utensilios" src="./img/utensilios.jpg" alt="Utensílios de um Barbeiro" srcset="">

  <p class="text-simple">
    Localizada no coração da cidade a <strong>Barbearia Alura</strong> traz
    para o mercado o que há de melhor para o seu cabelo e barba. Fundada em 2019, a
    Barbearia Alura já é destaque na cidade e conquista novos clientes a cada dia.
  </p>
  <p class="text-simple" id="mission">
    <em>Nossa missão é: <strong>"Proporcionar auto-estima e qualidade de vida aos clientes"</strong>.</em>
  </p>
  <p class="text-simple">
    Oferecemos profissionais experientes e antenados às mudanças no mundo da moda. O
    atendimento possui padrão de excelência e agilidade, garantindo qualidade e
    satisfação dos nossos clientes.
  </p>
</section>
<section class="section-main">
  <h3 class="align-title">
    Nosso estabelecimento
  </h3>
  <p>
    Nosso estabelecimento está localizado no coração da cidade.
  </p>
  <map name="map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2185.732161793279!2d-43.2729495219447!3d-22.87835415050916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997c3f0a7c5cdd%3A0xf31c91cd0302bb07!2sShopping%20Nova%20Am%C3%A9rica!5e0!3m2!1spt-BR!2sbr!4v1610493769456!5m2!1spt-BR!2sbr"
      width="100%" height="350" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
      tabindex="0"></iframe>
  </map>
</section>
<section class="section-main">
  <div class="benefits">
    <h3 class="align-title">Benefícios</h3>
    <div class="benefits-contents">
      <ul class="benefits-list">
        <li class="items">Atendimento aos Clientes</li>
        <li class="items">Espaço diferenciado</li>
        <li class="items">Localização</li>
        <li class="items">Profissionais qualificados</li>
        <li class="items">Pontualidade</li>
        <li class="items">Limpeza</li>
      </ul><img class="benefits-image" src="./img/beneficios.jpg" alt="benefits" srcset="">
    </div>
  </div>
  <div class="video">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/tR7eu2QWbV4" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  </div>
</section>
`;

var productsHtmlPage = `
<div class="main-products-page">
  <ul class="products-list">
  <li>
    <h2>Cabelo</h2>
    <img src="./img/cabelo.jpg" alt="Cabelo">
    <p class="product-description">Na tesoura ou máquina, como o cliente preferir</p>
    <p class="product-price">R$ 25,00</p>
  </li>
  <li>
    <h2>Barba</h2>
      <img src="./img/barba.jpg" alt="Barba">
      <p class="product-description">Corte e desenho profissional de barba</p>
      <p class="product-price">R$ 18,00</p>
    </li>
  <li>
    <h2>Cabelo + Barba</h2>
    <img src="./img/cabelo+barba.jpg" alt="Corte + Barba">
    <p class="product-description">Pacote completo de cabelo e barba</p>
    <p class="product-price">R$ 35,00</p>
  </li>
  </ul>
 </div> 
`;

var contactHtmlPage = `
<div id="main-contact">
  <section class="section">
    <div class="form-contact container">
      <form action="">
        <div class="row">
          <fieldset class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <label for="inputName" class="form-label">Name</label>
              <input type="text" class="form-control" name="inputName" id="inputName" placeholder="Insira seu nome" required="true">
          </fieldset>
          <fieldset class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <label for="inputLastName" class="form-label">Last Name</label>
              <input type="text" class="form-control" name="inputLastName" id="inputLastName" placeholder="Insira seu sobrenome" required="true">
          </fieldset>
        </div>
        <div class="row">
          <fieldset class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <label for="inputMail" class="form-label">Email</label>
            <input type="email" name="inputMail" id="inputMail" class="form-control" placeholder="name.lastname@blabla.com" required="true">
          </fieldset>
          <fieldset class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <label for="inputPhone" class="form-label">Phone</label>
            <input type="tel" name="inputPhone" id="inputPhone" class="form-control" placeholder="" mask="(99) 99999-9999" required="true">
          </fieldset>
        </div>
        <div class="row">
          <fieldset class="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <label for="textareaMessage" class="form-label">Message</label>
            <textarea class="form-control" name="textareaMessage" id="textareaMessage" cols="30" rows="3" required="true"></textarea>
          </fieldset>
        </div>
        <div class="row">
          <fieldset class="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <legend>How do you prefer our contact?</legend>
            <br>
            <div class="form-check" required="true">
              <input class="form-check-input" type="radio" name="inputRadio" id="inputRadioMail" value="mail" checked>
              <label class="form-check-label" for="inputRadioMail">
                Email
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="inputRadio" id="inputRadioCall" value="call">
              <label class="form-check-label" for="inputRadioCall">
                Ligação
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="inputRadio" id="inputRadioWhatsapp" value="whatsapp">
              <label class="form-check-label" for="inputRadioWhatsapp">
                WhatsApp
              </label>
            </div>
          </fieldset>
        </div>
        <div class="row">
          <fieldset class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <label for="selectPeriod" class="form-label">Qual horário ser atendido?</label>
            <select class="form-control" name="selectPeriod" id="selectPeriod">
              <option value="morning">Manhã</option>
              <option value="afternoon">Tarde</option>
              <option value="nigth">Noite</option>
            </select>
          </fieldset>
        </div>
        <div class="row">
          <fieldset class="form-group">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="inputCheckboxNews">
              <label class="form-check-label" for="inputCheckboxNews">Gostaria de receber nossas novidades por email?</label>
            </div>
          </fieldset>
        </div>
        <div class="row">
          <fieldset class="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <input type="submit" class="form-control btn btn-success" value="Send">
          </fieldset>
        </div>
      </form>
    </div>
  </section>
  <section class="section table-working-hours">
    <div class="row">
      <fieldset class="form-group">
        <legend>Horário de funcionamento</legend>
        <br>
        <div class="table-responsible">
          <table class="table" >
            <thead class="thead-dark">
              <tr>
                <th scope="col">Dia</th>
                <th scope="col">Horário</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Segunda-feira</td>
                <td>8h - 20h</td>
              </tr>
              <tr>
                <td>Terça-feira</td>
                <td>8h - 20h</td>
              </tr>
              <tr>
                <td>Quarta-feira</td>
                <td>8h - 20h</td>
              </tr>
              <tr>
                <td>Quinta-feira</td>
                <td>8h - 20h</td>
              </tr>
              <tr>
                <td>Sexta-feira</td>
                <td>8h - 20h</td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </div>
    </div>
  </section>
</div>
`;


document.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOM loaded.');
  event.preventDefault();
  main.innerHTML = homeHtmlPage;
  var buttonHomePage = document.querySelector('#home-page');
  var buttonProductsPage = document.querySelector('#products-page');
  var buttonContactPage = document.querySelector('#contact-page');
  var imageBanner = document.querySelector('#banner-image');

  buttonHomePage.addEventListener('click', function (event) {
    event.preventDefault();
    event.href = '';
    main.innerHTML = homeHtmlPage;
  });
  
  buttonProductsPage.addEventListener('click', function (event) {
    event.preventDefault();
    event.href = '';
    main.innerHTML = productsHtmlPage;
    console.log('Products page loaded');
  });
  
  buttonContactPage.addEventListener('click', function (event) {
    event.preventDefault();
    event.href = '';
    main.innerHTML = contactHtmlPage;
    console.log('Contact page loaded');
  });
});

