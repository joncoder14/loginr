//crete the function tu render about or what ever you want

export function client() {
  return `<div class="flex justify-between p-5 bg-amber-600"><h1 id="title" class="text-2xl">client </h1><img class="size-5" src="src/assets/carr.png" alt="shopcar"></div>`;
}

export function addCarr() {
  document.getElementById("title").addEventListener("click", () => {
    alert("hola");
  });
}
