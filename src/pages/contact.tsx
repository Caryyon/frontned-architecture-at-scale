import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

export default function Contact() {
  return (
    <>
      <Header titlePre="Contact" />
      <div className={sharedStyles.layout}>
        <h1 style={{ marginTop: 0 }}>Current Panelists</h1>
        <div className={contactStyles.name}>
          Cary Wolff - Senior Software Engineer @{' '}
          <ExtLink href="https://www.northwesternmutual.com/">
            Northwestern Mutual
          </ExtLink>
          {' | '}
          <ExtLink href="https://twitter.com/caryyondude">@caryyonDude</ExtLink>
        </div>
        <div className={contactStyles.name}>
          Jon Wong - Web Architect @{' '}
          <ExtLink href="https://www.coursera.org/">Coursera</ExtLink>
          {' | '}
          <ExtLink href="https://twitter.com/jnwng">@jnwng</ExtLink>
        </div>
        <div className={contactStyles.name}>
          Naz Delam - Production Engineer @{' '}
          <ExtLink href="https://www.netflix.com/">Netflix</ExtLink>
          {' | '}
          <ExtLink href="https://twitter.com/NazDelam">@NazDelam</ExtLink>
        </div>
        <div className={contactStyles.name}>
          Kyle Welch - Engineering Manager @{' '}
          <ExtLink href="https://www.eventbrite.com/">Eventbrite</ExtLink>
          {' | '}
          <ExtLink href="https://twitter.com/kylewelch">@kylewelch</ExtLink>
        </div>
        <div className={contactStyles.name}>
          Steph Orpilla - Developer @{' '}
          <ExtLink href="https://aws.amazon.com/">AWS</ExtLink>
          {' | '}
          <ExtLink href="https://twitter.com/_stephjs">@_stephjs</ExtLink>
        </div>
        <div className={contactStyles.name}>
          Ryan Burgess - Software Engineering Manager @{' '}
          <ExtLink href="https://www.netflix.com/">Netflix</ExtLink>
          {' | '}
          <ExtLink href="https://twitter.com/burgessdryan">
            @burgessdryan
          </ExtLink>
        </div>
        <div className={contactStyles.name}>
          Jonathan Creamer - Senior Engineer @{' '}
          <ExtLink href="https://www.microsoft.com/">Microsoft</ExtLink>
          {' | '}
          <ExtLink href="https://twitter.com/jcreamer898">@jcreamer898</ExtLink>
        </div>
        <div className={contactStyles.name}>
          Ruben - Software Developer @{' '}
          <ExtLink href="https://www.americanexpress.com/">
            American Express
          </ExtLink>
          {' | '}
          <ExtLink href="https://twitter.com/Infoxicador">@Infoxicador</ExtLink>
        </div>
      </div>
    </>
  )
}
