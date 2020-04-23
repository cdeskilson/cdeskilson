import React from "react"
import { config } from './config';
// interface AboutProps {
//   bio_config?: [string];
// }

export default function Work(props) {
  return (
    <div>
      <div>Work</div>
      <ul>
        {config.map(publication =>
          <li>
            <a href={publication.link} target="_blank">{publication.name}</a>
          </li>
        )}
      </ul>
    </div>
  )
};
