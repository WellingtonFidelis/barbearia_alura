var main = document.querySelector('#main');

var contactHtmlPage = `
<main id="main-contact">
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
</main>
`;

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOM loaded.');
  var buttonContactPage = document.querySelector('#contact-page');

  buttonContactPage.addEventListener('click', function (event) {
    event.preventDefault();
    main.innerHTML = contactHtmlPage;
    console.log('Hello');
  });
});
