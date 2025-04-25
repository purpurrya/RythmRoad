import React, { useState } from 'react';

import '../css/styles.css';
import '../css/table_styles.css';
import '../css/quiz.css';

const questions = [
    {
      id: 1,
      text: 'Какой рок-группы является песня "Stairway to Heaven"?',
      type: 'single',
      options: ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Queen'],
      correctAnswer: 'Led Zeppelin',
    },
    {
        id: 2,
        text: 'Кто является основным гитаристом группы "The Rolling Stones"?',
        type: 'single',
        options: ['Кит Ричардс', 'Мик Джаггер', 'Джимми Пейдж', 'Эрик Клэптон'],
        correctAnswer: 'Кит Ричардс',
    },      
    {
      id: 3,
      text: 'Как называется техника игры на гитаре, при которой струны щипаются пальцами одной руки, а другой создаются аккорды?',
      type: 'single',
      options: ['Пальцевая техника', 'Стригинг', 'Плетение', 'Техникой альтернэйт-пика'],
      correctAnswer: 'Пальцевая техника',
    },
    {
      id: 4,
      text: 'Какая песня группы Nirvana стала международным хитом и сделала их популярными?',
      type: 'single',
      options: ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'],
      correctAnswer: 'Smells Like Teen Spirit',
    },
    {
      id: 5,
      text: 'Какой тип ударных инструментов часто используется в рок-группах для создания ритма?',
      type: 'single',
      options: ['Барабаны', 'Тимбалы', 'Кахон', 'Тарелки'],
      correctAnswer: 'Барабаны',
    },
    {
      id: 6,
      text: 'Как называется техника игры на ударных, при которой барабанщик использует пальцы для ударов по барабанам?',
      type: 'single',
      options: ['Ролл', 'Римшот', 'Фингерстайл', 'Галтел'],
      correctAnswer: 'Римшот',
    },
    {
      id: 7,
      text: 'Какой рок-гитарист известен своей техникой "свободной" игры на гитаре, использует огромное количество эффектов?',
      type: 'single',
      options: ['Джимми Хендрикс', 'Карлос Сэнтана', 'Эрик Клэптон', 'Джимми Пейдж'],
      correctAnswer: 'Джимми Хендрикс',
    },
    {
      id: 8,
      text: 'Какой жанр рок-музыки родился в 1970-х и характеризуется долгими импровизациями и использованием синтезаторов?',
      type: 'single',
      options: ['Панк-рок', 'Прогрессивный рок', 'Глэм-рок', 'Метал'],
      correctAnswer: 'Прогрессивный рок',
    },
    {
      id: 9,
      text: 'Как называется культовая рок-группа, которая выпустила альбом "The Dark Side of the Moon"?',
      type: 'single',
      options: ['The Doors', 'Pink Floyd', 'AC/DC', 'Led Zeppelin'],
      correctAnswer: 'Pink Floyd',
    },
    {
      id: 10,
      text: 'Какой тип гитары предпочитают многие рок-музыканты для игры в стиле метал?',
      type: 'single',
      options: ['Акустическая гитара', 'Классическая гитара', 'Электрогитара', '12-струнная гитара'],
      correctAnswer: 'Электрогитара',
    },
  ];

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  const question = questions[current];

  const handleInput = (value) => {
    setAnswers({ ...answers, [question.id]: value });
  };

  const next = () => {
    if (!answers[question.id]) return;
    if (answers[question.id] === question.correctAnswer) {
      setScore(score + 1);
    }

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      alert(`Спасибо за участие! Ваш результат: ${score + (answers[question.id] === question.correctAnswer ? 1 : 0)} из ${questions.length}`);
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-question">
        <p>{question.text}</p>

        {question.type === 'single' && (
          <div className="quiz-options">
            {question.options.map((opt) => (
              <label key={opt}>
                <span className="option-text">{opt}</span>
                <span className="option-control">
                  <input
                    type="radio"
                    name={`q${question.id}`}
                    value={opt}
                    checked={answers[question.id] === opt}
                    onChange={() => handleInput(opt)}
                  />
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      <button className="quiz-button" onClick={next}>
        Далее →
      </button>
    </div>
  );
}

export default Quiz;