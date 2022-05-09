const $header = document.querySelector(".header")

$header.addEventListener("click", function(evt){
            console.log(evt)
})

const $btn =  $('#books');
console.log($btn)

const getBooks = () =>{
    console.log('books is live')
}

$btn.on("click", getBooks);

// const $mainBooks = $('books')

// $mainBooks.append('');

//variables
const url = "https://www.googleapis.com/books/v1/volumes?q=";

//elements references
const $content1 = $('.content1');
const $content2 = $('.title');
const $contentLarge = $('.content-large');
const $form = $('form');
const $input = $('input[type="text"]');

//event listeners
$form.on('submit',getBookData)


//create functions for the DOM to be manipulated

function getBookData(event){
    event.preventDefault()
    const userInput = $input.val();
  $.ajax({url:"https://www.googleapis.com/books/v1/volumes?q=" + userInput}).then(function(data){
      console.log(data.items[0])
      console.log('book data is ready')
    //   $content1.text(data.title)
    
      $('.content1').append(`<img src="${data.imageLinks}"/>`)
  }, function(error){
      console.log('something is wrong')
      console.log(error)
  })
}
