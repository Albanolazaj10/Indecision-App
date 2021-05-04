console.log('App.js is running');

//JSX = JavaScript XML
//if statements
//ternary operators
//logical and operator

//Challenge:
//only render the subtitle (and p tag) if subtitles exists - logical and operator
//render new p tag - if options.length > 0 "Here are your options" else " No options"


const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of...',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};


const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');


const render = () => {
  const template = (
    <div>
     <h1>{app.title}</h1>
     {app.subtitle && <p>{app.subtitle}</p>}
     <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p> 
     <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
     <button onClick={onRemoveAll}>Remove All</button>
     <ol>
       {
         app.options.map((option) => {
           return <li key={option}>{option}</li>;
         })
       }
      </ol>
      <form onSubmit={onFormSubmit}>
       <input type="text" name="option" />
       <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
render();
  






















//Shpjegim: Nese lengthi i app.options eshte me i madh se 0(qe eshte sepse eshte 2), atehere outputi do jete 'Here are your optoions',
//por nese options nuk ka length arehere outputi do jete 'No options'

// const user = {
//   name: 'Andrew',
//   age: 26,
//   location: 'Philadelphia'
// };
// function getLocation(location) {
//   if(location) {
//     return <p>Location: {location}</p>;
//   } 
// }
// const templateTwo = (
//     <div>
//       <h1>{user.name ? user.name : 'Anonymous'}</h1>
//       {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//       {getLocation(user.location)}
//     </div>
// );




