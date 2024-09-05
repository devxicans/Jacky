import styles from "./page.module.css";

import { Section } from "./components/section";
import {Hero} from './components/sections';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container">
        <Section>
          <Hero/>
        </Section>
        <Section>
          
        </Section>
      </div>
    </main>
  );
}
