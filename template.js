const axios = require('axios')
const { JSDOM } = require("jsdom")
const fs = require("fs")



axios.get('https://cdn.adimo.co/clients/Adimo/test/index.html')
    .then(response => {
        // HTML is inside response.data
        const dom = new JSDOM(response.data);

        // An empty array to store product objects. 
        const products = []; 
        const priceList = [];

        // Product object.
        const product = {
            // id: i, // for index
            title: "",
            imgUrl: "",
            price: 0
        };

        const outputJSON = JSON.stringify(product)
        fs.writeFileSync("product.json", outputJSON)

        // Checks for "h1" tags throughout dom and 
        const h1List = dom.window.document.querySelectorAll("h1");
        h1List.forEach(h1 => console.log(h1.textContent));


        // const srcList = dom.window.document.querySelectorAll("img");
        // srcList.forEach(src => console.log(src.textContent));

        const spanList = dom.window.document.querySelectorAll("span");
        spanList.forEach(span => priceList.push(span.textContent));
        console.log(priceList);
        // products.push(product);  // add the product objects into the empty array


        // console.log(response.data)


        //# is id
        //. is class   - try to use class over id to avoid multiple instances?


        // =============================================================================
        // =============================================================================

        const items = []; //object items in HTML

        let totalItems = 0; // set the counter for number of items to 0

        for (let i = 0; i < items.length; i++) {
            totalItems++;
        }
        console.log('The total number of items: ', totalItems);

        // =============================================================================
        // =============================================================================

        // need to total the price of all products and then find 
        //average after. Can I grab prices directly or should 
        // I put them all in an Array?



    })
    .catch(error => {
        //Print error if any occured
        console.log(error)
    })

