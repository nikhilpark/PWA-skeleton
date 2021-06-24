if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration=>{
        console.log("SWA registered!")
        console.log(registration)
    }).catch(error=>{
        console.log("SWA failed");
        console.log(error);
    })
} else{
    console.log("Browser not supported")
}