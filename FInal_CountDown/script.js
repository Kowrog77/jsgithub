
        var app = new Vue({
            el:"#vueApp",
            data:{
                movies
                
            },
            methods:{
                arequest: function(){
                    if(httpRequest.readyState == 4 && httpRequest.status == 200){
                
                        var jsObject = JSON.parse(httpRequest.responseText);
                        console.log(jsObject);
                        for (i =0; i<3;i++){
                            this.movies += jsObject.results[i].title;
                            
                        }
                       
                       
                    }

                }

            }

        })

        var httpRequest = new XMLHttpRequest();

        httpRequest.open("get","https://api.themoviedb.org/3/movie/now_playing?api_key=e6d23d3c5882efc3dc5a4114859f6946")
        httpRequest.send();
        httpRequest.onreadystatechange = app.arequest;