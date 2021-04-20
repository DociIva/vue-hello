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
        title:'Viaggiare',
        image:'https://gametimers.it/wp-content/uploads/2020/08/Doctor_Who_Tardis.jpg'
    }
});