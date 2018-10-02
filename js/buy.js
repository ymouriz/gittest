var shoppinglist = ['milk','carrots','eggs','yogurt'];

function print(message) {
  document.write( '<p>' + message + '</p>');
}



function printList(list) {
      var listHTML = '<ol>';
      for (var i = 0; i < list.lenght; i += 1) {
        listHTML += '<li>' + list[i] + '<li>';
      }
      listHTML += '</ol>';
      print (listHTML);

}

document.write( 'Testing');
printList(shoppinglist);
