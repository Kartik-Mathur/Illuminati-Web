function download(url){
    console.log("Download starts");
    return new Promise((resolve,reject)=>{
        let movieName = url.split('/').pop();
        let format = movieName.split('.').pop();
        if(format != 'mp4'){
            reject("We can only download mp4 files");
            return;
        }

        setTimeout(()=>{
            resolve(movieName);
        },3000);
    })
}

function compress(movieName){
    console.log("Compression starts "+movieName);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let compressedMovie = movieName.split('.')[0]+'.zip';
            resolve(compressedMovie);
        },3000);
    })
}

function upload(compressedMovie){
    console.log("Uploading starts "+compressedMovie);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let newUrl = 'http://newmovie.com'+compressedMovie;
            resolve(newUrl);
        },3000);
    })
}

download('http://movie.com/avengers.mp4')
.then((movieName)=>{
    console.log("Download complete! "+movieName);
    return movieName
})
.then((movieName)=>{
    return compress(movieName);
})
.then((compressedMovie)=>{
    return upload(compressedMovie);
})
.then((newUrl)=>{
    console.log(newUrl);
    console.log("All Done");
})
.catch(err=>console.log(err));