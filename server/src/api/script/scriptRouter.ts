import { env } from '../../config';
import { IGetUserAuthInfoRequest } from '@/utils/interfaces';
import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

export const scriptRouter: Router = (() => {
  const router = Router();

  router.get('/', (_req, res) => {
    const scriptTemplate = `

    function get(url='') {
        const tabrizData = localStorage.getItem('tabrizzData');
        if(tabrizData){
            const parsedData = JSON.parse(tabrizData);
            if(parsedData.hasOwnProperty('listOfEmojis') && parsedData.hasOwnProperty('intervalTime') && parsedData.hasOwnProperty('expires') && parsedData.expires > Date.now())
                {
            return Promise.resolve({listOfEmojis: parsedData.listOfEmojis,intervalTime:parsedData.intervalTime, localStorageData:true})
        }

        }
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
    const url = window?.location?.hostname === "localhost"
        ? \`http://localhost:3000/users/get-script-data/\${dataId}\`
        : \`https://www.tabrizz.com/users/get-script-data/\${dataId}\`;

    // const url = \`http://localhost:3000/users/get-script-data/\${dataId}\`;

    get(url,{id:dataId}).then(data => {
        const {listOfEmojis,intervalTime:changeIconSeconds,localStorageData} = data;
        if(!localStorageData){
            const localstorageData = {listOfEmojis:listOfEmojis,intervalTime:changeIconSeconds,expires:Date.now() + 1000 * 60 * 60 * 24 } // 24 hours
            
            localStorage.setItem('tabrizzData',JSON.stringify(localstorageData));
        }

        var intervalId;
        var index = 0;
        var resetIndex=0;
        var svgDataUri = [];
        listOfEmojis.forEach(emoji => {
            svgDataUri.push(\`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">\${emoji}</text></svg>\`);
        });


        function changeFavicon(){
            iconLinks.forEach(link => {
                link.href = svgDataUri[index];
                link.type = 'image/svg+xml'; // Ensure correct MIME type
                index = (index + 1) % svgDataUri.length;
    
            });
        }
    
        function resetFavicon(){
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
        
        document.addEventListener('visibilitychange', function(){
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
            startIconChange();
        }
    }) .catch(error => {
        console.error('Error in fetching data', error);
    });
    
  `;

    res.setHeader('Content-Type', 'application/javascript');
    res.send(scriptTemplate);
  });

  router.get('/generate-script', (req, res) => {
    const user = (req as IGetUserAuthInfoRequest).user;
    if (!user) {
      console.log('User not found');
      return res.status(StatusCodes.UNAUTHORIZED).send('User not found');
    }
    const dataId = user.uid;
    const url = env.NODE_ENV === 'test' ? 'http://localhost:3000/script.js' : 'https://yourdomain.com/script.js'; //todo: update domain
    const script = `<script defer src=${url} data-id=${dataId}></script>`;

    res.status(StatusCodes.OK).send(script);
  });
  return router;
})();
