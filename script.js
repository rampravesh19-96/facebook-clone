
// left sidebar 

const impLinksData = [
    {
      imgSrc: 'images/news.png',
      text: 'Latest News',
      link: '#'
    },
    {
      imgSrc: 'images/friends.png',
      text: 'Friends',
      link: '#'
    },
    {
      imgSrc: 'images/group.png',
      text: 'Group',
      link: '#'
    },
    {
      imgSrc: 'images/marketplace.png',
      text: 'Marketplace',
      link: '#'
    },
    {
      imgSrc: 'images/watch.png',
      text: 'Watch',
      link: '#'
    }
  ];
  
  const impLinksContainer = document.getElementById('imp-links');
  
  impLinksData.forEach(link => {
    const linkElement = document.createElement('a');
    linkElement.href = link.link;
    const imgElement = document.createElement('img');
    imgElement.src = link.imgSrc;
    linkElement.appendChild(imgElement);
    const textElement = document.createTextNode(link.text);
    linkElement.appendChild(textElement);
    impLinksContainer.appendChild(linkElement);
  });
  


// stories part 
const stories = [
    {
      name: 'Post story',
      imgSrc: 'images/upload.png',
    },
    {
      name: 'Alison',
      imgSrc: 'images/member-1.png',
    },
    {
      name: 'Jackson',
      imgSrc: 'images/member-2.png',
    },
    {
      name: 'Samona',
      imgSrc: 'images/member-3.png',
    },
    {
      name: 'John Doe',
      imgSrc: 'images/member-4.png',
    },
  ];
  
  const storyGallery = document.getElementById('story-gallery');
  
  stories.forEach((story, index) => {
    const storyDiv = document.createElement('div');
    storyDiv.classList.add('story', `story${index + 1}`);
    
    const img = document.createElement('img');
    img.src = story.imgSrc;
    storyDiv.appendChild(img);
    
    const p = document.createElement('p');
    p.textContent = story.name;
    storyDiv.appendChild(p);
    
    storyGallery.appendChild(storyDiv);
  });
  

// post part

const posts = [
    {
      user: {
        name: 'Jane Smith',
        profilePic: 'images/profile-pic.png',
      },
      timestamp: 'July 2 2021, 10:30 am',
      text: 'Just finished a great workout! #fitness #motivation',
      imgSrc: 'images/feed-image-1.png',
      likes: 80,
      comments: 12,
      shares: 6,
    },
    {
      user: {
        name: 'Michael Lee',
        profilePic: 'images/profile-pic.png',
      },
      timestamp: 'June 28 2021, 8:15 pm',
      text: 'I just tried this amazing new restaurant! If you love Italian food, you have to check it out. #foodie #yum',
      imgSrc: 'images/feed-image-2.png',
      likes: 240,
      comments: 32,
      shares: 15,
    },
    {
      user: {
        name: 'Sophie Davis',
        profilePic: 'images/profile-pic.png',
      },
      timestamp: 'July 1 2021, 12:20 pm',
      text: 'Excited to announce that I will be speaking at the Women in Business Conference next month! #womeninbusiness #speaker',
      imgSrc: 'images/feed-image-3.png',
      likes: 120,
      comments: 23,
      shares: 10,
    },
    {
      user: {
        name: 'David Chen',
        profilePic: 'images/profile-pic.png',
      },
      timestamp: 'June 30 2021, 9:45 am',
      text: 'Just booked my trip to Hawaii! Can’t wait to relax on the beach. #travel #vacation',
      imgSrc: 'images/feed-image-3.png',
      likes: 400,
      comments: 57,
      shares: 30,
    },
    {
      user: {
        name: 'Emily Kim',
        profilePic: 'images/profile-pic.png',
      },
      timestamp: 'June 29 2021, 4:00 pm',
      text: 'Happy National Ice Cream Day! What’s your favorite flavor? #icecream #yum',
      imgSrc: 'images/feed-image-4.png',
      likes: 180,
      comments: 28,
      shares: 12,
    },
    {
      user: {
        name: 'Erica Chen',
        profilePic: 'images/profile-pic.png',
      },
      timestamp: 'June 27 2021, 11:10 am',
      text: 'Just adopted the cutest puppy ever! Meet Luna. #puppylove #adoptdontshop',
      imgSrc: 'images/feed-image-5.png',
      likes: 320,
      comments: 46,
      shares: 25,
    }

]
  

  function createPostHTML(post) {
    const postHTML = `
      <div class="post-container">
        <div class="post-row">
          <div class="user-profile">
            <img src="${post.user.profilePic}">
            <div>
              <p>${post.user.name}</p>
              <span>${post.timestamp}</span>
            </div>
          </div>
          <a href="#"><i class="fas fa-ellipsis-v"></i></a>
        </div>
  
        <p class="post-text">${post.text}</p>
        <img src="${post.imgSrc}" class="post-img">
  
        <div class="post-row">
          <div class="activity-icons">
            <div><img src="images/like-blue.png">${post.likes}</div>
            <div><img src="images/comments.png">${post.comments}</div>
            <div><img src="images/share.png">${post.shares}</div>
          </div>
          <div class="post-profile-icon">
            <img src="${post.user.profilePic}"><i class="fa-solid fa-sort-down"></i>
          </div>
        </div>
      </div>
    `;
    return postHTML;
  }

