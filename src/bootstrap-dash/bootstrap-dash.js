const apiUrl= 'https://picsum.photos/200'

window.onload = function (){
  // $.getJSON("ajax/test.json", function(data){
  //   console.log('data', data)
  // })
  $.ajax({
    url:apiUrl,
    contentType: 'aplication/json',
    dataType: 'json',
    success: function(result){
      console.log('result', result)
      let resultAuthor = result[10].author
      console.log('resultAuthor', resultAuthor)
      
      }
    })
}
    
    
 
