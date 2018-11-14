//This AI action is based on the website:
//www.edzuki.com
//The website is crafted by one John Tan
//However, this action is crafted by one Yash NARAIN
//Developer email: Yash NARAIN = replytoyashn@gmail.com
//John Tan = itsjohn756@gmail.com
//Conatct either for further info
//The Project name = Edzuki-Learning-Friend
//Project ID = edzuki-learning-friend
//Let's Begin!
'use strict';
const functions = require('firebase-functions');
const {
  dialogflow,
  BasicCard,
  Permission,
  Suggestions,
  Carousel,
  Image,
  Button,
} = require('actions-on-google');
const app = dialogflow({debug: true});

app.intent('actions_intent_NO_INPUT', (conv) => {
  // Use the number of reprompts to vary response
  const repromptCount = parseInt(conv.arguments.get('REPROMPT_COUNT'));
  if (repromptCount === 0) {
    conv.ask('Which subject would you like to hear about?');
  } else if (repromptCount === 1) {
    conv.ask(`Please say the name of a subject.`);
  } else if (conv.arguments.get('IS_FINAL_REPROMPT')) {
    conv.close(`Sorry we're having trouble. Let's ` +
      `try this again later. Goodbye.`);
  }
});

const subjectCard = {
  'Chemistry': {
    title: 'Chemistry',
    text: 'Press the button to visit our site for more info. Chemistry is an important subject for those who are willing to take it, and this website will provide you ' +
    'with the necessary skill for this subject.',
    image: new Image({
      url: 'https://static1.squarespace.com/static/5aeb6f7475f9ee2c69a03ff3/t/5b9ece1c6d2a73605fb4dabc/1539793462442/Chemistry+Edzuki+Pages.png?format=750w',
      alt: 'Chemistry as a subject',
    }),
    buttons: new Button({
      title:'Click for the Chemistry Page',
      url: `https://www.edzuki.com/chemistry/`,
    }),
    display:'WHITE',
  },
  'Art': {
    title: 'Art',
    text:'Press the button to visit our site for more info. Art is an important subject for those who are willing to take it, and this website will provide you ' +
    'with the necessary skill for this subject.',
    image: new Image({
      url: 'https://static1.squarespace.com/static/5aeb6f7475f9ee2c69a03ff3/t/5ba2c88fc2241b5e08b36e7c/1537394854232/Art+Edzuki.png?format=750w',
      alt: `Art as a subject`,
    }),
    buttons: new Button({
    title: 'Click for Art',
    url: `https://www.edzuki.com/art/`,
    }),
  display: 'WHITE',
  },
  'Biology': {
    title: 'Biology',
    text:'Press the button to visit our site for more info. Biology is an important subject for those who are willing to take it, and this website will provide you ' +
    'with the necessary skill for this subject.',
    image: new Image({
      url: 'https://static1.squarespace.com/static/5aeb6f7475f9ee2c69a03ff3/t/5b9ece0321c67c450617e9a3/1539793452178/Biology+Edzuki+Pages.png?format=750w',
      alt: 'Biology as a subject',
    }),
    buttons: new Button({
      title:'Click for the Biology Page',
      url: `https://www.edzuki.com/biology/`,
    }),
  display: 'WHITE',
 },
 'Computer Science': {
   title: 'Computer Science',
   text:'Press the button to visit our site for more info. Computer Science is an important subject for those who are willing to take it, and this website will provide you ' +
   'with the necessary skill for this subject.',
   image: new Image({
     url: 'https://static1.squarespace.com/static/5aeb6f7475f9ee2c69a03ff3/t/5b9ece3df950b7ed4b97b5cd/1539793471866/CS+Edzuki+Pages.png?format=750w',
     alt: 'CompSci as a subject',
   }),
   buttons: new Button({
    title:'Click for the Computer Science Page',
    url: `https://www.edzuki.com/compsci`,
   }),
 display: 'WHITE',
 },
 'English': {
   title: 'English',
   text:'Press the button to visit our site for more info. English is an important subject for those who are willing to take it, and this website will provide you ' +
   'with the necessary skill for this subject.',
   image: new Image({
     url: 'https://static1.squarespace.com/static/5aeb6f7475f9ee2c69a03ff3/t/5ba2c8dc40ec9a9d580ee1d4/1539793479135/English+Edzuki.png?format=750w',
     alt: 'English as a subject',
   }),
   buttons: new Button({
     title:'Click for the English Page',
     url: `https://www.edzuki.com/english/`,
   }),
 display: 'WHITE',
 },
 'Film': {
   title: 'Film',
   text:'Press the button to visit our site for more info. Film is an important extra curricular activity for those who are willing to take it, and this website will provide you ' +
   'with the necessary skill for this subject.',
   image: new Image({
     url: 'https://static1.squarespace.com/static/5aeb6f7475f9ee2c69a03ff3/t/5ba2c91c4fa51af6c557e0cd/1539793485826/Film+and+Screenplay+Edzuki.png?format=750w',
     alt: 'Film',
   }),
   buttons: new Button({
     title:'Click for the Film Page',
     url: `https://www.edzuki.com/film/`,
   }),
 display: 'WHITE',
 },
 'Geography': {
   title: 'Geography',
   text:'Press the button to visit our site for more info. Geography is an important subject for those who are willing to take it, and this website will provide you ' +
   'with the necessary skill for this subject.',
   image: new Image({
     url: 'https://static1.squarespace.com/static/5aeb6f7475f9ee2c69a03ff3/t/5bad51ed24a694b3abf5fe19/1539793503136/Geography+Edzuki+Page.png?format=750w',
     alt: 'Geography as a subject',
   }),
   buttons: new Button({
    title:'Click for the English Page',
    url: `https://www.edzuki.com/geo/`,
   }),
 display: 'WHITE',
 },
 'History': {
   title: 'History',
   text:'Press the button to visit our site for more info. History is an important subject for those who are willing to take it, and this website will provide you ' +
   'with the necessary skill for this subject.',
   image: new Image({
     url: 'https://static1.squarespace.com/static/5aeb6f7475f9ee2c69a03ff3/t/5ba17a58cd8366e3246d088a/1539793511244/History+Edzuki+Pages.png?format=750w',
     alt: 'History as a subject',
   }),
   buttons: new Button({
     title:'Click for the History Page',
     url: `https://www.edzuki.com/history/`,
   }),
 display: 'WHITE',
 },
 'Mathematics': {
   title: 'Maths',
   text:'Press the button to visit our site for more info. Maths is an important subject for those who are willing to take it, and this website will provide you ' +
   'with the necessary skill for this subject.',
   image: new Image({
     url: 'https://static1.squarespace.com/static/5aeb6f7475f9ee2c69a03ff3/t/5b9ed15c562fa7fce8ad8ae7/1539793520209/Mathematics+Edzuki+Pages.png?format=750w',
     alt: 'Maths as a subject',
   }),
   buttons: new Button({
     title:'Click for the Maths Page',
     url: `https://www.edzuki.com/maths/`,
   }),
 display: 'WHITE',
 },
 'Medicine': {
   title: 'Medicine',
   text:'Press the button to visit our site for more info. Medicine is an important subject for those who are willing to take it, and this website will provide you ' +
   'with the necessary skill for this subject.',
   image: new Image({
     url: 'https://static1.squarespace.com/static/5aeb6f7475f9ee2c69a03ff3/t/5ba2c8c3562fa74fbd1c4260/1539793526666/Medicine+Edzuki+page.png?format=750w',
     alt: 'Medicine as a subject',
   }),
   buttons: new Button({
     title:'Click for the Medicine Page',
     url: `https://www.edzuki.com/medicine/`,
   }),
 display: 'WHITE',
 },
 'Music': {
   title: 'Music',
   text:'Press the button to visit our site for more info. Music is an important subject for those who are willing to take it, and this website will provide you ' +
   'with the necessary skill for this subject.',
   image: new Image({
     url: 'https://static1.squarespace.com/static/5aeb6f7475f9ee2c69a03ff3/t/5ba2c8adc2241b5e08b36ffe/1539793534913/Music+Edzuki.png?format=750w',
     alt: 'English as a subject',
   }),
   buttons: new Button({
     title:'Click for the Music Page',
     url: `https://www.edzuki.com/music/`,
   }),
 display: 'WHITE',
 },
 'Physics': {
   title: 'Physics',
   text:'Press the button to visit our site for more info. Physics is an important subject for those who are willing to take it, and this website will provide you ' +
   'with the necessary skill for this subject.',
   image: new Image({
     url: 'https://static1.squarespace.com/static/5aeb6f7475f9ee2c69a03ff3/t/5b9ed1471ae6cf3f217a76e7/1539793543168/Physics+Edzuki+Pages.png?format=750w',
     alt: 'Physics as a subject',
   }),
   buttons: new Button({
     title:'Click for the Physics Page',
     url: `https://www.edzuki.com/physics/`,
   }),
 display: 'WHITE',
 },
};

app.intent('Selected subjects', (conv, {Subject}) => {
 var subject = conv.arguments.get('OPTION') || Subject;
 if (!conv.screen) {
   conv.ask(`I'm sorry, for this action, you need a screen!`);
 } else {
   conv.ask(`Maybe this would help. `, new BasicCard(subjectCard[subject]));
 }
 conv.ask(' Do you want to hear about a new subject?');
 conv.ask(new Suggestions('Yes', 'No'));
});


// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
