const api_url =
  "https://axios-post-11431-default-rtdb.firebaseio.com/posts.json";

const api_url2 = "https://axios-post-11431-default-rtdb.firebaseio.com/posts";

async function fetchPosts() {
  try {
    const response = await axios.get(api_url);
    const posts = response.data || {};
    displayPosts(posts);
  } catch (error) {
    console.error("Error fetching posts:kiran branch", error);
  }
}

async function addPost() {
  const id = document.getElementById("postId").value;
  const title = document.getElementById("postTitle").value;

  if (!id || !title) {
    // ⚠️ Modified line to be different from main branch (will cause conflict)
    alert("⚠️ Please fill in both the Post ID and Title before adding!");
    return;
  }

  try {
    // 💬 Modified log message — same area as main branch edit
    await axios.post(api_url, { id, title });
    console.log("📝 Post successfully added by kiran's branch!");
    document.getElementById("postId").value = "";
    document.getElementById("postTitle").value = "";
    fetchPosts();
  } catch (error) {
<<<<<<< HEAD
    console.error("Error while adding new post in kiran branch:", error);
=======
    console.error("Error while adding new post in sachin branch:", error);
>>>>>>> 433f050dc7316de1947760bd07799b4bd740f945
  }
}

async function deletePost(key) {
  try {
    await axios.delete(`${api_url2}/${key}.json`);
    fetchPosts();
  } catch (error) {
    console.error("Error deleting post:", error);
  }
}

async function updatePost(key, oldData) {
  const newTitle = prompt("Enter new title:", oldData.title);

  if (!newTitle || newTitle === oldData.title) {
    return;
  }

  try {
    await axios.patch(`${api_url2}/${key}.json`, {
      id: oldData.id,
      title: newTitle,
    });
    fetchPosts();
  } catch (error) {
    console.error("Error updating post:", error);
  }
}

function displayPosts(posts) {
  const container = document.getElementById("postsList");
  container.innerHTML = "";

  Object.keys(posts).forEach((key) => {
    const { id, title } = posts[key];

    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
      <span><strong>${id}:</strong> ${title}</span>
      <div>
        <button class="delete-btn" onclick="deletePost('${key}')">Delete</button>
        <button class="add-btn" onclick='updatePost("${key}", ${JSON.stringify({
      id,
      title,
    })})'>Update</button>
      </div>
    `;

    container.appendChild(div);
  });
}

fetchPosts();
