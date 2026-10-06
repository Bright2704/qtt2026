"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { dayByDaySchedule } from "@/data/programme";
import Icon from "./Icon";
import { asset } from "@/lib/asset";

export default function DayScheduleView() {
  const { t } = useLang();

  return (
    <div className="sched-container">
      {dayByDaySchedule.map((group) => (
        <div key={group.id} className="sched-day-block">
          {/* Day Group Header */}
          <div
            className="sched-day-header"
            style={group.sessions.length === 0 ? { marginBottom: 0 } : undefined}
          >
            <div>
              <span className="pill" style={{ fontSize: 12, padding: "3px 10px", marginBottom: 6 }}>
                {t(group.sessionType)}
              </span>
              <h3 className="sched-day-title">{t(group.dayLabel)}</h3>
            </div>
            <span style={{ fontSize: 13, color: "var(--text-muted)", fontStyle: "italic", maxWidth: 500 }}>
              {t(group.description)}
            </span>
          </div>

          {/* Sessions List */}
          <div>
            {group.sessions.map((sess) => (
              <div key={sess.id} className="sched-session-card">
                {/* Time & Duration */}
                <div className="sched-time-block">
                  <span className="sched-time-text">{sess.time}</span>
                  <span className="sched-duration-chip">
                    <Icon name="i-clock" size={13} />
                    {t(sess.duration)}
                  </span>
                  <div style={{ marginTop: 4 }}>
                    <span
                      className={`status ${sess.status === "Confirmed" ? "status--open" : "status--soon"}`}
                      style={{ fontSize: 11, padding: "2px 8px" }}
                    >
                      {sess.status === "Confirmed"
                        ? t({ th: "ยืนยันแล้ว", en: "Confirmed" })
                        : t({ th: "รอยืนยัน (TBC)", en: "TBC" })}
                    </span>
                  </div>
                </div>

                {/* Topic & Speaker Info */}
                <div>
                  <h4 style={{ margin: "0 0 6px 0", fontSize: "clamp(16px, 1.5vw, 18px)", lineHeight: 1.35 }}>
                    {t(sess.title)}
                  </h4>

                  {sess.detail && (
                    <p style={{ margin: "0 0 10px 0", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.5 }}>
                      {t(sess.detail)}
                    </p>
                  )}

                  <div className="sched-speaker-row">
                    <div className="sched-speaker-portraits">
                      {(sess.speaker.portraits ?? [{
                        name: sess.speaker.name,
                        photo: sess.speaker.photo ?? asset("/assets/speaker-placeholder.svg"),
                      }]).map((person) => (
                        <img
                          key={person.name.en}
                          src={person.photo}
                          alt={t(person.name)}
                          title={t(person.name)}
                          width={46}
                          height={46}
                          className="sched-speaker-avatar"
                        />
                      ))}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 15, color: "var(--text-strong)" }}>
                        {t(sess.speaker.name)}
                      </div>
                      {sess.speaker.role && (
                        <div style={{ marginTop: 3, display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                          <span className="pill" style={{ fontSize: 11, padding: "2px 8px", background: "rgba(109, 40, 217, 0.08)", color: "var(--indigo-800)", fontWeight: 500 }}>
                            {t(sess.speaker.role)}
                          </span>
                          {sess.speaker.org && (
                            <span style={{ fontSize: 12.5, color: "var(--text-muted)" }}>
                              {t(sess.speaker.org)}
                            </span>
                          )}
                        </div>
                      )}
                      {!sess.speaker.role && sess.speaker.org && (
                        <div style={{ fontSize: 12.5, color: "var(--text-muted)", marginTop: 2 }}>
                          {t(sess.speaker.org)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Link to Speakers Page */}
                <div>
                  <Link
                    href="/speakers"
                    className="btn btn--secondary btn--sm"
                    style={{ whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: 6 }}
                  >
                    <span>{t({ th: "ดูหน้า Speaker", en: "View Speaker" })}</span>
                    <Icon name="i-arrow" size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
