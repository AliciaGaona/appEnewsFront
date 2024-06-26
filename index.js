

function consumeApiCatalogos(){
fetch('http://127.0.0.1:8000/getPages')
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
}