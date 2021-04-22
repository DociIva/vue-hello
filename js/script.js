//console.log('Ciao');
//console.log('Vue', Vue);
/**
 * Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
 * Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data. 
 */

// 1 
const app = new Vue({
    el: '#app',
    data: {
        myClasses:'header-title primary',
        title:'Viaggiare',  //  titolo
        image:'https://i0.wp.com/www.ilsuperuovo.it/wp-content/uploads/2019/12/thumb-1920-44447.jpg?fit=1920%2C1200&ssl=1', // imagine
        alt:'image Doctor who tardis', // alt della foto
      
    }
});