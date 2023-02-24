function download(url){
    return new Promise((resolve,reject)=>{
        console.log("Download begins");
        setTimeout(()=>{
            if(!url) return reject("Url isn't present");
            
            let downloadedFile = url.split('/').pop();
            resolve(downloadedFile);
        },3000);
    })
}

function compress(downloadedFile){
    return new Promise((resolve,reject)=>{
        console.log("Compression starts!");
        setTimeout(()=>{
            if(!downloadedFile) return reject("Compression can't be completed");
            let compressedFile = downloadedFile.split('.')[0]+'.zip';
            resolve(compressedFile);
        },3000)
    })
}

function upload(compressedFile){
    return new Promise((resolve,reject)=>{
        console.log("uploading starts");
        setTimeout(()=>{
            if(!compressedFile) return reject("No file to upload");
            let newUrl = 'http://newMovie.com/'+compressedFile;
            resolve(newUrl);
        },3000)
    })
}


// let url = 'http://movies.com/avengers.mp4';

download(url)
.then((downloadedFile)=>{
    console.log("Download finish");
    return compress(downloadedFile);
})
.then((compressedFile)=>{
    console.log("Compression completes");
    // console.log(compressedFile);
    return upload(compressedFile);
})
.then((newUrl)=>{
    console.log("Uploading finish");
    console.log(newUrl);
})
.catch((err)=>{
    console.log(err);
})