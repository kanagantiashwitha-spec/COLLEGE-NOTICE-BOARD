const form = document.getElementById("notice-form");
const noticesBox = document.getElementById("notices");
const message = document.getElementById("message");
const count = document.getElementById("notice-count");

// Load notices from the backend
async function loadNotices() {
  try {
    const response = await fetch("/api/notices");

    if (!response.ok) {
      throw new Error("Unable to load notices");
    }

    const notices = await response.json();

    count.textContent = `${notices.length} notice(s)`;
    noticesBox.replaceChildren();

    if (notices.length === 0) {
      noticesBox.textContent =
        "No notices available. Publish the first notice!";
      return;
    }

    notices.forEach((notice) => {
      const card = document.createElement("div");
      card.className = "notice-card";

      const title = document.createElement("h3");
      title.textContent = notice.title;

      const category = document.createElement("span");
      category.textContent = notice.category;

      const content = document.createElement("p");
      content.textContent = notice.content;

      const date = document.createElement("small");

      if (notice.created_at) {
        date.textContent = new Date(
          notice.created_at
        ).toLocaleDateString();
      }

      card.append(title, category, content, date);
      noticesBox.appendChild(card);
    });

  } catch (error) {
    count.textContent = "Unable to load notices.";
    console.error(error);
  }
}

// Publish a new notice
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  message.textContent = "Publishing notice...";

  const title = document.getElementById("title").value.trim();
  const category = document.getElementById("category").value;
  const content = document.getElementById("content").value.trim();

  const notice = {
    title: title,
    category: category,
    content: content
  };

  try {
    const response = await fetch("/api/notices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(notice)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.error || "Unable to publish notice"
      );
    }

    message.textContent = "Notice published successfully!";

    form.reset();

    await loadNotices();

  } catch (error) {
    message.textContent = error.message;
    console.error(error);
  }
});

// Load notices when the website opens
loadNotices();