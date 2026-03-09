import './App.css';
import { FaGithub, FaInstagram, FaBlog, FaSun, FaMoon, FaDiscord } from "react-icons/fa";
import { useState } from 'react';

function App() {
  const [DarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!DarkMode);


  const links = [
    { id : 1, title: "Github 바로가기", url: "https://github.com/gilmw10/", icon: <FaGithub />, category: "coding" },
    { id : 2, title: "Instagram 바로가기", url: "https://www.instagram.com/m.juxy_/,", icon: <FaInstagram />, category: "sns"},
    { id : 3, title: "나의 기술 블로그", url: "https://velog.io/@mjuxy_/posts", icon: <FaBlog />, category: "coding"},
    { id : 4, title: "디스코드 서버", url: "https://discord.gg/gYArBQVK", icon: <FaDiscord />, category: "sns"},
  ];

  const [filter, setFilter] = useState("all"); 

  const filteredLinks = filter === "all"
    ? links
    : links.filter(link => link.category === filter);
    


  return (
    <div className={`app-container ${DarkMode ? 'dark' : ''}`}>
      {/*프로필*/}
      <header className="profile">
        <button className='theme-toggle' onClick={toggleDarkMode}>
          {DarkMode ? <FaSun /> : <FaMoon />}
        </button>
        
        <div className='profile-img'>👤</div> 
        <h1>@길명원</h1>
        <p>저의 링크트리입니다!</p>
      </header>

      {/*필터 버튼*/}
      <div className='filter-buttons'>
        {["all", "coding", "sns"].map((cat) => (
          <button
            key={cat}
            className={filter == cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/*목록 출력*/}
      <nav className='link-section'>
        {filteredLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="link-card"
          >
            <span className='icon'>{link.icon}</span>
            <span className='title'>{link.title}</span>
          </a>
        ))}
      </nav>

      
    </div>
  )
}

export default App