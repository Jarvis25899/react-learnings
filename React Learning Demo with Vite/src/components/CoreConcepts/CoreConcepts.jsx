import { CORE_CONCEPTS } from '../../data.js';
import CoreConcept from './CoreConcept.jsx';
import Section from '../Section.jsx';
import './CoreConcepts.css';

export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((item, index) => (
          <CoreConcept key={index} {...item} />
        ))}
        {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
      </ul>
    </Section>
  );
}
