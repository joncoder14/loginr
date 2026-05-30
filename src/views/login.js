//crete the function tu render login or what ever you want
import { router } from "../router";

const users = [
  {
    name: "juan",
    email: "juan@gmail.com",
    password: "123",
    role: "client",
    id: 1,
  },
  {
    name: "pedro",
    email: "pedro@gmail.com",
    password: "321",
    role: "admin",
    id: 1,
  },
];

export function formLogin() {
  return `  <div class="w-screen h-screen flex justify-center items-center border">
      <form id="form-login" class="flex flex-col gap-2 p-3.5 border rounded bg-gray-100">
        <label class="text-xl" >Email</label>
        <input name="email" class="text-xl border rounded p-1" type="email" placeholder="Enter your email" required>
        <label class="text-xl" >Password</label>
        <input name="password" class="text-xl border rounded p-1" type="password" placeholder="Enter your password" required>
        <button id="btn-login" class="w-full border rounded-lg p-1 uppercase bg-violet-900
         text-amber-50 mt-5 hover:bg-violet-950 hover:text-gray-300 hover:scale-105 transition">login</button>
      </form>
    </div>`;
}

export function events() {
  const formLogin = document.getElementById("form-login");
  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const { email, password } = Object.fromEntries(new FormData(formLogin));
    const foundUser = users.find(
      (user) => user.email === email && user.password === password,
    );
    if (foundUser) {
      localStorage.setItem(
        "user",
        JSON.stringify({ name: foundUser.name, role: foundUser.role }),
      );
      if (foundUser.role === "client") {
        history.pushState({}, "", "/client");
        router();
      }
    } else {
      alert("incorrecto");
    }
  });
}
