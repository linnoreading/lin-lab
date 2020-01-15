//regiter service worker
alert("Test");
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/lin-lab/sw.js',{scope:'/lin-lab/'}).then(function(reg){
        if(reg.installing){
            console.log('Service Worker installing');
        }else if(reg.waiting){
            console.log('Service Worker installed');
        }else if(reg.active){
            console.log('Service Worker active');
        }
    }).catch(function(error){
        //registration failed
        console.log('Regisitration failed with '+error);
    })
}

