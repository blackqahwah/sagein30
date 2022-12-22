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

                   event.preventDefault();
             
          
            }   )
        },

       
        };
        

      let quoteCategs = Object.create(protoCategs);

      let mainList = new Map()
      
      mainList.set ("Qtone", "kayf?");
      mainList.set ("Qttwo", "khayr?");
      mainList.set ("Qtthree", "min wayn int?!");
    

       function pushToServe() {

          quoteCategs.select(mainList.get("Qtone"));
          mainList.delete("Qtone");
  
      }
      


       function nextNow() {

        
        console.log(mainList.has("Qtone"))
        quoteCategs.select(mainList.get("Qttwo"));

     }


    
       
    
     

      // clickedCateg.select(clickedCateg.lines[x]);
      // can x above be determined by a loop to 
      // update after quote of subsequent number is passed?
      


       


    // dhad in 5

    // objects contain:

    // objects for proverbs, fed by an external arabic proverbs API 

    // object for words about a categ, each word in a categ as a sub-object for practice sentences.



