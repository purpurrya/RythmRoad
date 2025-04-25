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
    text: 'Какие техники относятся к игре пальцами на гитаре?',
    type: 'multiple',
    options: ['Пика', 'Фингерстайл', 'Плетение', 'Альтернэйт-пик'],
    correctAnswer: ['Пика', 'Фингерстайл'],
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
    id: 11,
    text: 'Какие из следующих групп относятся к жанру хард-рок?',
    type: 'multiple',
    options: ['AC/DC', 'Nirvana', 'Deep Purple', 'Coldplay'],
    correctAnswer: ['AC/DC', 'Deep Purple'],
  },
];

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  const question = questions[current];

  const handleInput = (value, isChecked) => {
    if (question.type === 'single') {
      setAnswers((prev) => ({ ...prev, [question.id]: value }));
    } else {
      setAnswers((prev) => {
        const currentAnswers = prev[question.id] || [];
        const updatedAnswers = isChecked
          ? [...currentAnswers, value]
          : currentAnswers.filter((v) => v !== value);
        return { ...prev, [question.id]: updatedAnswers };
      });
    }
  };

  const next = () => {
    if (!answers[question.id] || answers[question.id].length === 0) return;

    const userAnswer = answers[question.id];
    let isCorrect = false;

    if (question.type === 'single') {
      isCorrect = userAnswer === question.correctAnswer;
    } else if (question.type === 'multiple') {
      const correctSet = new Set(question.correctAnswer);
      const userSet = new Set(userAnswer);
      isCorrect =
        correctSet.size === userSet.size &&
        [...correctSet].every((val) => userSet.has(val));
    }

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (current < questions.length - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      const finalScore = score + (isCorrect ? 1 : 0);
      alert(`Спасибо за участие! Ваш результат: ${finalScore} из ${questions.length}`);
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

        {question.type === 'multiple' && (
          <div className="quiz-options">
            {question.options.map((opt) => (
              <label key={opt}>
                <span className="option-text">{opt}</span>
                <span className="option-control">
                  <input
                    type="checkbox"
                    name={`q${question.id}`}
                    value={opt}
                    checked={(answers[question.id] || []).includes(opt)}
                    onChange={(e) => handleInput(opt, e.target.checked)}
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
