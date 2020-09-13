
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");


const generateHTML = require("input")

const writeFileAsync = util.promisify(fs.writeFile);


function promptUser() {
  return inquirer.prompt([
      {
          type: "input",
          name: "namePointGod",
          message: "Enter name of player: "
      },
      {
          type: "input",
          name: "mvpPointGod",
          message: "Enter Number of mvps of player: "
      },
      {
          type: "input",
          name: "championshipsPointGod",
          message: "Enter number of championships of player: "
      },
      {
          type: "input",
          name: "yearsproPointGod",
          message: "Enter number of yearspro of player: "
      },
      {
          type: "input",
          name: "nameShootingGuard",
          message: "Enter name of player: "
      },
      {
          type: "input",
          name: "mvpShootingGuard",
          message: "Enter number of mvps of player "
      },
      {
          type: "input",
          name: "championshipsShootingGuard",
          message: "Enter number of championships of player "
      },
      {
          type: "input",
          name: "yearsproShootingGuard",
          message: "Enter number of yearspro player: "
      },
      {
          type: "input",
          name: "namePointForward",
          message: "Enter name of player: "
      },
      {
          type: "input",
          name: "mvpPointFoward",
          message: "Enter number of mvps of player: "
      },
      {
          type: "input",
          name: "championshipsPointFoward",
          message: "Enter number of championships of player: "
      },
      {
          type: "input",
          name: "yearsproPointForward",
          message: "Enter number of yearspro of player: "
      },

      {
          type: "input",
          name: "namePowerForward",
          message: "Enter name of player: "
      },
      {
          type: "input",
          name: "mvpPowerForward",
          message: "Enter number of mvps of player: "
      },
      {
          type: "input",
          name: "championshipsPowerForward",
          message: "Enter number of championships of player: "
      },
      {
          type: "input",
          name: "yearsproPowerForward",
          message: "Enter number of yearspro of player: "
      },
      

      {
          type: "input",
          name: "nameCenter",
          message: "Enter name of player: "
      },
      {
          type: "input",
          name: "mvpCenter",
          message: "Enter number of mvps of player: "
      },
      {
          type: "input",
          name: "championshipsCenter",
          message: "Enter number of championships of player:"
      },
      {
          type: "input",
          name: "yearsproCenter",
          message: "Enter number of yearspro of player: "
      },
     
  ]);
}


async function init() {
  console.log("")
   {
      const answers =  promptUser();

      const html = generateHTML(answers);
 
     writeFileAsync("index.html", html);

      console.log("");
  } c (err) {
      console.log(err);
  }
}

init();