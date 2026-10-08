import React from "react";
import styles from "./OnlineSchedule.module.css";
import { useLang } from "@/lib/i18n";

export default function OnlineSchedule() {
  const { t } = useLang();

  return (
    <div className={styles.wrap}>
      {/* ── 10 OCT ── */}
      <div className={styles.day}>
        <div className={styles.dayHeader}>
          <div className={styles.dayIcon}>
            <span className={styles.dNum}>10</span>
            <span className={styles.dAbbr}>Oct</span>
          </div>
          <div>
            <div className={styles.dFull}>October 10, 2026</div>
            <div className={styles.dCount}>3 sessions</div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTime}>13:30–14:00</div>
          <div className={styles.cardBody}>
            <div className={styles.cardTitle}>Overview</div>
            <div className={styles.cardSpeaker}>Assoc. Prof. Dr. Worawat Meevasana</div>
            <div className={styles.cardAffiliation}>Suranaree University of Technology</div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTime}>14:00–15:00</div>
          <div className={styles.cardBody}>
            <div className={styles.cardTitle}>Quantum Technology Use Case (Optimization)</div>
            <div className={styles.cardSpeaker}>Dr. Jirawat Tangpanitanon</div>
            <div className={styles.cardAffiliation}>Co-Founder &amp; CEO, Quantum Technology Foundation (Thailand) [QTFT]</div>
          </div>
        </div>

        <div className={`${styles.card} ${styles.isTbc}`}>
          <div className={styles.cardTime}>15:00–17:00</div>
          <div className={styles.cardBody}>
            <div className={styles.cardTitle}>
              Quantum Fundamental (Basic)
              <span className={styles.badgeTbc}>TBC</span>
            </div>
            <div className={styles.cardSpeaker}>Dr. Tanapat Deesuwan (Aj. Om)</div>
            <div className={styles.cardAffiliation}>King Mongkut&apos;s University of Technology Thonburi</div>
          </div>
        </div>
      </div>

      {/* ── 17 OCT ── */}
      <div className={styles.day}>
        <div className={styles.dayHeader}>
          <div className={styles.dayIcon}>
            <span className={styles.dNum}>17</span>
            <span className={styles.dAbbr}>Oct</span>
          </div>
          <div>
            <div className={styles.dFull}>October 17, 2026</div>
            <div className={styles.dCount}>2 sessions</div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTime}>14:00–15:00</div>
          <div className={styles.cardBody}>
            <div className={styles.cardTitle}>Lecture 2 — qBraid Platform &amp; Optimization</div>
            <div className={styles.cardSpeaker}>Harshit Gupta, Ricky Young</div>
            <div className={styles.cardAffiliation}>qBraid</div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTime}>15:00–16:00</div>
          <div className={styles.cardBody}>
            <div className={styles.cardTitle}>Quantum AI</div>
            <div className={styles.cardSpeaker}>Asst. Prof. Dr. Chanwit Kaewkasi</div>
            <div className={styles.cardAffiliation}>Chief Technology Officer Centillex</div>
          </div>
        </div>
      </div>

      {/* ── 24 OCT ── */}
      <div className={styles.day}>
        <div className={styles.dayHeader}>
          <div className={styles.dayIcon}>
            <span className={styles.dNum}>24</span>
            <span className={styles.dAbbr}>Oct</span>
          </div>
          <div>
            <div className={styles.dFull}>October 24, 2026</div>
            <div className={styles.dCount}>3 sessions</div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTime}>14:00–15:00</div>
          <div className={styles.cardBody}>
            <div className={styles.cardTitle}>Quantum Hardware (NV-Center)</div>
            <div className={styles.cardSpeaker}>Asst. Prof. Dr. Sorawis Sangtawesin</div>
            <div className={styles.cardAffiliation}>Suranaree University of Technology</div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTime}>15:00–16:00</div>
          <div className={styles.cardBody}>
            <div className={styles.cardTitle}>Quantum Communication</div>
            <div className={styles.cardSpeaker}>Asst. Prof. Dr. Pruet Kalasuwan</div>
            <div className={styles.cardAffiliation}>Prince of Songkla University</div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTime}>16:00–17:30</div>
          <div className={styles.cardBody}>
            <div className={styles.cardTitle}>The Wall Beyond AI: Where Computation Meets Quantum</div>
            <div className={styles.cardSpeaker}>Dr. Choong Pak Shen &amp; Tan Chun Loong</div>
            <div className={styles.cardAffiliation}>Quantum Wings / Monash University Malaysia</div>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* ── TBC ── */}
      <div className={styles.tbcSectionLabel}>
        <div className={styles.dot}></div>
        <span className={styles.tbcSectionLabelText}>To Be Confirmed (TBC)</span>
      </div>

      <div className={styles.tbcCard}>
        <div className={styles.tbcCardTitle}>Online Onboarding &amp; Check-in</div>
        <div className={styles.tbcCardMeta}>Organizing Team · Time: Not set</div>
      </div>

      <div className={styles.tbcCard}>
        <div className={styles.tbcCardTitle}>Lecture 1: Qiskit Theory &amp; Fundamentals</div>
        <div className={styles.tbcCardMeta}>IBM Request / Aj. Nik · Time: Not set</div>
      </div>

      <div className={styles.tbcCard}>
        <div className={styles.tbcCardTitle}>Quantum Fundamental (Basic)</div>
        <div className={styles.tbcCardMeta}>Dr. Tanapat Deesuwan (Aj. Om) · Oct 10 · 15:00–17:00</div>
        <div className={styles.tbcCardAffiliation}>King Mongkut&apos;s University of Technology Thonburi</div>
        <div className={styles.tbcCardNote}>&#8627; Scheduled — Pending process confirmation</div>
      </div>

      <div className={styles.tbcCard}>
        <div className={styles.tbcCardTitle}>Quantum Machine Learning</div>
        <div className={styles.tbcCardMeta}>Dr. Dutsadee Tanataspee (Aj. Pipe) · Time: Not set</div>
      </div>
    </div>
  );
}
