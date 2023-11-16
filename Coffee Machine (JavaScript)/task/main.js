// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let initWater = 400;
let initMilk  = 540;
let initBeans = 120;
let initMoney = 550;
let initCups = 9;

let initAction;


while (initAction !== "exit") {
    initAction = input("Write action (buy, fill, take, remaining, exit): \n")

    function remaining() {
        console.log(`The coffee machine has:
    ${initWater} ml of water
    ${initMilk} ml of milk
    ${initBeans} g of coffee beans
    ${initCups} disposable cups
    $${initMoney} of money`);
    }

    function buy() {
        let buyQuestion = Number(input(`What do you want to buy? 
    1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: \n`));

        function CupOfCoffee(water, milk, beans, cups, cost) {
            this.water = water;
            this.milk = milk;
            this.beans = beans;
            this.cups = cups;
            this.cost = cost;
        }

        let suppliesAvailable = [initWater, initMilk, initBeans, initCups];
        let suppliesName = ["water, milk, beans, cups"];
        let espresso = new CupOfCoffee(250, 0, 16, 1, 4);
        let latte = new CupOfCoffee(350, 75, 20, 1, 7);
        let cappuccino = new CupOfCoffee(200, 100, 12, 1, 6);
        let status = 1;

        switch (buyQuestion) {
            case 1:
                let espressoSupplies = [espresso.water, espresso.milk, espresso.beans, espresso.cups];
                for (let i in espressoSupplies) {
                    if (suppliesAvailable[i] < espressoSupplies[i])
                    {
                        let missingSupply = suppliesName[i];
                        console.log(`Sorry not enough ${missingSupply}`);
                        status = 0;
                        break;
                    }
                }
                break;
            case 2:
                let latteSupplies = [latte.water, latte.milk, latte.beans, latte.cups];
                for (let i in latteSupplies) {
                    if (suppliesAvailable[i] < latteSupplies[i])
                    {
                        let missingSupply = suppliesName[i];
                        console.log(`Sorry not enough ${missingSupply}`);
                        status = 0;
                        break;
                    }
                }
                break;
            case 3:
                let cappuccinoSupplies = [cappuccino.water, cappuccino.milk, cappuccino.beans, cappuccino.cups];
                for (let i in cappuccinoSupplies) {
                    if (suppliesAvailable[i] < cappuccinoSupplies[i])
                    {
                        let missingSupply = suppliesName[i];
                        console.log(`Sorry not enough ${missingSupply}`);
                        status = 0;
                        break;
                    }
                }
                break;
            case "back":
                break;
        }

        switch (buyQuestion) {
            case 1:
                if (status === 0) {
                    break;
                } else {
                    console.log("I have enough resources, making you a coffee!");
                    initWater = initWater - espresso.water;
                    initMilk = initMilk - espresso.milk;
                    initBeans = initBeans - espresso.beans;
                    initCups = initCups - espresso.cups
                    initMoney = initMoney + espresso.cost;
                }
                break;
            case 2:
                if (status === 0) {
                    break;
                } else {
                    console.log("I have enough resources, making you a coffee!");
                    initWater = initWater - latte.water;
                    initMilk = initMilk - latte.milk;
                    initBeans = initBeans - latte.beans;
                    initCups = initCups - latte.cups;
                    initMoney = initMoney + latte.cost
                }
                break;
            case 3:
                if (status === 0) {
                    break;
                } else {
                    console.log("I have enough resources, making you a coffee!");
                    initWater = initWater - cappuccino.water;
                    initMilk = initMilk - cappuccino.milk;
                    initBeans = initBeans - cappuccino.beans;
                    initCups = initCups - cappuccino.cups;
                    initMoney = initMoney + cappuccino.cost
                }
                break;
            case "back":
                break;
        }

    }

    function fill() {
        let fillWater = Number(input("Write how many ml of water you want to add: \n"));
        let fillMilk = Number(input("Write how many ml of milk you want to add: \n"));
        let fillBeans = Number(input("Write how many grams of coffee beans you want to add: \n"));
        let fillCups = Number(input("Write how many disposable cups you want to add: \n"));
        initWater = initWater + fillWater;
        initMilk = initMilk + fillMilk;
        initBeans = initBeans + fillBeans;
        initCups = initCups + fillCups;
    }

    function take() {
        console.log(`I gave you $${initMoney}`);
        initMoney = 0;
    }

    switch (initAction) {
        case "buy":
            buy();
            break;
        case "fill":
            fill();
            break;
        case "take":
            take();
            break;
        case "remaining":
            remaining();
            break;
    }
}