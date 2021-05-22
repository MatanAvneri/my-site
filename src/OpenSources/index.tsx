import React from 'react'
import style from './OpenSources.module.scss'

const PROJECT_EXAMPLES: { name: string; link: string }[] = [
  {
    name: 'css-snippets',
    link: 'https://github.com/emilkowalski/css-effects-snippets',
  },
  {
    name: 'yap-csv',
    link: 'https://github.com/nielsen-oss/yap-csv',
  },
  {
    name: 'dockly',
    link: 'https://github.com/lirantal/dockly',
  },
]

const OpenSources: React.FC = () => {
  return (
    <section className={style.OpenSources}>
      <h2>Major contributor to projects such as:</h2>
      <div className={style.OpenSources__projects}>
        {PROJECT_EXAMPLES.map(({ name, link }) => (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            key={name}
            className={style.OpenSources__projects__project}
          >
            <label>{name}</label>
          </a>
        ))}
      </div>
    </section>
  )
}

export default OpenSources
