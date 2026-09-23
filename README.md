# Rayhan's Digital Canvas

Build a personal portfolio website for Mohammed Rayhan, a second-year Computer Science Engineering student at REVA University, Bengaluru, building toward a career in GenAI and cloud engineering.

DESIGN STYLE:
- Light theme with a glassmorphism ("frosted glass" / "mirror") UI aesthetic — translucent, blurred-background cards and panels with soft shadows and subtle borders, inspired by modern animated portfolio sites seen on Dribbble.
- Clean, modern sans-serif typography, generous whitespace, subtle scroll-in animations/transitions on sections and cards.
- No headshot photo — use a clean abstract/geometric hero visual or icon-based illustration instead of a person photo.

SECTIONS (single-page site with smooth-scroll nav):

1. HERO / ABOUT
- Name: Mohammed Rayhan
- Tagline: Computer Science Engineering student focused on GenAI, RAG systems, and cloud deployment
- Short bio: Second-year CSE student at REVA University, Bengaluru. Member of the department's DSA Club. Builds GenAI/RAG applications and explores cloud deployment (Azure). Strong interest in technology ethics and responsible AI development. Long-term goal: work as a software developer at a top-tier tech company (aspiring toward Google), ideally based in a city like New York or London.

2. PROJECTS (card grid, each with title, short description, tech stack tags, and a "View on GitHub" link)
- LexiRAG — A RAG-based legal document assistant with a hybrid architecture: local inference via Ollama + Gemma 2B, with Groq and Gemini APIs as cloud fallbacks, plus regional language support. Hardened with authentication, input validation, rate limiting, and environment-variable secrets management. Deployed on Microsoft Azure. GitHub: https://github.com/mohammedrayhanrayhan78-cell/LexiRAG_Project
- Hand-Tracking Virtual Steering Wheel — A computer vision project using MediaPipe and OpenCV that lets a user steer a virtual wheel using real-time hand-tracking gestures. GitHub: https://github.com/mohammedrayhanrayhan78-cell/ComputerVision
- Legal RAG India (Streamlit) — An earlier legal-document Q&A app built in a single ~6-7 hour session, using the Groq API with Llama 3.3 70B and a lightweight numpy-based keyword similarity search, deployed on Streamlit Community Cloud. GitHub: https://github.com/mohammedrayhanrayhan78-cell/legal-rag-india
- LexAI — An in-progress, production-grade rebuild of an AI legal intelligence platform, built on FastAPI, SQLAlchemy 2.x, PostgreSQL with pgvector, LangGraph, and Docker, with multi-LLM support (Gemini and Groq). Mark this one as "In Progress" with no external link.

3. SKILLS (grouped, badge/pill style)
- Languages: Python, Java, C, C++
- AI/GenAI: RAG, LLM/GenAI, Prompt Engineering
- Cloud & DevOps: Azure, Cloud Computing, Git, GitHub
- Web & Automation: REST APIs, n8n, HTML/CSS/JS, Streamlit

4. CONTACT
- Email: mohammedrayhanrayhan78@gmail.com
- GitHub: https://github.com/mohammedrayhanrayhan78-cell
- LinkedIn: https://www.linkedin.com/in/mohammed-rayhan-94973a384/
- Include a simple contact section with icon buttons/links for each (no contact form needed, just direct links)

Make it fully responsive (test well at both desktop and mobile widths), with a sticky/glass navbar linking to each section.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://rayhan-genai-folio.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1fa930f1-c7b7-4cf3-997e-f7a7c2f6f5e3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
