import setupColaGenerator from "./classes/colaGenerator.js";
import VendingMachineEvents from "./classes/vendingMachineEvents.js";

const vendingMachineEvents = new VendingMachineEvents();


(async function () {
    await setupColaGenerator();
    vendingMachineEvents.bindEvent();
})()
