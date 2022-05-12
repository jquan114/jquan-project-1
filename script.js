const $header = document.querySelector(".header")

$header.addEventListener("click", function (evt) {
    console.log(evt)
})

const $btn = $('#books');
console.log($btn)

const getBooks = () => {
    console.log('books is live')
}

$btn.on("click", getBooks);

// const $mainBooks = $('books')

// $mainBooks.append('');

//variables
const url = "https://api.itbook.store/1.0/search/";

//elements references
const $content1 = $('.content1');
const $content2 = $('.title');
const $contentLarge = $('.content-large');
const $form = $('form');
const $input = $('input[type="text"]');

//event listeners
$form.on('submit', getBookData)

// use to the forEach method for the arry of books 




//create functions for the DOM to be manipulated

function getBookData(event) {
    event.preventDefault()
    const userInput = $input.val();
    $.ajax({ 
        method: "GET",
        url: "https://api.itbook.store/1.0/search/" + userInput }).then(function (data)
                
           {

               console.log('book is ready')
            //    console.log(data)
        console.log(data.books)
        $content1.text(data.books[9].title)
        $content1.text(data.books[9].price)
        let imgs = data.books[0].image
         $('img').attr('src',imgs)        
        
         
        // $('.content1').append(`<img src="${data.image}">`)
           
    }, function (error) {
        console.log('something is wrong')
        console.log(error)
    });

}
