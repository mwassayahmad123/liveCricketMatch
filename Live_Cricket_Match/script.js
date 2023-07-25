
function sleepFor(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) { /* do nothing */ }
  }
  
  
  function showMessageWithDelay(message, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        document.write(message);
        resolve();
      }, delay);
    });
  }
  

  function simulateBall() {
    return Math.floor(Math.random() * 7)+1;   }
  

  async function simulateOver(over) {
    await showMessageWithDelay(`Over # ${over} started`, 2000);
  
    let score = 0;
    let wickets = 0;
  
    for (let ball = 1; ball <= 6; ball++) {
      const runs = simulateBall();
  
      if (runs === 0) {
        await showMessageWithDelay("It's out!", 2000);
        wickets++;
      } else if (runs === 4) {
        await showMessageWithDelay("What a shot! It's a four!", 1000);
        score += 4;
      } else if (runs === 6) {
        await showMessageWithDelay("It's a six! Huge hit!", 1000);
        score += 6;
      } else {
        await showMessageWithDelay(`Single run scored: ${runs}`, 1000);
        score += runs;
      }
    }
  
    document.write(`Score: ${score}/${wickets}`);
    document.write("");
  }

  async function simulateMatch() {
    const overs = parseInt(prompt("Enter the number of overs:"));
    const team1 = prompt("Enter the name of Team 1:");
    const team2 = prompt("Enter the name of Team 2:");
  
    await showMessageWithDelay(`The match is between two teams: ${team1} vs ${team2}`, 1000);
    await showMessageWithDelay("Tossing the coin...", 3000);
    const tossResult = Math.random() < 0.5 ? team1 : team2;
    const battingTeam = tossResult;
  
    await showMessageWithDelay(`${tossResult} won the toss and chose to bat.`, 1000);
    await showMessageWithDelay(`${overs} Overs match started, ${battingTeam} is to bat.<br>`, 2000);
  
    
    for (let over = 1; over <= overs; over++) {
      await simulateOver(over);
    }
  
    
    const target = Math.floor(Math.random() * 101); 
    const chasingTeam = battingTeam === team1 ? team2 : team1;
  
    document.write(`First inning ends. ${battingTeam} scored ${target} runs.`);
    document.write("<br>"); 
  
    await showMessageWithDelay(`${overs} Overs match started, ${chasingTeam} needs ${target} runs to win.`, 2000);
  
    for (let over = 1; over <= overs; over++) {
      await simulateOver(over);
    }
  
    document.write(`Second inning ends. ${chasingTeam} scored ??? runs.`);
    document.write("<br>"); 
    const scoreTeam1 = 0; 
    const scoreTeam2 = 0; 
  
    if (scoreTeam1 > scoreTeam2) {
      document.write(`${team1} wins!`);
    } else if (scoreTeam1 < scoreTeam2) {
      document.write(`${team2} wins!`);
    } else {
      document.write("It's a tie!");
    }
  
    document.write(""); 
  }
  simulateMatch();
  