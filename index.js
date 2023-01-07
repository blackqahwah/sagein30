    let protoCategs = {

        screenshot: "function using AdobeAPI",

        myList: [],

        transList: [],

      
      
       
        select(selected) {

          const listenedUpon = document.getElementById('listenedUpon')

          listenedUpon.addEventListener("click", event => {

            if (event.target.nodeName == "BUTTON") {
          
              let opTion = event.target.textContent;

              let banner = document.getElementById('begin');

              banner.innerHTML = `Time to learn an ${opTion}. 
              Here's your ${opTion} for today: '${selected}' Translation: '${protoCategs.transList[i]}'`;

            }

            });


            let nxtBtn = document.getElementById('nxtBtn');

            let i = 0;

            nxtBtn.addEventListener("click", event => {

              i++;

              // how to hold the adder from working for 24hrs?

              let banner = document.getElementById('begin');
      
              let option = event.target.textContent;

              if (i < protoCategs.myList.length) {

                banner.innerHTML = `Here's your ${option}: '${protoCategs.myList[i]}', Translation: '${protoCategs.transList[i]}'`

              } else{

                banner.innerHTML = "I've run out of quotes for ya";

              }
      
            
            }   )
        },

       
        };
        

      let quoteCategs = Object.create(protoCategs);


    
      let mainList = [" في النهاية ، سنصبح جميعًا قصصًا", "أخلاقك تهمني أكثر من جمالك", "إذا تم العقل نقص الكلام"];

      let transList = ["In the end, we will all become stories.", "Your manners interest me more than your beauty.", "With sharp intellect, speech reduces."]


      function serveFirst() {

        for(let i = 0; i < mainList.length; i++) {

          quoteCategs.myList.push(mainList[i]);

          quoteCategs.transList.push(transList[i]);

        }

      }

      serveFirst();



       function pushToServe() {

       
          quoteCategs.select(quoteCategs.myList[0]);
        

      }

      pushToServe();
      


      // clickedCateg.select(clickedCateg.lines[x]);
      // can x above be determined by a loop to 
      // update after quote of subsequent number is passed?
      


       


    // dhad in 5

    // objects contain:

    // objects for proverbs, fed by an external arabic proverbs API 

    // object for words about a categ, each word in a categ as a sub-object for practice sentences.



function greaterThan(n) {
  return m => m > n;
}

let whichisGreater = greaterThan(10);

console.log(whichisGreater(11));2