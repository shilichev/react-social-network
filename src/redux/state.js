let store = {
  _callSubscriber() {
    console.log("State was changed");
  },

  _state: {
    messagesPage: {
      dialogsData: [
        { name: "Danila", id: "1" },
        { name: "Masha", id: "2" },
        { name: "Sasha", id: "3" },
        { name: "Roma", id: "4" },
      ],
      messagesData: [
        { message: "Hi", id: "1", status: true },
        { message: "Hello", id: "2", status: false },
        { message: "How are u", id: "3", status: true },
        { message: "I'm fine", id: "4", status: false },
      ],
    },
    profilePage: {
      postsData: [
        { message: "Hello, world", id: 1 },
        { message: "Good morning", id: 2 },
        { message: "Garena murena", id: 3 },
        { message: "Что-нибудь из песни", id: 4 },
      ],
      post: "value",
    },
  },

  getState() {
  
    return this._state;
  },
  addPost(post) {
    let newPost = { message: post, id: 5 };
    this._state.profilePage.postsData.unshift(newPost);
    this._callSubscriber(this.getState());
  },
  updatePost(newPost) {
    this._state.profilePage.post = newPost;
    this._callSubscriber(this.getState());
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
