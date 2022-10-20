# Appanese

Appanese is a project to help students to memorize kanji and vocabulary for the Japanese Languege Proficiency Test(JLPT).
The kanjis and vocabularies used here come from Tangorin(https://tangorin.com), an online japanese dictionary. The content is subdivided in 5 levels of difficulty, according to the same 5 levels of JLPT, being N5 the most basic level, and N1 the proficient one.

The idea is to make a gamified platform to encourage students on learning in a funny and competitive way, the actual matching game consists in giving the kanji or the vocabulary, along with 4 possible translations, and trying to guess which one is the correct, according with the level selected. The game continues until you want to stop, and when you stop, it gives you the percentage of correct answers you had.

The application was developed with ReactJS, and the data on kanji and vocabulary were fetched from a CSV file downloaded from Tangorin. The styling was made using Styled Components.

![Alt text](src/screen_jap.png?raw=true)

The images used on this platform:
* japanese student at home page: Photo by <a href="https://unsplash.com/@seankkkkkkkkkkkkkk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">sean Kong</a> on <a href="https://unsplash.com/s/photos/japanese-student?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* Tokyo sight at background: Photo by <a href="https://unsplash.com/@jlhopes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Edelstein</a> on <a href="https://unsplash.com/s/visual/ebb78e93-12c9-4c4a-aa2b-c262fbeb0475?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

## To-Do List

- [ ] Create a User System(the Login is still dummy).
- [ ] Integrate the throphy system to each user, so when you guess 100% correct of a kanji or vocabulary level, you gain a throphy for your accomplishment.
- [ ] Make the Forum functional(actual forum still with dummy data).
- [ ] Create a timer for the memorizing game
- [ ] Make the search bar functional, possibiliting to see every kanji or vocabullary individually.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


