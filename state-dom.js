const list = document.querySelector("#list");
const form = document.querySelector("#form");
const inp = document.querySelector("#inp");
const btn = document.querySelector("#btn");
const ul = document.querySelector("#ul");

const array = [
  {
    text: "первое дело",
    done: false,
  },
  {
    text: "второе дело",
    done: false,
  },
  {
    text: "третье дело",
    done: false,
  },
  {
    text: "четвертое дело",
    done: false,
  },
  {
    text: "пятое дело",
    done: false,
  },
];

function render(arr) {
  ul.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement("li");
    const remov = document.createElement("button");

    li.textContent = arr[i].text;
    remov.textContent = "❌";

    remov.addEventListener("click", (e) => {
      remove(i);
    });

    const inp2 = document.createElement('input')
    inp2.type = 'checkbox'
    inp2.checked = array[i].done

    
    if(inp2.checked === true) {
        li.style.textDecoration = 'line-through'
    }else {
        li.style.textDecoration = 'none'
    }

    inp2.addEventListener('click', (e) => {
        chekTodo(i)
    })

    ul.append(li);
    li.prepend(inp2)
    list.append(ul);
    li.append(remov);
    li.style.listStyleType = 'none'
  }
}

render(array);

function remove(index) {
  array.splice(index, 1);
  render(array);
}

function addTodo(text) {
  array.push({
    text: text,
    done: false,
  });
  render(array);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inp.value) {
    addTodo(inp.value);
    inp.value = "";
  }
});

function chekTodo(index){
array[index].done = !array[index].done
console.log(array)
render(array)
}
