import { Router } from 'express';

export const scriptRouter: Router = (() => {
  const router = Router();

  router.get('/', (_req, res) => {
    
    
    const scriptTemplate = `

    function get(url='') {
        return fetch(url)
            .then(response => response.json())
            .catch(error => {
                console.error('Error:', error)
                throw error;   
            });
    }


    const iconLinks = document.head.querySelectorAll('link[rel="icon"]');
    
    var originalIcons = [];

    iconLinks.forEach(link => {
        originalIcons.push(link.href);
    });
    const dataId = document.currentScript.getAttribute('data-id');

    //todo: update this url to the correct endpoint
    const url = \`http://localhost:3000/api/getDetails/\${dataId}\`;


    post(url,{id:dataId}).then(data => {
        const {listOfEmojis,intervalTime:changeIconSeconds} = data;
        console.log({listOfEmojis,changeIconSeconds})
        var intervalId;
        var index = 0;
        var resetIndex=0;
        var svgDataUri = [];
        listOfEmojis.forEach(emoji => {
            svgDataUri.push(\`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">\${emoji}</text></svg>\`);
        }


        function changeFavicon(){
            iconLinks.forEach(link => {
                
                link.href = svgDataUri[index];
                link.type = 'image/svg+xml'; // Ensure correct MIME type
                index = (index + 1) % svgDataUri.length;
    
            });
        }
    
        fuction resetFavicon(){
            resetIndex=0;
            clearInterval(intervalId);
            iconLinks.forEach(link => {
                link.href = originalIcons[resetIndex];
                resetIndex = (resetIndex + 1) % originalIcons.length;
            });
        }
    
    
        function startIconChange(){
            intervalId = setInterval(changeFavicon,changeIconSeconds * 1000);
        }
        
        document.addEventListner('VisibilityChange', function(){
            clearInterval(intervalId);
            if(document.hidden){
            setTimeout(startIconChange,  1000); //start after 1 second
            }else{
                resetFavicon();
            }
        });
    
        window.addEventListener("focus", function () {
            clearInterval(intervalId);
            resetFavicon();
        });
    
        if (document.hidden) {
            startTitleChange();
        }
    }) .catch(error => {
        console.error('Error in fetching data', error);
    });
    
  `;

    res.setHeader('Content-Type', 'application/javascript');
    res.send(scriptTemplate);
  });
  return router;
})();
