const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let containerEl = document.getElementById("container")

let post = ""

function renderPosts(){
    
    for (let i=0; i<posts.length; i++){
        post += `
                <section class="post-section">        
                    <div class="posts">
                        <div>
                            <img class="avatar" src="${posts[i].avatar}">
                        </div>
                        
                        <div class="bio-data">
                            <p class="name">${posts[i].name}</p>
                            <p class="location">${posts[i].location}</p>
                        </div>
                    </div>
                    
                    <section>
                        <img class="post-img" src="${posts[i].post}" ondblclick="incrementLikes(${i})">
                    </section>
                    
                    <section class="icon-section">
                        <button class="heart" onclick="incrementLikes(${i})"><img src="images/icon-heart.png"></button>
                        
                        <button class="comment"><img src="images/icon-comment.png"></button>
                        
                        <button class="dm"><img src="images/icon-dm.png"></button>
                    </section>
                    
                    <section class="likes">
                        <p>${posts[i].likes} likes</p>
                    </section>
                
                    <section class="caption">
                        <p><span>${posts[i].username}</span> ${posts[i].comment}</p>
                    </section>
                    
                </section>
            `
}

containerEl.innerHTML = post
}

function incrementLikes(index){
    posts[index].likes++
    post = ""
    renderPosts()
}

renderPosts()