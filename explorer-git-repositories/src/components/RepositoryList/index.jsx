import { useState } from 'react'
import api from '../../services/api'

import { RepositoryItems } from '../RepositoryItems/index'

import './index.css'
import gitImage from '../../images/github-white.svg'

export function RepositoryList(props) {
  const [userName, setUserName] = useState()

  const [userData, setuserData] = useState({})

  const [repositories, setRepositories] = useState([])

  async function searchUser() {
    try {
      const { data } = await api.get(userName)

      setuserData(data)
    } catch (err) {
      alert(
        'Usuário não encontrado! Por favor, digite um nome de usuário válido!'
      )
      window.location.reload()
    }
  }

  async function searchRepos() {
    const { data } = await api.get(`${userName}/repos`)

    setRepositories(data)
  }

  function searchAll() {
    searchUser()
    searchRepos()
  }

  return (
    <section className="section">
      <header>
        <img src={gitImage} alt="" srcSet="" />
        <h1 className="title">github repositories explorer</h1>
      </header>

      <div className="input-content">
        <label htmlFor="user-name" className="sr-only">
          Nome do usuário
        </label>
        <input
          className="input"
          type="text"
          id="user-name"
          placeholder="Digite um nome de usuário"
          value={userName}
          onChange={event => setUserName(event.target.value)}
        />
        <button className="button" type="submit" onClick={searchAll}>
          Buscar Repositório
        </button>
      </div>

      <div className="container">
        <div className="info-user">
          <div className="user-avatar">
            <img
              src={
                userData.avatar_url
                  ? userData.avatar_url
                  : '../../images/github.png'
              }
              alt=""
            />
          </div>
          <div className="user-description">
            <a
              href={userData.html_url}
              title="Conhecer Repositório"
              target="_blank"
              className="title"
              rel="noreferrer"
            >
              {userData.name}
            </a>
            <p>{userData.bio}</p>
            <p>{userData.company}</p>
            <p>{userData.location}</p>
          </div>
        </div>

        <div className="content">
          <ul>
            {repositories.map(repository => {
              return (
                <RepositoryItems
                  key={repository.name}
                  repository={repository}
                />
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
