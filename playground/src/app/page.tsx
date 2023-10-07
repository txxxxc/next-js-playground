'use client'
import { useState } from 'react'
import { Button } from "./components/button"

export default function Home() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const login = () => {
    setIsLoggedIn(true)
  }
  return (
    <main>
      <img
        src="https://example.com/hero.jpg"
        alt="Landscape picture"
        width={800}
        height={500}
      />
      <div>
        <a href="/about">About Us</a>
      </div>
      <h1>Login Form</h1>
      {/*ユーザーIDとパスワードを含んだログインフォーム */}
      {isLoggedIn && <p>Logged in as {username}!!</p>}
      <label htmlFor="username">Username</label>
      <input
        onChange={handleUsernameChange}
        type="text" id="username" name="username" value={username} />
      <label htmlFor="password">Password</label>
      <input
        onChange={handlePasswordChange}
        type="text" id="password" name="password" value={password} />
      <button onClick={login} type="button"> login </button>
    </main>
  )
}
