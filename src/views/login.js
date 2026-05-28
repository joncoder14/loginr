//crete the function tu render login or what ever you want

export function formLogin() {
  return `  <div class="w-screen h-screen flex justify-center items-center border">
      <form id="form-login" class="flex flex-col gap-2 p-3.5 border rounded bg-gray-100">
        <label class="text-xl" >Email</label>
        <input class="text-xl border rounded p-1" type="email" placeholder="Enter your email" required>
        <label class="text-xl" >Password</label>
        <input class="text-xl border rounded p-1" type="password" placeholder="Enter your password" required>
        <button id="btn-login" class="w-full border rounded-lg p-1 uppercase bg-violet-900
         text-amber-50 mt-5 hover:bg-violet-950 hover:text-gray-300 hover:scale-105 transition">login</button>
      </form>
    </div>`;
}
