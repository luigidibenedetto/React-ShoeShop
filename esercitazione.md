# Esercitazione 26-02-21

Partite dal repository dell'ultima esercitazione.

Aggiungere un pulsante "Show products" che quando cliccato visualizzi una lista di card "Prodotto". Quando i prodotti sono visibili, il pulsante non deve essere visibile.

Creare un componente `Product` che rappresenti la card.
Il componente dovrà ricevere come props i dati relativi al prodotto.
Ogni card deve contenere un'immagine e sotto di essa il titolo.

Scegliete voi il nome e il numero di props che il componente deve ricevere, tenendo conto di quello che dovete visualizzare.

Le card devono essere visualizzate una di fianco all'altra, in modo ordinato.

## Bonus

Utilizzate [prop-types](https://www.npmjs.com/package/prop-types) per fare un controllo sulle `props`.


## Consegna

- create un branch `esercitazione-26-02-21` all'interno del vostro repository.
- fate il vostro commit (o ancora meglio più di uno)
- fate il push del vostro branch sul repository remoto (*`git push --set-upstram origin esercitazione-26-02-21`*)

Opzionale:

- spostatevi su `main` e fate il merge del vostro branch (*`git merge --no-ff esercitazione-26-02-21`*)
- fate il push di `main` sul repository remoto (*`git push`*)


## Dati dell'app

La variabile `data` in `App.js` contiene tutti i dati che devono essere visualizzati nell'applicazione.



```javascript
const data = {
  name: "HappyShoes",
  logo: "https://logoipsum.com/logo/logo-16.svg",
  company: "SZH Inc.",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  title: "Welcome to our brand new HappyShoes website!",
  description:
    "Lorem ipsum velit cillum excepteur adipisicing voluptate mollit. Laboris deserunt reprehenderit commodo id id minim non voluptate irure pariatur nulla.",
  products: [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    },
  ],
};
```

