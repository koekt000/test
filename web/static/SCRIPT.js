const databaseKey = 'userDatabase';
const database = JSON.parse(localStorage.getItem(databaseKey)) || {};
const url = "http://localhost:8000/users/new/";
function checkUser() {
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
  
    const url = "http://localhost:8000/users/new/";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        password: password,
      }),
    })
      .then((response) => response.text())
      .then((text) => JSON.parse(text))
      .then((json) => json.user_id)
      .then((user_id) => sessionStorage.setItem("user_id", user_id.toString()))
      .catch((error) => console.log(error));
    window.location.replace("http://localhost:8000/hello/");
    if (name in database){
        database[name] = database[name]
    }else{database[name] = 0;}
    localStorage.setItem(databaseKey, JSON.stringify(database));
    Main(name);
  }

function Main(username) {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = `<h2>Привет, ${username}!</h2>
                            <p>Выберите действие:</p>
                            <button onclick="Res('${username}')">Посмотреть результаты</button>
                            <button onclick="startTest1('${username}')">Пройти тест на знание мемов</button>`;
}

function Res(username) {
    const mainContainer = document.getElementById('main-container');
    if (database[username] < 6){
    mainContainer.innerHTML = `<h2>Результаты</h2>
                            <p>Ваши результаты: ${database[username]}   |   вы бездарь</p>
                            <button onclick="Main('${username}')">Назад</button>`;}
    else if (database[username] > 10){
    mainContainer.innerHTML = `<h2>Результаты</h2>
                            <p>Ваши результаты: ${database[username]}   |    чел хорош</p>
                            <button onclick="Main('${username}')">Назад</button>`;}
    else if (database[username] >= 6){
    mainContainer.innerHTML = `<h2>Результаты</h2>
                            <p>Ваши результаты: ${database[username]}   |   норм</p>
                            <button onclick="Main('${username}')">Назад</button>`;}
    
}   
function startTest1(username) {
    database[username] = 0;
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = `<h2>Сколько негров несли гроб</h2>
                                <p></p>
                                <button onclick="addResults1('${username}', 1)">6</button>
                                <button onclick="addResults1('${username}', 0)">8</button>`;
}
function addResults1(username, x) {
    database[username] += x;
    localStorage.setItem(databaseKey, JSON.stringify(database));
    startTest2(username);
}
function startTest2(username) {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = `<h2>Тебе пришла ссылка: https://www.youtube.com/watch?v=GFq6wH5JR2A</h2>
                                <p></p>
                                <button onclick="addResults2('${username}', 1)">я не буду это открывать</button>
                                <button onclick="addResults2('${username}', 0)">я открыл</button>`;
}
function addResults2(username, x) {
    database[username] += x;
    localStorage.setItem(databaseKey, JSON.stringify(database));
    startTest3(username);
}

function startTest3(username) {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = `<h2>Твое отношение к мему "Скибиди туалет"</h2>
                                <p></p>
                                <button onclick="addResults3('${username}', 1)">даунский мем</button>
                                <button onclick="addResults3('${username}', -9999)">норм мем</button>`;
}
function addResults3(username){
    database[username] += 1;
    localStorage.setItem(databaseKey, JSON.stringify(database));
    startTest4(username);
}

function startTest4(username) {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = `<h2>Заполни пропуск</h2>
                                <p>________ дело в шляпе</p>
                                <button onclick="addResults4('${username}', 1)">Снрега</button>
                                <button onclick="addResults4('${username}', 0)">Генадий</button>`;
}

function addResults4(username, x) {
    database[username] += x;
    localStorage.setItem(databaseKey, JSON.stringify(database));
    startTest5(username);
}

function startTest5(username) {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = `<h2>Умер ли Гослинг в конце "Драйва"?</h2>
    <form id="test-form">
        <p>
            <select id="answer" name="select" size="3" multiple>
                <option value="1">Умер</option>
                <option value="1">Не умер</option>
            </select>
        </p>
        <button type="button" onclick="addResults5('${username}')">Отправить</button>
    </form>`;
}

function addResults5(username, x) { 
    database[username] += 1;
    localStorage.setItem(databaseKey, JSON.stringify(database));
    startTest6(username);
}

