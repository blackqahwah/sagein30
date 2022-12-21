    let protoCategs = {

        objectList : [],
        screenshot: "function using AdobeAPI",
       
        select(selected) {

          const listenedUpon = document.getElementById('listenedUpon')

          listenedUpon.addEventListener("click", event => {

            if (event.target.nodeName == "BUTTON") {
          
              let clickedButton = event.target.textContent;

              let banner = document.getElementById('begin');

              banner.innerHTML = `Time to learn an ${clickedButton}. 
              Here's your ${clickedButton} for today: '${selected}'`;

            }

            });
        },

       
        };

        

      let quoteCategs = Object.create(protoCategs);

      let serverList = [];
      let mainList = ["kayf?", "khayr?", "min wayn int?!"] 
  
       function pushToServe() {

          serverList.push(mainList[0]);

          quoteCategs.objectList.push(serverList[0]);

          quoteCategs.select(quoteCategs.objectList[0]);

         
      }
    
      pushToServe();


      let reloadBtn = document.getElementById('doneBtn');


      reloadBtn.addEventListener("click", event => {
      
       mainList.shift();

       serverList.shift();

       quoteCategs.objectList.shift();

       console.log(mainList[0]);

       event.preventDefault();
    
      }   )

    
       
    
     

      // clickedCateg.select(clickedCateg.lines[x]);
      // can x above be determined by a loop to 
      // update after quote of subsequent number is passed?
      


       


    // dhad in 5

    // objects contain:

    // objects for proverbs, fed by an external arabic proverbs API 

    // object for words about a categ, each word in a categ as a sub-object for practice sentences.



