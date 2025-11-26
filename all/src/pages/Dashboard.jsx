import React from "react";
import { Link } from "react-router-dom";
import { FaClipboardList, FaStream, FaArrowRight } from "react-icons/fa";

const highlights = [
  {
    title: "Track Tasks",
    description: "Stay on top of your to-dos and keep priorities aligned.",
    to: "/tasks",
    icon: <FaClipboardList size={28} color="#2563eb" />
  },
  {
    title: "Review Posts",
    description: "Edit and curate the latest updates for your audience.",
    to: "/posts",
    icon: <FaStream size={28} color="#2563eb" />
  }
];

const Dashboard = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eff6ff 0%, #f7fee7 100%)",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "960px",
          background: "#ffffff",
          borderRadius: "24px",
          padding: "48px 52px",
          boxShadow: "0 25px 60px rgba(15, 23, 42, 0.15)"
        }}
      >
        <p style={{ textTransform: "uppercase", color: "#2563eb", fontWeight: 600, letterSpacing: ".2em", marginBottom: "12px" }}>
          Welcome back
        </p>
        <h1 style={{ fontSize: "2.75rem", margin: "0 0 12px", color: "#0f172a" }}>
          Your productivity hub
        </h1>
        <p style={{ margin: "0 0 32px", color: "#475569", fontSize: "1.1rem", maxWidth: "560px" }}>
          Jump into tasks, refine posts, and keep your workflow organized with a couple of quick shortcuts below.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginBottom: "36px" }}>
          {highlights.map(card => (
            <div
              key={card.title}
              style={{
                border: "1px solid #e2e8f0",
                borderRadius: "18px",
                padding: "24px",
                background: "#f8fafc",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                transition: "transform 180ms ease, box-shadow 180ms ease"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 16px 30px rgba(37, 99, 235, 0.15)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {card.icon}
              <h3 style={{ margin: 0, fontSize: "1.35rem", color: "#0f172a" }}>{card.title}</h3>
              <p style={{ flex: 1, margin: 0, color: "#475569" }}>{card.description}</p>
              <Link
                to={card.to}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontWeight: 600,
                  color: "#2563eb",
                  textDecoration: "none"
                }}
              >
                Go now <FaArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        <div
          style={{
            borderRadius: "18px",
            padding: "28px",
            background: "linear-gradient(120deg, #2563eb 0%, #7c3aed 80%)",
            color: "#fff",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "20px",
            justifyContent: "space-between"
          }}
        >
          <div style={{ maxWidth: "560px" }}>
            <h2 style={{ margin: "0 0 8px" }}>Need a focus boost?</h2>
            <p style={{ margin: 0, opacity: 0.95 }}>
              Create a quick plan, review your open tasks, and celebrate progress with toast notifications as you go.
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              to="/tasks"
              style={{
                background: "#fff",
                color: "#2563eb",
                padding: "12px 24px",
                borderRadius: "999px",
                fontWeight: 700,
                textDecoration: "none"
              }}
            >
              View tasks
            </Link>
            <Link
              to="/posts"
              style={{
                border: "2px solid rgba(255,255,255,0.9)",
                color: "#fff",
                padding: "12px 24px",
                borderRadius: "999px",
                fontWeight: 700,
                textDecoration: "none"
              }}
            >
              View posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
