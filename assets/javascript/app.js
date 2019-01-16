 var correctAns = 0;
 var incorrectAns = 0;
 var unanswered = 0;
 var counter = 60;
 var timerCountdown = document.getElementById("countdown");
 var displayResults = document.getElementById("results");
 var displayQuestions = document.getElementById("questions");

 var gameQuestions = [{
             q: "What is Batman's real name?",
             a: ["Clark Kent", "Bruce Williams", "Bruce Wayne", "Brian Waynes"],
             c: "Bruce Wayne"
       },
       {
             q: "What is Superman weak against?",
             a: ["The Sun", "Bats", "Kryptonite", "Samsonite"],
             c: "Kryptonite"
       },
       {
             q: "How did Spiderman get his powers?",
             a: ["Radioactive Spider", "Radioactive Experiment", "Alien",
                   "Born with it"
             ],
             c: "Radioactive Spider"
       },
       {
             q: "Where was Superman born?",
             a: ["Earth", "Pluton", "Crypton", "Krypton"],
             c: "Krypton"
       },
       {
             q: "What is Spiderman's real name?",
             a: ["Peter Pan", "Peter Griffin", "Peter Parker", "Peter Piper"],
             c: "Peter Parker"
       },
       {

             q: "Who is NOT a member of the Justice League?",
             a: ["Batman", "Hawkgirl", "Martian Manhunter", "Catwoman"],
             c: "Catwoman"
       },
       {
             q: "Which one is not a Green Lantern?",
             a: ["Berry Allen", "Hal Jordan", "Alan Scott", "John Stewart"],
             c: "Berry Allen"
       },
       {
             q: "What newspaper did Spiderman work for?",
             a: ["The Daily Planet", "The Daily Bulge", "The Daily Chronicle",
                   "The Daily Paper"
             ],
             c: "The Daily Bulge"
       },
       {
             q: "What is Wonder Woman's name?",
             a: ["Selina Kyle", "Rachel Dawes", "Diana Price", "Lois Lane"],
             c: "Diana Price"
       },
       {
             q: "What is The Hulk's original color?",
             a: ["Green", "Gray", "Red", "Tan"],
             c: "Gray"
       }
 ];
 var hide = document.getElementById("hide");

 hide.style.display = "none";

 function startGame() {
       hide.style.display = "";
       var buttStart = document.getElementById("title-div");
       buttStart.style.display = "none";

       displayResults.style.display = "none";

       function showResults() {
             displayQuestions.style.display = "none";
             displayResults.style.display = "block";
       }

       var timer = setTimeout(function () {
             showResults();
       }, counter * 1000);

       var countdown = setInterval(function () {
             counter--;
             timerCountdown.innerHTML = counter;
             if (counter === 0) {
                   
                  for (var i = 0; i < answerVal.children.length; i++) {
                        var val = "";
     
                        for (var j = 0; j < answerVal["Question" + i].length; j++) {
                              if (answerVal["Question" + i][j].checked) {
                                    val = answerVal["Question" + i][j].value;
                              }
                        }
     
                        if (val === gameQuestions[i].c) {
                              correctAns += 1;
                              val = "";
                        } else if (val === "") {
                              unanswered += 1;
                        } else {
                              incorrectAns += 1;
                        }
                  }
     
                  document.getElementById("correct").innerHTML = correctAns;
                  document.getElementById("incorrect").innerHTML = incorrectAns;
                  document.getElementById("unanswered").innerHTML = unanswered;
     
                  showResults();

                   stopCountdown();
                   showResults();
             }
       }, 1000);

       function stopCountdown() {
             clearInterval(countdown);
       }

       for (var i = 0; i < gameQuestions.length; i++) {
             var question = gameQuestions[i];

             var sec = document.createElement("section");
             sec.className = "q" + i;
             sec.innerHTML = `<hr> <p>${question.q}</p>`;
             document.getElementById("form").appendChild(sec);

             for (var j = 0; j < question.a.length; j++) {

                   var answer = question.a[j];

                   var div = document.createElement("div");
                   var radioBtn = `<input type="radio" name="Question${i}" value="${answer}">`
                   div.innerHTML = radioBtn + " " + answer;

                   document.querySelector(".q" + i).appendChild(div);
             }
       }



       var answerVal = document.forms["form"];

       answerVal.addEventListener("submit", function (event) {
             event.preventDefault();
             stopCountdown();

             for (var i = 0; i < answerVal.children.length; i++) {
                   var val = "";

                   for (var j = 0; j < answerVal["Question" + i].length; j++) {
                         if (answerVal["Question" + i][j].checked) {
                               val = answerVal["Question" + i][j].value;
                         }
                   }

                   if (val === gameQuestions[i].c) {
                         correctAns += 1;
                         val = "";
                   } else if (val === "") {
                         unanswered += 1;
                   } else {
                         incorrectAns += 1;
                   }
             }

             document.getElementById("correct").innerHTML = correctAns;
             document.getElementById("incorrect").innerHTML = incorrectAns;
             document.getElementById("unanswered").innerHTML = unanswered;

             showResults();
       });
 }