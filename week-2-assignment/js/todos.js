renderHeader();

const todosUrl = "https://jsonplaceholder.typicode.com/todos";
const root = document.querySelector("#root");
const editModal = document.querySelector("#editModal");
let todos = [];
let todo;

// sayfa sayısı
let current_page = 1;

// her sayfada kaç satır bulunacağı
let rows = 15;

const renderTodos = (page = 1) => {
  root.innerHTML = "";
  // todoları listele
  const table = document.createElement("table");
  table.setAttribute("class", "table table-hover");

  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th scope="col" id="id-sorting">id</th>
      <th scope="col">Başlık</th>
      <th scope="col" id="userId-sorting">Kullanıcı Id</th>
      <th scope="col" id="status-sorting">Durum</th>
      <th scope="col"></th>
    </tr>
  `;
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  const renderItem = (item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td>${item.userId}</td>
      <td>${item.completed ? "Tamamlandı" : "Yapılacak"}</td>
      <td>
        <button class="btn btn-xs btn-danger remove" data-id=${
          item.id
        }>Sil</button>
        <button class="btn btn-xs btn-warning edit" data-id=${
          item.id
        }>Düzenle</button>
      </td>
    `;
    tbody.appendChild(tr);
  };

  page--;

  let start = rows * page;
  console.log({ start });
  let end = start + rows;
  console.log({ end });
  let paginatedItems = todos.slice(start, end);
  paginatedItems.forEach((item) => {
    renderItem(item);
  });

  table.appendChild(tbody);
  root.append(table);

  document.querySelectorAll(".remove").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = Number(e.currentTarget.getAttribute("data-id"));
      if (confirm("kaydı silmek istediğinize emin misiniz?")) {
        todos = todos.filter((x) => x.id !== id);
        renderTodos(current_page); // aynı sayfada kalmak için
      }
    });
  });

  document.querySelectorAll(".edit").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = Number(e.currentTarget.getAttribute("data-id"));
      todo = todos.find((todo) => todo.id == id);
      editModal.querySelector("#title").value = todo.title;
      editModal.querySelector("#completed").checked = todo.completed;
      editModal.style.display = "block";
      editModal.classList.add("show");
    });
  });

  // id sıralaması ("id" başlığına tıklayınca)
  document.querySelector("#id-sorting").addEventListener("click", () => {
    todos.sort((a, b) => b.id - a.id); // büyükten küçüğe sıralamaya yarar
    renderTodos(current_page);
  });

  // durum sıralaması ("durum" başlığına tıklayınca)
  document.querySelector("#status-sorting").addEventListener("click", () => {
    todos.sort((a, b) => {
      const nameA = a.completed;
      const nameB = b.completed;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    renderTodos(current_page);
  });

  // kullanıcı id sıralaması ("kullanıcı id" başlığına tıklayınca)
  document.querySelector("#userId-sorting").addEventListener("click", () => {
    todos.sort((a, b) => b.id - a.id); // büyükten küçüğe sıralamaya yarar
    renderTodos(current_page);
  });
};

// pagination (sayfalama) işlemi
document.querySelectorAll(".page-link").forEach((btn) => {
  btn.addEventListener("click", () => {
    let data_id = btn.getAttribute("data-id");
    current_page = Number(data_id);
    renderTodos(current_page);
  });
});

editModal.querySelector("#save").addEventListener("click", () => {
  todo.title = editModal.querySelector("#title").value;
  todo.completed = editModal.querySelector("#completed").checked;
  const index = todos.findIndex((t) => t.id == todo.id);
  todos[index] = todo;
  renderTodos();
  editModal.style.display = "none";
  editModal.classList.remove("show");
});

editModal.querySelectorAll(".close").forEach((button) => {
  button.addEventListener("click", () => {
    editModal.style.display = "none";
    editModal.classList.remove("show");
  });
});

fetch(todosUrl)
  .then((resp) => resp.json())
  .then((data = []) => {
    todos = data;
    renderTodos();
  })
  .catch((error) => {
    errorLogger(error);
  });

// sıralama ödevi algoritması
// table thead kısmındaki sıralama yapılacak kolonlara event listener eklenecek.
// event listener hangi kolon için tıklanıyorsa
// sort metodu kullanılarak sıralama yapılacak
// sıralanmış todos'todus içerisine atılacak
// renderTodos metodu çalıştırılacak.
