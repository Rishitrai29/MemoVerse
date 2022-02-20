
const add_todo = () => {
  let addtitle = document.getElementById("addtitle").value;
  let adddesc = document.getElementById("adddesc").value;
  let adddate = document.getElementById("adddate").value;

  let todos = [];

  //string
  let localTodos = localStorage.getItem("todos");

  if (localTodos != null) {
    todos = JSON.parse(localTodos);
  }

  let todoObject = {
    addtitle: addtitle,
    adddesc: adddesc,
    adddate: adddate,
    id: Math.trunc(Math.random() * 1000),
  };

  todos.push(todoObject);

  localStorage.setItem("todos", JSON.stringify(todos));

  show_todo();

  //case:

  //
  // localStorage.setItem(todos, [{addtitle, adddesc},{addtitle, adddesc},{addtitle, adddesc}]);

  //todos=>[]
};

//show the data

const show_todo = () => {
  let todoString = localStorage.getItem("todos");

  let content = "";

  if (todoString == null) {
    //no todo
    content += "<h3 class='text-white'>No Memories , Add One</h3>";
  } else {
    let todos = JSON.parse(todoString);
    for (let todo of todos.reverse()) {
      content +=
        `
              <div class='card mt-2'>
                <div class='card-body'>
                       <p>${todo.adddate}</p>
                       <h3>${todo.addtitle}</h3>
                       <p>${todo.adddesc}</p> 
                </div>    
              </div>
              
              
              `;
    }
  }

  document.getElementById("main-content").innerHTML = content;
};


let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

show_todo();