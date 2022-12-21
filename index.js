    let protoCategs = {

        screenshot: "function using AdobeAPI",
       
        select(selected) {

          const listenedUpon = document.getElementById('listenedUpon')

          listenedUpon.addEventListener("click", event => {

            if (event.target.nodeName == "BUTTON") {
          
              let opTion = event.target.textContent;

              let banner = document.getElementById('begin');

              banner.innerHTML = `Time to learn an ${opTion}. 
              Here's your ${opTion} for today: '${selected}'`;

            }

            });


            let nxtBtn = document.getElementById('nxtBtn');

            nxtBtn.addEventListener("click", event => {
      
              let banner = document.getElementById('begin');
      
              let option = event.target.textContent;
      
                    banner.innerHTML = `Here's your ${option}: ${selected}`

                   
             
          
            }   )
        },

       
        };

        

      let quoteCategs = Object.create(protoCategs);

      let mainList = ["kayf?", "khayr?", "min wayn int?!"];

       function pushToServe() {

          quoteCategs.select(mainList[0]);
  
      }
      


       function nextNow() {

        quoteCategs.select(mainList[1]);

     }


    
       
    
     

      // clickedCateg.select(clickedCateg.lines[x]);
      // can x above be determined by a loop to 
      // update after quote of subsequent number is passed?
      


       


    // dhad in 5

    // objects contain:

    // objects for proverbs, fed by an external arabic proverbs API 

    // object for words about a categ, each word in a categ as a sub-object for practice sentences.