const allPostsElem = document.getElementById('allpost');

function renderPosts(posts) {
  let postsHTML = '';
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const postHTML = createPostHTML(post);
    postsHTML += postHTML;
  }
  allPostsElem.innerHTML = postsHTML;
}

renderPosts(posts);


// ---------------- right sidebar ------------------

const eventsData = [
    {
      date: '18 March',
      name: 'Social Media',
      location: 'Willson Tech Park',
      link: '#',
    },
    {
      date: '22 June',
      name: 'Mobile Marketing',
      location: 'Willson Tech Park',
      link: '#',
    },

  ];
  
  const onlineListData = [
    {
      name: 'Alison Mina',
      imgSrc: 'images/member-1.png',
    },
    {
      name: 'Jackson Aston',
      imgSrc: 'images/member-2.png',
    },
    {
      name: 'Samona Rose',
      imgSrc: 'images/member-3.png',
    },
  ];
  
  const eventsContainer = document.getElementById('events-container');
  const onlineListContainer = document.getElementById('online-list-container');
  
  // Generate event data
  eventsData.forEach(event => {
    const eventHtml = `
      <div class="event">
        <div class="left-event">
          <h3>${event.date.split(' ')[0]}</h3>
          <span>${event.date.split(' ')[1]}</span>
        </div>
        <div class="right-event">
          <h4>${event.name}</h4>
          <p><i class="fa-solid fa-location-dot"></i> ${event.location}</p>
          <a href="${event.link}">More Info</a>
        </div>
      </div>
    `;
    eventsContainer.innerHTML += eventHtml;
  });
  
  // Generate online list data
  onlineListData.forEach(member => {
    const onlineListHtml = `
      <div class="online-list">
        <div class="online">
          <img src="${member.imgSrc}">
        </div>
        <p>${member.name}</p>
      </div>
    `;
    onlineListContainer.innerHTML += onlineListHtml;
  });
  














var settingsMenu = document.querySelector(".settings-menu")
var darkBtn = document.getElementById("dark-btn")

function settingsMenuToggle(){
    settingsMenu.classList.toggle("settings-menu-height")
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on")
    document.body.classList.toggle("dark-theme")

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme","dark")
    }else{
        localStorage.setItem("theme","light")

    }
}

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on")
    document.body.classList.remove("dark-theme")
}else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on")
    document.body.classList.add("dark-theme")
}else{
    localStorage.setItem("theme","light")
}







