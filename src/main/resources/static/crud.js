var nuevoid;
var db=openDatabase("itemDB",3306);
function limpiar (){
    document.getElementById("item").value="";
     document.getElementById("cliente").value="";
     document.getElementById("mesa").value="";
     //funcionalidad de los botones
     $(function(){
     $("#crear").click(function() {
      db.transaction(function(transaction){
      var sql="CREATE TABLE productos"+
              "(id INTEGER (100)NOT NULL PRIMARY KEY AUTOINCREMENT, " +
              "item VARCHAR (100) NOT NULL," +
              "cliente VARCHAR(100) NOT NULL")"+
      "mesa VARCHAR(100) NOT NULL";
      transaction.executesql(sql,undefined, function(){
      alert("Tabla creada satisfactoriamente");
  }, function(transaction,err){
      alert.err.message
  }}
      }} 
  $("#listar").click(function()){
      cargarDatos();
  }
  function cargarDatos(){
      $("#listaproductos").children().remove;
      db.transaction(function(transaction){
          var sql="SELECT* FROM productos ORDER BY id DESC000";
transaction.executesql(sql,undefined,function(transaction,result){
    if(result.rows.length){
        $("#listaproductos").append('<tr> <th>mesero</th><th>cliente</th><th>mesa</th><th>');
    for(var i=0;i<result.rows.length; i++){
      var row=result.rows.item(i);
      var item=row.item;
      var cliente=row.cliente;
            var mesa=row.mesa;
$("#listaproductos").append('<tr id="fila'+id+ '"class=reg_A'+id+'"><td><span class="mid">A'+
        id+'</span></td><td><span>'+item+'</span></td><td><span>'+
       cliente+'</span></td><td><Editar>''</span></td><td>Eliminar</td><td></td><tr>');

        
        
    }
    else{
$("#listaproductos").append('<tr> <td> colapsan=5 align="center"> No existen registros de productos</td></tr>');

        
    }
    ,function(transaction,err){
        alert(err.message)
    }
    }
}        
      }
  }
    }

