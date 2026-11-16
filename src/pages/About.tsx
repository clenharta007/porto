import { education, experience, profile, skills } from '../data/profile';
import { usePageTitle } from '../components/usePageTitle';

export default function About() {
  usePageTitle('About');

  return (
    <>
      <h1>About</h1>
      {profile.about.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {profile.resumeUrl && (
        <p>
          <a href={profile.resumeUrl} className="button" target="_blank" rel="noreferrer">
            Download résumé
          </a>
        </p>
      )}

      <section className="section">
        <h2>Skills</h2>
        <div className="skills">
          {skills.map((s) => (
            <div key={s.category}>
              <h3 className="skills-category">{s.category}</h3>
              <ul className="tags">
                {s.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Experience</h2>
        <ol className="timeline">
          {experience.map((e) => (
            <li key={`${e.company}-${e.period}`} className="timeline-item">
              <div className="timeline-head">
                <strong>
                  {e.role} · {e.company}
                </strong>
                <span className="muted">{e.period}</span>
              </div>
              <p>{e.description}</p>
              {e.engagements?.map((g) => (
                <div key={g.client} className="engagement">
                  <div className="timeline-head">
                    <span className="engagement-client">Client: {g.client}</span>
                    <span className="muted">{g.period}</span>
                  </div>
                  <ul className="highlights">
                    {g.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <h2>Education</h2>
        <div className="timeline-head">
          <strong>{education.major}</strong>
          <span className="muted">{education.period}</span>
        </div>
        <p className="muted">GPA: {education.gpa}</p>
      </section>
    </>
  );
}
