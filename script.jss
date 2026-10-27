* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #f4f7fc;
    color: #17243c;
    line-height: 1.6;
}

.header {
    background: #ffffff;
    padding: 22px 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    border-bottom: 1px solid #e7ebf3;
}

.brand {
    display: flex;
    align-items: center;
    gap: 14px;
}

.logo {
    font-size: 38px;
}

.header h1 {
    font-size: 23px;
    color: #173c78;
}

.header p {
    font-size: 13px;
    color: #69778d;
}

.status {
    color: #16805d;
    font-size: 13px;
    font-weight: bold;
}

.navbar {
    background: #173c78;
    padding: 14px 8%;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
}

.navbar a {
    color: white;
    text-decoration: none;
    font-size: 14px;
}

.navbar a:hover {
    color: #a9d5ff;
}

.hero {
    padding: 75px 8%;
    background: linear-gradient(120deg, #173c78, #2864ad);
    color: white;
}

.eyebrow {
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 2px;
    margin-bottom: 12px;
}

.hero h2 {
    font-size: clamp(30px, 5vw, 48px);
    line-height: 1.2;
    margin-bottom: 20px;
}

.hero > p:not(.eyebrow) {
    max-width: 600px;
    color: #e0eaff;
    margin-bottom: 28px;
}

.primary-button {
    display: inline-block;
    padding: 12px 20px;
    background: white;
    color: #173c78;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
}

.primary-button:hover {
    background: #e8f0ff;
}

.content-section {
    padding: 55px 8%;
}

.section-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    margin-bottom: 25px;
}

.section-heading h2 {
    font-size: 30px;
}

.section-heading .eyebrow {
    color: #5072a8;
}

.notice-count {
    background: #e2eaff;
    color: #173c78;
    padding: 7px 13px;
    border-radius: 20px;
    font-size: 13px;
}

.filters {
    display: flex;
    gap: 14px;
    margin-bottom: 28px;
}

.filters input,
.filters select {
    padding: 13px;
    border: 1px solid #dce3ef;
    background: white;
    border-radius: 8px;
    font-size: 14px;
}

.filters input {
    flex: 1;
    min-width: 0;
}

.filters select {
    max-width: 200px;
}

.notice-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 22px;
}

.notice-card {
    background: white;
    border: 1px solid #e5eaf3;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 5px 20px rgba(25, 50, 90, 0.04);
    transition: transform 0.2s, box-shadow 0.2s;
}

.notice-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 28px rgba(25, 50, 90, 0.10);
}

.badge {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: bold;
    margin-bottom: 15px;
}

.academic {
    background: #e1edff;
    color: #2456a6;
}

.examination {
    background: #ffedce;
    color: #875500;
}

.event {
    background: #e6defe;
    color: #6240a4;
}

.general {
    background: #d9f5e7;
    color: #18724e;
}

.notice-card h3 {
    font-size: 19px;
    margin-bottom: 12px;
}

.notice-card > p {
    color: #68768a;
    font-size: 14px;
    margin-bottom: 24px;
}

.notice-footer {
    border-top: 1px solid #edf0f5;
    padding-top: 14px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    font-size: 11px;
    color: #77849a;
}

#noResults {
    padding: 25px 0;
    color: #69778d;
}

footer {
    background: #102b54;
    color: white;
    text-align: center;
    padding: 35px 20px;
}

footer h3 {
    margin-bottom: 8px;
}

footer p {
    font-size: 13px;
    color: #d0dcef;
    margin-top: 6px;
}

@media (max-width: 650px) {
    .header {
        padding: 18px 5%;
        align-items: flex-start;
    }

    .header h1 {
        font-size: 19px;
    }

    .status {
        display: none;
    }

    .navbar {
        padding: 14px 5%;
        gap: 18px;
    }

    .hero {
        padding: 55px 5%;
    }

    .content-section {
        padding: 40px 5%;
    }

    .section-heading h2 {
        font-size: 25px;
    }

    .filters {
        flex-direction: column;
    }

    .filters select {
        max-width: none;
    }

    .notice-grid {
        grid-template-columns: 1fr;
    }

    .notice-card {
        padding: 20px;
    }
}
