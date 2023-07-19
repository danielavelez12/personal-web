import React from 'react';
import './index.css';

type Book = {
  title: string;
  completed: boolean;
}

const books: Book[] = [
  { title: "Art of Attack in Chess", completed: false },
  { title: "A Room of One&apos;s Own", completed: false },
  { title: "Dictionary of Obscure Sorrows", completed: false },
  { title: "The Lincoln Highway", completed: true },
  { title: "Atomic Habits", completed: true },
  { title: "The Elephant Vanishes", completed: true },
  { title: "The Three-Body Problem", completed: true },
  { title: "The Death and Life of Great American Cities", completed: true },
  { title: "On Palestine", completed: true },
  { title: "A Gentleman in Moscow", completed: true },
  { title: "Cloud Cuckoo Land", completed: true },
  { title: "Zen and the Art of Motorcycle Maintenance", completed: true },
  { title: "Uncanny Valley", completed: true },
  { title: "Sputnik Sweetheart", completed: true },
  { title: "One Hundred Years of Solitude", completed: true },
  { title: "Sapiens", completed: true },
  { title: "All the Light We Cannot See", completed: true },
  { title: "Norwegian Wood", completed: true },
  { title: "Zero to One", completed: true },
  { title: "The Goal: A Process of Ongoing Improvement", completed: true },
  { title: "Antifragile", completed: true },
  { title: "Crying in H-Mart", completed: true },
  { title: "Goodbye, Again", completed: true },
];

const Home = () => {
  return (
    <div className="app">
      <h1 className="title">Daniela Velez</h1>
      <p className="bio">
        Hi! I&apos;m Daniela and I&apos;m currently a software engineer at <a href="https://alza.app/">Alza</a>,
        a startup focused on empowering Latin Americans financially. I live in NYC and enjoy playing piano
        and reading! Here&apos;s a list of the books I&apos;m currently reading or have read recently:
      </p>
      <ul className="reading-list">
        {books.map((book, index) => (
          <li key={index} className={`book ${book.completed ? 'completed' : ''}`}>
            {book.title}
            {book.completed && <span> ✔</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