function startTest6(username) {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = `<h2>Нашел мужик шляпу, ______</h2>
    <form id="test-form">
        <p>Введите ваш ответ:</p>
        <input type="text" id="answer" required>
        <button type="button" onclick="addResults6('${username}')">Отправить</button>
    </form>`;
}

function addResults6(username) {
    const ans = document.getElementById('answer').value;
    if (ans == "а она ему как раз"){
        database[username] += 1;
    }
    
    localStorage.setItem(databaseKey, JSON.stringify(database));
    startTest7(username);
}

function startTest7(username) {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = `<h2>Вопрос 7</h2>
                                <p></p>
                                <button onclick="addResults7('${username}', 1)">правельно</button>
                                <button onclick="addResults7('${username}', 0)">не правельно</button>`;
}

function addResults7(username, x) {
    database[username] += x;
    localStorage.setItem(databaseKey, JSON.stringify(database));
    startTest8(username);
}

function startTest8(username) { 0
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = `<h2>Боевой верталет - это...</h2>
                                <p></p>
                                <button onclick="addResults8('${username}', 1)">гендер</button>
                                <button onclick="addResults8('${username}', 0)">боевая техника</button>
                                <button onclick="addResults8('${username}', 1)">муха</button>`;
}

function addResults8(username, x) {
    database[username] += x;
    localStorage.setItem(databaseKey, JSON.stringify(database));
    startTest9(username);
}

function startTest9(username) {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = `<h2>когда факультатив по проге</h2>
                                <p></p>
                                <button onclick="addResults9('${username}', 1)">никогда</button>
                                <button onclick="addResults9('${username}', 1)">никогда</button>`;
}

function addResults9(username, x) {
    database[username] += x;
    localStorage.setItem(databaseKey, JSON.stringify(database));
    startTest10(username);
}
function startTest10(username) {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = `<h2>мирное блюдо - это</h2>
                                <p></p>
                                <button onclick="addResults10('${username}', 1)">обман</button>
                                <button onclick="addResults10('${username}', 0)">еда</button>`;
}

function addResults10(username, x) {
    database[username] += x;
    localStorage.setItem(databaseKey, JSON.stringify(database));
    startTest11(username);
}
function startTest11(username) {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = `<h2>когда факультатив по проге</h2>
                                <p></p>
                                <button onclick="addResults11('${username}', 1)">никогда</button>
                                <button onclick="addResults11('${username}', 1)">никогда</button>`;
}

function addResults11(username, x) {
    database[username] += x;
    localStorage.setItem(databaseKey, JSON.stringify(database));
    startTest12(username);
}

function startTest12(username) {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = `<h2>что поставить Боре за работу</h2>
                                <p></p>
                                <button onclick="addResults12('${username}', 1)">5</button>
                                <button onclick="addResults12('${username}', 1)">5</button>`;
}

function addResults12(username, x) {
    database[username] += x;
    localStorage.setItem(databaseKey, JSON.stringify(database));
    startTest13(username);
}

function startTest13(username) {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = `<h2>что это - ∑</h2>
                                <p></p>
                                <button onclick="addResults13('${username}', 1)">Крутой мужщина</button>
                                <button onclick="addResults13('${username}', 0)">сумма</button>`;
}

function addResults13(username, x) {
    database[username] += x;
    localStorage.setItem(databaseKey, JSON.stringify(database));
    startTest14(username);
}

function startTest14(username) {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = `<h2>школьник прыгнул с крыши. Что он сделает</h2>
                                <p></p>
                                <button onclick="addResults14('${username}', 0)">умрет</button>
                                <button onclick="addResults14('${username}', 1)">станцует под дабстеп</button>`;
}

function addResults14(username, x) {
    database[username] += x;
    localStorage.setItem(databaseKey, JSON.stringify(database));
    startTestlast(username);
}




function startTestlast(username) {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = `<h2>На сколько % ты рус</h2>
                                <div>
                                    <input type="range" id="rus" name="rus" min="0" max="101" />
                                    <label for="rus"></label>
                                </div>
                                <button onclick="addResultslust('${username}', 0)">Отправить</button>`;
}

function addResultslust(username) {
    const ans = document.getElementById('rus').value;
    if (ans == "100"){
        database[username] += 1;
    }
    localStorage.setItem(databaseKey, JSON.stringify(database));
    Main(username);
}
